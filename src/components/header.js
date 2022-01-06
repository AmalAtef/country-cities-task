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
import {Link } from "react-router-dom";

import { getCookie } from "../util/session";
import base64url from "base64url";


import {
  logout
} from "../redux/actions/Auth";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";


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

  return (
    <>
      <div className={classes.root}>
         <HideOnScroll {...props}>
            <AppBar>
              <Toolbar className={classes.bar}>
                <Grid container spacing={2}>
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
                  <Grid item xs={6} className={"g-70"} style={{textAlign: "end"}}>
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
