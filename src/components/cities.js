import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles} from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";

import { getCookie } from "../util/session";
import base64url from "base64url";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

import AddEditForm from "./modals/AddEditForm"

import {hideMessage} from "../redux/actions/Auth"
import {
  getAllCities,
  deleteCity
} from "../redux/actions/City";

import {openAddEdit,getAllCountries}from "../redux/actions/Country";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";


const Cities = props => {
  const dispatch = useDispatch();


  const allCitiesData = useSelector(
    state => state.city.allCitiesData
  );

  const allCountriesData = useSelector(
    state => state.country.allCountriesData
  );

  const OpenAddEdit = useSelector(
    state => state.country.openAddEdit
  );
  const showMessage = useSelector(state => state.auth.showMessage);
  const alertMessage = useSelector(state => state.auth.alertMessage);

  const [btnState, setBtnState] = useState(null);
  const [clickedCity, setClickedCity] = useState(null);
  useEffect(() => {
     dispatch(getAllCities())
     if(allCountriesData.length===0){
      dispatch(getAllCountries())
     }
    
  }, []);

  useEffect(() => {
    if (showMessage) {
      NotificationManager.error(alertMessage);
      dispatch(hideMessage());
    }
  }, [showMessage]);

  return (
    <>
        <Grid container spacing={4}
      justifyContent="flex-end"
      alignItems="end">
        <Grid item xs={6} style={{textAlign:"end"}}>
                      <Button
                              variant="contained"
                              color="secondary"
                              onClick={() => {
                                setBtnState("addCity")
                                dispatch(openAddEdit(true))
                              }}
                            >
                            Add New City <AddIcon/>
                      </Button>
            </Grid> 
            </Grid>          
  <Grid container spacing={4} direction="row"
  justifyContent="center"
  alignItems="center">


    {allCitiesData.map((city, index) => (
      <Grid item xs={3} className="card-container" key={city.id}>
       <Card>
      <CardContent>
        <Typography variant="h5" component="p">
         {city.name}
        </Typography>
      </CardContent>
      <CardActions>
       <IconButton aria-label="edit"  onClick={() => {
                  setClickedCity(city)
                  setBtnState("editCity")
                  dispatch(openAddEdit(true))

                  }}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => {
                    dispatch(deleteCity(city.id))
                  }}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Grid>
  ))}
  </Grid>
  {OpenAddEdit&&<AddEditForm modalFlag={btnState} city={clickedCity}/>}
      <NotificationContainer />
    </>
  );
};

export default Cities;
