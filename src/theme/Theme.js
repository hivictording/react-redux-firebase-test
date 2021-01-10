import { createMuiTheme } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";

export default createMuiTheme({
  palette: {
    primary: {
      main: green[800],
    },
    secondary: {
      main: purple[500],
    },
  },
});
