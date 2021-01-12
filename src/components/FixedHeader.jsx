import React from "react";
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

import logo from "../assets/sonicwall.svg";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: theme.palette.primary.light,
  },
  logo: {
    height: "6.5em",
  },
  // fixed header martin-top
  fixedHeaderFix: {
    ...theme.mixins.toolbar,
    marginBottom: "3.5em",
  },
}));

function FixedHeader() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar disableGutters>
          <img src={logo} alt="company logo" className={classes.logo} />
          <Typography variant="h4" align="center">
            Next Generation Firewall
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.fixedHeaderFix} />
    </>
  );
}

export default FixedHeader;
