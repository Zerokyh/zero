/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
        192: "48rem",
        208: "52rem",
        224: "56rem",
        240: "60rem",
        256: "64rem",
        272: "68rem",
        288: "72rem",
      },
      colors: {
        darkmode: "#1E1E20",
      },
      // backgroundImage: {
      //   "main-image": "url(zero_blog/train.jpg)",
      // },
    },
    fontFamily: {
      pretendard: ["Pretendard-Regular"],
      pyeongchang: ["PyeongChangPeace-Bold"],
      handwriting: ["Ownglyph_UNZ-Rg"],
      chogoon: ["CHOGOONChickenScratchV2-Medium"],
    },
  },
  plugins: [],
};
