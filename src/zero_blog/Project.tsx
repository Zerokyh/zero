import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto gap-10 p-10 border shadow-lg rounded-lg ">
      {/* 헤더 */}
      <div className="text-center mb-5">
        <h1 className="text-3xl font-bold ">Projects Overview</h1>
      </div>
      {/* 프로젝트별 그룹화 */}
      <div className="flex flex-col gap-10">
        {/* 첫 번째 프로젝트 (5개월차) */}
        <div className="flex flex-col gap-5 border-b-2 border-gray-700 pb-5">
          <div className="flex justify-between items-center">
            <div className="w-32 text-lg font-semibold ">2024.09</div>
            <div className="flex-grow text-gray-400">
              [코리아IT아케데미] 5개월차 소모임 프로젝트
            </div>
            <div className="flex gap-10">
              <div
                className="cursor-pointer hover:text-sky-400 transition-colors duration-200"
                onClick={() => navigate("/ProjectPtt")}
              >
                담당 페이지 보기
              </div>
              <div className="cursor-pointer hover:text-sky-400 transition-colors duration-200">
                <a href="https://slow-trumpet-3d9.notion.site/Project-PlayTogetherToday-07730b01867145aeadbafcd58ea393ac?pvs=4">
                  노션 페이지
                </a>
              </div>
              <div className="cursor-pointer hover:text-sky-400 transition-colors duration-200">
                <a href="https://victorious-pond-07ef29800.5.azurestaticapps.net/">
                  사이트 방문
                </a>
              </div>
            </div>
          </div>
          {/* 스펙 카드 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="font-semibold text-lg text-white">사용한 스펙</div>
            <div className="mt-2">
              <div className="flex items-center">
                <span className="font-medium text-gray-300">프론트:</span>
                <span className="ml-2 text-gray-400">
                  React + MUI + useState + useEffect + Zustand + axios
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-300">백엔드:</span>
                <span className="ml-2 text-gray-400">SpringBoot</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-300">데이터베이스:</span>
                <span className="ml-2 text-gray-400">MySQL</span>
              </div>
            </div>
          </div>
        </div>
        {/* 두 번째 프로젝트 (4개월차) */}
        <div className="flex flex-col gap-5 border-b-2 border-gray-700 pb-5">
          <div className="flex justify-between items-center">
            <div className="w-32 text-lg font-semibold">2024.08</div>
            <div className="flex-grow text-gray-400">
              [코리아IT아케데미] 4개월차 학생관리프로그램 프로젝트
            </div>
            <div className="flex gap-10">
              <div
                className=" cursor-pointer hover:text-sky-400 transition-colors duration-200"
                onClick={() => navigate("/ProjectStudent")}
              >
                담당 페이지 보기
              </div>
              <div className=" cursor-pointer hover:text-sky-400 transition-colors duration-200">
                <a href="https://slow-trumpet-3d9.notion.site/4-4d672ebcf97b481ea618d89a4f8f538d?pvs=4">
                  노션 페이지
                </a>
              </div>
              <div className=" cursor-pointer hover:text-sky-400 transition-colors duration-200">
                <a href="https://orange-pebble-038562e00.5.azurestaticapps.net/">
                  사이트 방문
                </a>
              </div>
            </div>
          </div>
          {/* 스펙 카드 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="font-semibold text-lg text-white">사용한 스펙</div>
            <div className="mt-2">
              <div className="flex items-center">
                <span className="font-medium text-gray-300">프론트:</span>
                <span className="ml-2 text-gray-400">
                  React + Tailwind + MUI + useState + useEffect + Zustand +
                  Axios
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-300">백엔드:</span>
                <span className="ml-2 text-gray-400">Node.js + Express.js</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-300">데이터베이스:</span>
                <span className="ml-2 text-gray-400">MySQL</span>
              </div>
            </div>
          </div>
        </div>
        {/* 로그인 정보 */}
        <div className="flex flex-col items-center gap-5 pt-5">
          <div className="font-semibold text-lg ">로그인 정보</div>
          <div className="flex gap-10">
            {/* 첫 번째 프로젝트 (학생관리프로그램 프로젝트) 로그인 정보 */}
            <div className="h-14 text-gray-400 flex flex-col justify-center">
              <div>사이트: 학생관리프로그램</div>
              <div>ID : User1</div>
              <div>PW : qwer1234</div>
            </div>
            {/* 두 번째 프로젝트 (소모임 프로젝트) 로그인 정보 */}
            <div className="h-14 text-gray-400 flex flex-col justify-center">
              <div>사이트: 소모임 프로젝트</div>
              <div>ID : hong@naver.com</div>
              <div>PW : P@ssw0rd</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
