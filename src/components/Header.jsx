import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import { pink, teal, orange } from "@material-ui/core/colors";

const useHeaderStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    header: {
      textAlign: "center",
      color: theme.palette.primary.main,
      [theme.breakpoints.down("xs")]: {
        background: (props) => props.color,
      },
      [theme.breakpoints.up("sm")]: {
        background: orange[600],
      },
      [theme.breakpoints.up("md")]: {
        background: teal[600],
      },
      [theme.breakpoints.up("lg")]: {
        background: pink[600],
      },
    },
  };
});
// const useHeaderStyles = makeStyles({
//   header: {
//     textAlign: "center",
//     color: (props) => props.color,
//   },
// });

const anotherStyles = {
  header: {
    textAlign: "center",
  },
};

function Header(props) {
  // withStyles
  //   return <div className={props.classes.header}>Redux firebase with Material-UI</div>;

  // makeStyles
  const styles = useHeaderStyles(props);
  return <div className={styles.header}>Hello Header</div>;
}
export default Header;

// export default withStyles(anotherStyles)(Header);
