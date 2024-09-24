import MyProfileTaps from "./MyProfileTaps";

const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-screen-2xl w-svw h-full flex items-center">
        <div className="h-96 flex mx-auto">
          <div className="flex flex-col items-center mx-auto px-20 gap-6">
            <img
              className="w-full h-full object-contain rounded-xl"
              src="man.jpg"
              alt=""
            />
            <div className="flex flex-col items-center gap-1">
              <span className="w-fit font-handwriting text-4xl">김윤호</span>
              <span className="w-fit font-handwriting text-2xl">
                Kim Yun Ho
              </span>
            </div>
          </div>
          <div>
            <MyProfileTaps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
