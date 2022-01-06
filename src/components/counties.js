import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";


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
  getAllCountries,
  deleteCountry,
  openAddEdit
} from "../redux/actions/Country";

import {getCitiesOfCountry}from "../redux/actions/City"

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";


const Countries = props => {
  const dispatch = useDispatch();

  const allCountriesData = useSelector(
    state => state.country.allCountriesData
  );

  const OpenAddEdit = useSelector(
    state => state.country.openAddEdit
  );

  const showMessage = useSelector(state => state.auth.showMessage);
  const alertMessage = useSelector(state => state.auth.alertMessage);
  const [clickedCountry, setClickedCountry] = useState(null);

  const [btnState, setBtnState] = useState(null);

  useEffect(() => {
   dispatch(getAllCountries())
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
    <Grid item xs={8} style={{textAlign:"end"}}>
                   <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => {
                            setBtnState("add")
                            dispatch(openAddEdit(true))
                          }}
                        >
                         Add New Country <AddIcon/>
                   </Button>
        </Grid> 
        </Grid>          
  <Grid container spacing={4} direction="row"
  justifyContent="center"
  alignItems="center">


    {allCountriesData.map((country, index) => (
      <Grid item xs={3}  key={country.id} className="card-container">
       <Card>
      <CardContent>
        <Typography variant="h5" component="p">
         {country.name}
        </Typography>
      </CardContent>
      <CardActions>
       <IconButton aria-label="edit"  onClick={() => {
                  setClickedCountry(country)
                  setBtnState("edit")
                   dispatch(openAddEdit(true))

                  }}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => {
                   dispatch(deleteCountry(country.id))
                  }}>
          <DeleteIcon />
        </IconButton>
        <Button size="small" onClick={() => {
                   setBtnState("view")
                   setClickedCountry(country)
                   dispatch(getCitiesOfCountry(country.id))
                   dispatch(openAddEdit(true))

                  }}>More Details</Button>
      </CardActions>
    </Card>
    </Grid>
  ))}
  </Grid>
  {OpenAddEdit&&<AddEditForm modalFlag={btnState} country={clickedCountry}/>}
      <NotificationContainer />
    </>
  );
};

export default Countries;
