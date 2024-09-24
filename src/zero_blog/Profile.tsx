const Profile = () => {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto p-6 border shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Profile</h2>
      <div className="flex justify-between items-center border-b-2 border-gray-300 pb-2 mb-4">
        <div className="text-lg font-medium">Name</div>
        <div className="text-lg text-gray-600">김윤호</div>
      </div>
      <div className="flex justify-between items-center border-b-2 border-gray-300 pb-2 mb-4">
        <div className="text-lg font-medium">Tel</div>
        <div className="text-lg text-gray-600">010-9077-9208</div>
      </div>
      <div className="flex justify-between items-center border-b-2 border-gray-300 pb-2 mb-4">
        <div className="text-lg font-medium">E-Mail</div>
        <div className="text-lg text-gray-600">koreaguh@naver.com</div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-lg font-medium">Major</div>
          <div className="text-lg font-medium">Career</div>
        </div>
        <div className="flex flex-col text-gray-600">
          <div className="flex items-center gap-2">
            <div>2010.</div>
            <div>안산공과대학 컴퓨터정보과 졸업</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
