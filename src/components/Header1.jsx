import React from "react";
import { AppBar, Toolbar, Grid, Paper } from "@material-ui/core";

function Header1() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper>xs</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>xs</Paper>
          </Grid>
          <Grid item xs>
            <Paper>xs</Paper>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header1;
