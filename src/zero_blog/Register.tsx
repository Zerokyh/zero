import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [signUp, setSignUp] = useState({ id: "", pw: "", pwch: "" });
  const navigate = useNavigate();

  const isIdPassed = signUp.id.includes("@");
  const isPwLengthPassed = 8 < signUp.pw.length && signUp.pw.length <= 15;
  const isPwPwchPassed = signUp.pw === signUp.pwch;

  const isPass = isIdPassed && isPwLengthPassed && isPwPwchPassed;

  // const isAllLength =
  //   !!signUp.id.length && !!signUp.pw.length && !!signUp.pwch.length;
  // const isAllPassed = signUp.id.includes("@") && signUp.pw === signUp.pwch;

  const handleId = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUp((v) => ({ ...v, id: e.target.value }));
  };
  const handlePw = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUp((v) => ({ ...v, pw: e.target.value }));
  };
  const handlePwch = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUp((v) => ({ ...v, pwch: e.target.value }));
  };

  return (
    <div className="max-w-screen-2xl w-svw mx-auto h-full flex justify-center items-center border">
      <form className="flex flex-col w-1/3 h-2/3 items-center justify-center gap-8 border rounded-2xl">
        <div className="flex w-full justify-center items-center gap-3">
          <div className="w-32 text-center font-pretendard">
            ID <span className="text-red-600 font-bold">*</span>
          </div>
          <input
            type="text"
            onChange={handleId}
            className="w-60 border"
            placeholder="이메일을 입력해주세요"
          />
          <div
            className={
              isIdPassed
                ? "w-2 h-2 rounded-full bg-green-600"
                : "w-2 h-2 rounded-full bg-red-600"
            }
          ></div>
        </div>
        <div className="flex w-full justify-center items-center gap-3">
          <div className="w-32 text-center font-pretendard">
            비밀번호 <span className="text-red-600 font-bold">*</span>
          </div>
          <input
            type="password"
            onChange={handlePw}
            className="w-60 border"
            placeholder="특수문자, 숫자, 영문 3가지 조합으로 8자 이상 15이하로 입력해 주세요"
          />
          <div
            className={
              isPwLengthPassed && isPwPwchPassed
                ? "w-2 h-2 rounded-full bg-green-600"
                : "w-2 h-2 rounded-full bg-red-600"
            }
          ></div>
        </div>
        <div className="flex w-full justify-center items-center gap-3">
          <div className="w-32 text-center font-pretendard">
            비밀번호 확인 <span className="text-red-600 font-bold">*</span>
          </div>
          <input
            type="password"
            onChange={handlePwch}
            className="w-60 border"
            placeholder="동일한 비밀번호를 입력해 주세요"
          />
          <div
            className={
              isPwPwchPassed
                ? "w-2 h-2 rounded-full bg-green-600"
                : "w-2 h-2 rounded-full bg-red-600"
            }
          ></div>
        </div>
        <div className="flex w-full justify-center gap-3 pr-5">
          <div className="w-32 text-center font-pretendard">이메일</div>
          <input type="text" className="w-60 border" />
        </div>
        <div className="flex w-full justify-center gap-3 pr-5">
          <div className="w-32 text-center font-pretendard">주소</div>
          <input type="text" className="w-60 border" />
        </div>

        <div className="flex w-full justify-center gap-3 pr-5">
          <div className="w-32 text-center font-pretendard">연락처</div>
          <input type="text" className="w-60 border" />
        </div>

        <div className="flex flex-col text-xs items-center justify-center text-sky-700">
          <span>ID, 비밀번호, 비밀번호 확인을 올바르게</span>
          <span>입력해야 가입하기 버튼이 활성화됩니다 😄</span>
        </div>

        <div>
          <button
            className={
              isPass
                ? "px-4 py-2 rounded-xl font-handwriting text-white bg-sky-700 text-3xl"
                : "px-4 py-2 rounded-xl font-handwriting text-white bg-slate-500 text-3xl"
            }
            onClick={() =>
              isPass ? alert("축하해😁 회원가입 성공!") : navigate("/Login")
            }
          >
            {isPass ? "가입하기" : "안돼 돌아가"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
