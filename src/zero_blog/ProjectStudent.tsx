const ProjectStudent = () => {
  return (
    <div className="w-full h-screen overflow-y-auto flex flex-col items-center py-20">
      <div className="w-192 flex flex-col gap-14 ">
        <div>
          <span>[ 메인 화면 - 접힌 사이드바 ]</span>
          <img src="./student/main-1.png"></img>
        </div>
        <div>
          <span>[ 메인 화면 - 펼친 사이드바 ]</span>
          <img src="./student/main-2.png"></img>
        </div>
        <div>
          <span>[ 메인 화면 - 사이드바 맨아래 Light/Dark 모드 버튼 ]</span>
          <img src="./student/main-3.png"></img>
        </div>
        <div className="my-10">
          <span>[ 로그인 페이지 및 로그인 전 우측상단 Login 버튼 ]</span>
          <img src="./student/Login-1.png"></img>
        </div>
        <div>
          <span>[ 로그인 된 화면 및 우측 상단 유저아이콘으로 변경 ]</span>
          <img src="./student/Login-2.png"></img>
        </div>
        <div className="my-10">
          <span>[ 로그아웃 전 우측상단 유저 아이콘 ]</span>
          <img src="./student/Logout-1.png"></img>
        </div>
        <div>
          <span>[ 로그아웃 된 화면 및 우측 상단 Login 버튼으로 변경 ]</span>
          <img src="./student/Logout-2.png"></img>
        </div>
        <div>
          <span>[ 로그인 후 우측 상단 유저메뉴 ]</span>
          <img src="./student/UserMenu.png"></img>
        </div>
        <div>
          <span>
            [ 실시간으로 변경되는 QR코드 페이지 - 카메라에 인식시키면 매시간이
            뜸 ]
          </span>
          <img src="./student/Qrcord.png"></img>
        </div>
        <div>
          <span>[ 우측 상단 유저 메뉴에서 Account 메뉴 ]</span>
          <img src="./student/Account-1.png"></img>
        </div>
        <div className="my-10">
          <span>
            [ 로그인한 계정의 현재 비밀번호와 일치하면 녹색 체크 표시 ]
          </span>
          <img src="./student/Account-2.png"></img>
        </div>
        <div>
          <span>[ 변경할 비밀번호와 재입력이 일치하면 녹색 체크 표시 ]</span>
          <img src="./student/Account-3.png"></img>
        </div>
        <div>
          <span>[ 사이드 메뉴에서 학생 관리 페이지 ]</span>
          <img src="./student/Consulting-0.png"></img>
        </div>
        <div>
          <span>[ Course 드롭 메뉴 선택 ]</span>
          <img src="./student/Consulting-1.png"></img>
        </div>
        <div className="my-10">
          <span>[ 선택한 Course의 학생 정보 리스트 출력 ]</span>
          <img src="./student/Consulting-2.png"></img>
        </div>
        <div>
          <span>
            [ 특정 학생 클릭 시 학생이 수강중인 과정 및 강사 평가 출력 ]
          </span>
          <img src="./student/Consulting-3.png"></img>
        </div>
      </div>
    </div>
  );
};

export default ProjectStudent;
