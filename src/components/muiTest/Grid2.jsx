import React from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Chip,
  Hidden,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  test: {
    // height: "50px",
    background: "lightgray",
  },
});

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

function Grid2() {
  const classes = useStyles();

  console.log(new Array(3).fill(null).map((item, index) => index));
  return (
    <Container spacing={4}>
      <Item xs={12} md={3}>
        <Container direction="column" spacing={2}>
          <Item>
            <Chip label="Item 1" />
            <Chip label="Item 1" />
          </Item>
          <Item>
            <Chip label="Item 2" />
            <Chip label="Item 2" />
          </Item>
        </Container>
      </Item>
      <Item xs={12} md={3}>
        <Container direction="column" spacing={2}>
          <Item>
            <Paper>
              <Typography variant="h5" color="error">
                Item 3
              </Typography>
            </Paper>
          </Item>
          <Item>
            <Paper>Item 4</Paper>
          </Item>
        </Container>
      </Item>
      <Item
        container
        xs={12}
        md={3}
        spacing={2}
        justify="space-between"
        alignItems="center"
        className={classes.test}
      >
        {/* <Container spacing={2} justify="space-around"> */}
        <Item>
          <Paper>Item 5</Paper>
        </Item>
        <Item>
          <Paper>Item 6</Paper>
        </Item>
        {/* </Container> */}
      </Item>
      <Hidden smDown>
        <Item md={3}>
          <Container direction="column" spacing={2}>
            <Item>
              <Paper>Item 7</Paper>
            </Item>
            <Item>
              <Paper>Item 8</Paper>
            </Item>
          </Container>
        </Item>
      </Hidden>
    </Container>
  );
}

export default Grid2;
