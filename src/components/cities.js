import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles} from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";

import { getCookie } from "../util/session";
import base64url from "base64url";


import {
  getAllCities,
  getCityById,
  getCitiesOfCountry,
  addCity,
  editCity,
  deleteCity
} from "../redux/actions/City";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";


const Cities = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllCities())
    //  dispatch(getCityById(430))
    //  dispatch(getCitiesOfCountry("423"))
    // dispatch(addCity("cairo",423))
    // dispatch(editCity(430,"fayoum",423))
    //dispatch(deleteCity(430))
    
  }, []);


  return (
    <>
      <NotificationContainer />
    </>
  );
};

export default Cities;
