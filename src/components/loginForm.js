import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useTranslation } from "react-i18next";

import {
  login,
  hideMessage
} from "../redux/actions/Auth";


import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: "10rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const LoginForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const showMessage = useSelector(state => state.auth.showMessage);
  const alertMessage = useSelector(state => state.auth.alertMessage);

  useEffect(() => {
  }, []);

  useEffect(() => {
    if (showMessage) {
      NotificationManager.error(alertMessage);
      dispatch(hideMessage());
    }
  }, [showMessage]);

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={"Email"}
              name="email"
              autoComplete="email"
              value={userEmail}
              onChange={event => setUserEmail(event.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={"Password"}
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={event => setPassword(event.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={userEmail === "" || password === "" ? true : false}
              onClick={() => {
                dispatch(login(userEmail, password));
              }}
            >
              Login
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
      <NotificationContainer />
    </>
  );
};

export default LoginForm;
