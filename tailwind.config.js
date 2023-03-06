/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
        "110v": "110vh",
        "120v": "120vh",
        "130v": "130vh",
        "140v": "140vh",
        "150v": "150vh",
        "160v": "160vh",
        "170v": "170vh",
        "180v": "180vh",
      },
      width: {
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "60v": "60vw",
        "70v": "70vw",
        "80v": "80vw",
        "90v": "90vw",
        "100v": "100vw",
      },
      fontFamily: {
        bugfast: ["Bugfast", "Sans"],
      },
      fontSize: {
        head: "6.5rem",
      },
      margin: {
        "30n": "-30px",
        "40n": "-40px",
        "50n": "-50px",
        "60n": "-60px",
        "70n": "-70px",
        "80n": "-80px",
        "90n": "-90px",
      },
    },
  },
  plugins: [],
};
