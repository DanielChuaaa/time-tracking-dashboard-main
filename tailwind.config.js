/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ffp: "Rubik, sans-serif",
      },
      fontSize: {
        text18: "18px",
      },
      colors: {
        Blue: "hsl(246, 80%, 60%)",
        Lightredwork: "hsl(15, 100%, 70%)",
        Softblue: "hsl(195, 74%, 62%)",
        Lightred: "hsl(348, 100%, 68%)",
        Limegreen: "hsl(145, 58%, 55%)",
        Violet: "hsl(264, 64%, 52%)",
        Softorange: "hsl(43, 84%, 65%)",
        Verydarkblue: "hsl(226, 43%, 10%)",
        Darkblue: "hsl(235, 46%, 20%)",
        Desaturatedblue: "hsl(235, 45%, 61%)",
        PaleBlue: "hsl(236, 100%, 87%)",
        hoverTimeCard: "hsl(235 45% 29%)",
      },
      height: {
        h33: "33%",
      },
      margin: {
        mt22: "2.2rem",
      },
      maxWidth: {
        mxw12: "11ch",
      },
      lineHeight: {
        lh12: "3rem",
      },
      gap: {
        gap10: "10%",
      },
      gridTemplateColumns: {
        gridcustom: "85px 1fr",
      },
    },
  },
  plugins: [],
};
