import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";

function Header2() {
  return (
    <AppBar position="static" style={{ background: "lightsalmon" }}>
      <Toolbar>
        <Typography style={{ flex: "1" }}>Material UI Test</Typography>
        <SportsKabaddiIcon />
      </Toolbar>
    </AppBar>
  );
}

export default Header2;
