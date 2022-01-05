import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles} from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";

import { getCookie } from "../util/session";
import base64url from "base64url";


import {
  getAllCountries,
  getCountryById,
  addCountry,
  editCountry,
  deleteCountry
} from "../redux/actions/Country";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";


const Countries = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries())
  // dispatch(getCountryById("424"))
  //dispatch(addCountry("France"))
  //  dispatch(editCountry(424,"France"))
  // dispatch(deleteCountry("424"))
  }, []);


  return (
    <>
      <NotificationContainer />
    </>
  );
};

export default Countries;
