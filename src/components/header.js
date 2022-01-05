import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { getCookie } from "../util/session";
import base64url from "base64url";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

import Fade from "@material-ui/core/Fade";


import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Login from "../pages/login";
import Country from "../pages/country";
import City from "../pages/city";

import {
  logout
} from "../redux/actions/Auth";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles(theme => ({
  root: {
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  bar: {
    backgroundColor: "white"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
    width: "40%"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = props => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const authUser = useSelector(state => state.auth.authUser);
  const isLogin = useSelector(state => state.auth.isLogin);

  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  const handleMenu = event => {
    setAnchor(event.currentTarget);
  };

  const [tokenUserData, setTokenUserData] = useState(null);

  useEffect(() => {
    const tokenValue = getCookie("access_token", false);
    if (tokenValue != undefined) {
      setTokenUserData(
        JSON.parse(base64url.decode(`${tokenValue}`.split(".")[1]))
      );
    }
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <div className={classes.root}>
         <HideOnScroll {...props}>
            <AppBar>
              <Toolbar className={classes.bar}>
                <Grid container>
                  <Grid item xs={6} className={"g-30"}>
                    {isMobile ? (
                      <>
                        <IconButton
                          color="textPrimary"
                          className={classes.menuButton}
                          edge="start"
                          aria-label="menu"
                          onClick={handleMenu}
                        >
                          <MenuIcon />
                        </IconButton>
                        <Menu
                          id="menu-appbar"
                          anchorEl={anchor}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right"
                          }}
                          KeepMounted
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right"
                          }}
                          open={open}
                        >
                          <MenuItem
                            onClick={() => setAnchor(null)}
                            component={Link}
                            to="/"
                          >
                            <Typography variant="h6">
                              Countries
                            </Typography>
                          </MenuItem>
                          <MenuItem
                            onClick={() => setAnchor(null)}
                            component={Link}
                            to="/cities"
                          >
                            <Typography variant="h6">
                             Cities
                            </Typography>
                          </MenuItem>
                        </Menu>
                      </>
                    ) : 
                        <div style={{ marginRight: "2rem" }}>
                          <Button
                            variant="text"
                            component={Link}
                            to="/"
                            color="default"
                          >
                            Countries
                          </Button>
                          <Button
                            variant="text"
                            component={Link}
                            to="/cities"
                            color="default"
                          >
                          cities
                          </Button>
                         
                        </div>
                      
                    }
                  </Grid>
                  <Grid item xs={6} className={"g-70"}>
                      {isLogin && authUser && (
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => {
                             dispatch(logout());
                          }}
                        >
                         logout
                        </Button>
                      )}
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
        </HideOnScroll> 
      </div>
      <NotificationContainer />
    </>
  );
};

export default Header;
