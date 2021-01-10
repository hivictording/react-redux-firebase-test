import React from "react";
import { makeStyles, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: "10px 10px",
    },
    paper: {
      background: theme.palette.primary.main,
    },
  };
});

function Grid1() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper
          className={classes.paper}
          //   variant="outlined"
          square
          elevation={20}
        >
          xs={12} sm={6} md={4} lg={3}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper className={classes.paper}>
          xs={12} sm={6} md={4} lg={3}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper className={classes.paper}>
          xs={12} sm={6} md={4} lg={3}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper className={classes.paper}>
          xs={12} sm={6} md={4} lg={3}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Grid1;
