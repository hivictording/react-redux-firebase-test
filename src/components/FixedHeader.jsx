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
  Zoom,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

import menus from "./menus";
import logo from "../assets/sonicwall.svg";

const companyOptions = [
  {
    pathname: "/company",
    description: "Company",
  },
  {
    pathname: "/news",
    description: "News",
  },
  {
    pathname: "/press",
    description: "Press",
  },
  {
    pathname: "/careers",
    description: "Careers",
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
  menuItemSelected: {
    opacity: 1,
    backgroundColor: theme.palette.primary.dark,
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

  let currentTab = 0,
    currentSubMenu = 0;

  for (const menu of menus) {
    if (menu.pathname === location.pathname) {
      currentTab = menus.findIndex((m) => m.pathname === menu.pathname);
      break;
    }
    for (const subMenu of menu.subMenus) {
      if (subMenu.pathname === location.pathname) {
        currentTab = menus.findIndex((m) => m.pathname === menu.pathname);
        currentSubMenu = menu.subMenus.findIndex(
          (s) => s.pathname === subMenu.pathname
        );
        break;
      }
    }
  }

  const [tab, setTab] = React.useState(currentTab);
  const [anchor, setAnchor] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(currentSubMenu);

  const handleOpenMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchor(null);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
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
            {menus.map((menu) =>
              menu.pathname === "/company" ? (
                <Tab
                  key={menu.pathname}
                  label={menu.description}
                  component={Link}
                  to={menu.pathname}
                  // className={classes.tab}
                  classes={{
                    root: classes.tab,
                  }}
                  onMouseOver={(event) => handleOpenMenu(event)}
                />
              ) : (
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
              )
            )}

            <Menu
              anchorEl={anchor}
              open={Boolean(anchor)}
              onClose={handleCloseMenu}
              // keepMounted
              MenuListProps={{
                onMouseLeave: handleCloseMenu,
                // className: classes.menuItem,
              }}
              elevation={0}
              TransitionComponent={Zoom}
              classes={{
                // list: classes.menuItem,
                paper: classes.menu,
              }}
            >
              {companyOptions.map((option, index) => (
                <MenuItem
                  key={option.pathname}
                  onClick={(event) => {
                    handleMenuItemClick(event, index);
                    setTab(5);
                  }}
                  selected={selectedIndex === index}
                  component={Link}
                  to={option.pathname}
                  classes={{
                    root: classes.menuItem,
                    selected: classes.menuItemSelected,
                  }}
                >
                  {option.description}
                </MenuItem>
              ))}
            </Menu>
          </Tabs>

          <Button
            variant="contained"
            color="secondary"
            className={classes.estimate}
          >
            Contact Sales
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.fixedHeaderFix} />
    </>
  );
}

export default FixedHeader;
