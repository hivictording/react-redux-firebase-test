import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  Fade,
  Zoom,
  Slide,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/sonicwall.svg";

const menus = [
  {
    pathname: "/",
    description: "Home",
  },
  {
    pathname: "/products",
    description: "Products",
    subMenus: [
      {
        pathname: "/nsa",
        description: "NSA Products",
      },
      {
        pathname: "/tz",
        description: "TZ Products",
      },
      {
        pathname: "/sm",
        description: "SuperMassive Products",
      },
    ],
  },
  {
    pathname: "/solutions",
    description: "Solutions",
  },
  {
    pathname: "/partners",
    description: "Partners",
  },
  {
    pathname: "/support",
    description: "Support",
  },
];

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: theme.palette.primary,
  },
  logo: {
    height: "6.5em",
  },
  logoWrapper: {
    padding: 0,
    "&:hover": {
      background: "transparent",
      color: theme.palette.common.black,
    },
  },
  // fixed header martin-top
  fixedHeaderFix: {
    ...theme.mixins.toolbar,
    marginBottom: "3.5em",
  },
  tabs: {
    marginLeft: "auto",
  },
  tab: {
    textTransform: "none",
    minWidth: "10px",
    fontSize: "1rem",
    "&:hover": {
      textDecoration: "none",
      opacity: 1,
      color: "inherit",
    },
  },
  tabIndicator: {
    background: theme.palette.primary.main,
  },
  menuItem: {
    color: theme.palette.common.white,
    opacity: 0.7,
    "&:hover": {
      color: theme.palette.common.white,
      opacity: 1,
    },
  },
  menu: {
    background: theme.palette.primary.main,
  },
  estimate: {
    marginRight: "15px",
    marginLeft: "25px",
  },
}));

function FixedHeader() {
  const location = useLocation();

  const classes = useStyles();

  const index = menus.findIndex((menu) => menu.pathname === location.pathname);
  const currentTab = index !== -1 ? index : 0;

  const [tab, setTab] = React.useState(currentTab);
  const [anchor, setAnchor] = React.useState(null);

  const handleOpenMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchor(null);
  };

  const handleTabChange = (event, value) => {
    setTab(value);
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar disableGutters>
          <Button
            disableRipple
            component={Link}
            to="/"
            className={classes.logoWrapper}
            onClick={() => setTab(0)}
          >
            <img src={logo} alt="company logo" className={classes.logo} />
            <Typography variant="h4" align="center">
              NGFW
            </Typography>
          </Button>

          <Tabs
            value={tab}
            onChange={handleTabChange}
            // indicatorColor="primary"
            TabIndicatorProps={{
              // style: { background: "orange", height: "5px" },
              className: classes.tabIndicator,
            }}
            // className={classes.tabs}
            classes={{
              root: classes.tabs,
            }}
          >
            {menus.map((menu) => (
              <Tab
                key={menu.pathname}
                label={menu.description}
                component={Link}
                to={menu.pathname}
                // className={classes.tab}
                classes={{
                  root: classes.tab,
                }}
              />
            ))}
            <Tab
              label="Company"
              component={Link}
              to="/company"
              classes={{
                root: classes.tab,
              }}
              onMouseOver={(event) => handleOpenMenu(event)}
            />
          </Tabs>
          <Button
            variant="contained"
            color="secondary"
            className={classes.estimate}
          >
            Contact Sales
          </Button>

          <Menu
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={handleCloseMenu}
            keepMounted
            MenuListProps={{
              onMouseLeave: handleCloseMenu,
              // className: classes.menuItem,
            }}
            elevation={0}
            TransitionComponent={Zoom}
            timeout={5000}
            classes={{
              // list: classes.menuItem,
              paper: classes.menu,
            }}
          >
            <MenuItem
              onClick={() => {
                handleCloseMenu();
                setTab(5);
              }}
              component={Link}
              to="/company"
              classes={{
                root: classes.menuItem,
              }}
            >
              Company
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseMenu();
                setTab(5);
              }}
              component={Link}
              to="/news"
              classes={{
                root: classes.menuItem,
              }}
            >
              News
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseMenu();
                setTab(5);
              }}
              component={Link}
              to="/press"
              classes={{
                root: classes.menuItem,
              }}
            >
              Press
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseMenu();
                setTab(5);
              }}
              component={Link}
              to="/careers"
              classes={{
                root: classes.menuItem,
              }}
            >
              Careers
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <div className={classes.fixedHeaderFix} />
    </>
  );
}

export default FixedHeader;
