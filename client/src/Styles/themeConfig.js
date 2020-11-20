import { createMuiTheme } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/amber";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: amber[900],
    },
  },
});

export default theme;
