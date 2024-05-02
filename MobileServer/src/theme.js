import { extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#ffe3e3",
      100: "#ffbfbf", // variant='subtle'
      200: "#ff9b9b",
      300: "#ff7676",
      400: "#ff5252",
      500: "#952323",
      600: "#952323", // default theme
      700: "#ff0000",
      800: "#952323", // when button is pressed
      900: "#cc0000",
    },
  },
});
export default theme;
