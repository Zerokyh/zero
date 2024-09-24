import { useState } from "react";
import Contents from "./Contents";
import useThemeStore from "../store/store";

const MyProfileTaps = () => {
  const [tablist, setTabList] = useState([
    {
      subject: "연락처",
      isSelect: true,
      contents: [
        {
          email: "koreaguh@naver.com",
          phone: "010-9077-9208",
        },
      ],
    },
    {
      subject: "취미",
      isSelect: false,
      contents: [
        {
          habby: ["코인노래방 가기", "어울리는 노래 찾기", "구경다니기"],
        },
      ],
    },
    {
      subject: "플리",
      isSelect: false,
      contents: [
        {
          playlist: [
            "이창섭 - 천상연",
            "폴킴 - 안녕",
            "허각 - 물론",
            "스탠딩에그 - 오래된 노래",
            "장덕철 - 그날처럼",
            "비스트 - Fiction",
            "Shawn Mendes - Mercy",
          ],
        },
      ],
    },
  ]);

  const click = (i: number) => {
    setTabList((prev) => {
      const newTapList = prev.map((v, index) =>
        i === index ? { ...v, isSelect: true } : { ...v, isSelect: false }
      );
      return newTapList;
    });
  };

  const selected = "w-30 px-8 py-6 mx-2 text-center border-b-2 border-black";
  const notSelected = "w-30 px-8 py-6 mx-2 text-center border-b-2";
  const darkSelected =
    "w-30 px-8 py-6 mx-2 text-center border-b-2 border-orange-400";
  const darkNotSelected = "w-30 px-8 py-6 mx-2 text-center border-b-2";
  const { theme } = useThemeStore();

  return (
    <>
      <div className="flex flex-col gap-10">
        <nav className="flex justify-center">
          {tablist.map((v, i) => {
            return (
              <div
                onClick={() => click(i)}
                className={
                  theme === "Light"
                    ? v.isSelect
                      ? selected
                      : notSelected
                    : v.isSelect
                    ? darkSelected
                    : darkNotSelected
                }
              >
                <button className="font-handwriting text-3xl">
                  {v.subject}
                </button>
              </div>
            );
          })}
        </nav>
        <div>
          {tablist.map((v) => {
            return v.isSelect && v.contents.map((v1) => <Contents {...v1} />);
          })}
        </div>
      </div>
    </>
  );
};

export default MyProfileTaps;
