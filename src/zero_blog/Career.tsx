const Career = () => {
  return (
    <div className="w-160 h-80 flex flex-col justify-center items-center gap-5">
      {" "}
      {/* width increased */}
      <div className="w-128 flex gap-2 items-center mb-4">
        <div className="font-bold text-lg">Major</div>
        <div className="font-bold text-lg">Career</div>
      </div>
      <div className="w-128 flex flex-col gap-3">
        {/* Career Item */}
        <div className="flex gap-3 p-3 border rounded-lg shadow-md">
          <div className="text-sm text-gray-500">2023.07 ~ 2024.01</div>
          <div className="text-md">인스젠시스템즈 IT Infra 사원 근무</div>
        </div>
        {/* Career Item */}
        <div className="flex gap-3 p-3 border rounded-lg shadow-md">
          <div className="text-sm text-gray-500">2022.11 ~ 2023.06</div>
          <div className="text-md">
            러셀로보틱스 기술연구소 사원(계약직) 근무
          </div>
        </div>
        {/* Career Item */}
        <div className="flex gap-3 p-3 border rounded-lg shadow-md">
          <div className="text-sm text-gray-500">2017.03 ~ 2021.05</div>
          <div className="text-md">
            KINX 네트워크운영 유닛 네트워크엔지니어 근무
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
