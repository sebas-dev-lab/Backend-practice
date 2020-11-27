import { createMuiTheme } from "@material-ui/core/styles";
import { amber, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: amber[900],
      mainGradient: "linear-gradient(to right, tomato, cyan)",
      table: grey[800],
    },
    secondary: {
      main: grey[900],
    },
  },
  typography: {
    fontFamily: "Lato",
  },
  // "palette":{"common":{"black":"rgba(227, 110, 0, 1)","white":"rgba(60, 60, 60, 1)"},"background":{"paper":"rgba(255, 255, 255, 1)","default":"#fafafa"},"primary":{"light":"rgba(228, 127, 0, 0.74)","main":"rgba(255, 142, 0, 1)","dark":"rgba(199, 110, 0, 1)","contrastText":"rgba(3, 0, 0, 1)"},"secondary":{"light":"rgba(82, 82, 82, 0.81)","main":"rgba(69, 69, 69, 1)","dark":"rgba(44, 44, 44, 1)","contrastText":"#fff"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(255, 142, 0, 1)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}}}{
});

export default theme;
