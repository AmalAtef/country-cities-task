import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles} from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";

import { getCookie } from "../util/session";
import base64url from "base64url";


import {
} from "../redux/actions/Auth";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";


const Cities = props => {
  const dispatch = useDispatch();

  useEffect(() => {
  }, []);


  return (
    <>
      <NotificationContainer />
    </>
  );
};

export default Cities;
