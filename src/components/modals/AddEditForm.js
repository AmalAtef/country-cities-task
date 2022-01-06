import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

///Modal
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
/////
import { styled } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

import {
    Button,
    Grid
  } from "@material-ui/core";

import {
    addCountry,
    editCountry,
    openAddEdit
} from "../../redux/actions/Country";

import {addCity,editCity} from  "../../redux/actions/City";


import Typography from "@material-ui/core/Typography";

import TextField from '@material-ui/core/TextField';

import AddIcon from '@material-ui/icons/Add';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
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
    width: "55%",
    "@media screen and (max-width: 575px) ": {
      width: "75% !important"
    }
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  },
  avatar: {
    margin: "auto"
  },
  icons: {
    width: "35%",
    margin: "auto"
  }
}));

export default function AddEditForm({
    modalFlag,
    country,
    city
}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const allCountriesData = useSelector(
    state => state.country.allCountriesData
  );
  const OpenAddEdit = useSelector(state => state.country.openAddEdit);

  const citiesOfCountryData=useSelector(state => state.city.citiesOfCountryData);

  const [btnAddState,setBtnAddState]= useState(false);
  

  const [countryName, setCountryName] = useState("");
  const [countryId, setCountryId] = useState("");
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    if(modalFlag==="edit" && country){
        setCountryName(country.name)
    }
    else if(modalFlag==="editCity"&&city){
        setCityName(city.name)
    }
  }, []);

  const handleClose = () => {
    dispatch(openAddEdit(false))
  };

  return (
    <>
      {/*  */}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={OpenAddEdit}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={OpenAddEdit}>
          <div className={classes.paper}>
          {(modalFlag=="edit" || modalFlag=="add") &&
         <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
            required
            id="outlined-required"
            label="Country Name"
            defaultValue={countryName}
            onChange={(event)=>{setCountryName(event.target.value)}}
          />
          </Grid>
          <Grid item xs={12}>
                   <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => {
                             if(modalFlag=="edit"){
                                 dispatch(editCountry(country.id,countryName))
                             }else{
                                dispatch(addCountry(countryName))

                             }
                             setCountryName("")
                             handleClose()
                             
                          }}
                        >
                         Submit
                   </Button>
              </Grid>          
          </Grid>
          }
            <Grid container spacing={2}>
          {modalFlag=="view" && 
          <>
          <Grid item xs={12}>
                <Typography variant="h5" component="p">
                {country.name}
                </Typography>
           </Grid>   
              {/* add new city */}
              <Grid item xs={12} style={{textAlign:"end"}}>
                   <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => {
                            setBtnAddState(true)
                          }}
                        >
                         Add New City <AddIcon/>
                   </Button>
                        </Grid> 
                        </>
             }
                {/* add city form */}
                {((btnAddState&&modalFlag=="view")||modalFlag==="editCity"||modalFlag==="addCity") &&
                <Grid container spacing={4}  justifyContent="center">
                {modalFlag==="addCity"&& 
                <Grid item xs={12}>
                                            <FormControl variant="standard" style={{width: "20%"}}>
                                    <InputLabel id="demo-simple-select-standard-label">Select Country</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={countryId}
                                    onChange={(event)=>{
                                        setCountryId(event.target.value)
                                    }}
                                    label="Country"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {allCountriesData.map((country, index) => (
                                    <MenuItem value={country.id} key={country.id}  >{country.name}</MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
                        </Grid>
                }
                        <Grid item xs={12}>
                            <TextField
                            required
                            id="outlined-required"
                            label="City Name"
                            defaultValue={cityName}
                            onChange={(event)=>{setCityName(event.target.value)}}
                        />
                        </Grid>
                        <Grid item xs={5}>
                                <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => {
                                            if(modalFlag==="editCity"){
                                                dispatch(editCity(city.id,cityName,city.countryId))
                                                handleClose()
                                            }else if(modalFlag==="addCity"){
                                                setCountryId("")
                                                dispatch(addCity(cityName,countryId))
                                                handleClose()
                                            }
                                            else{

                                                dispatch(addCity(cityName,country.id))
                                            }
                                            setCityName("")
                                            setBtnAddState(false)
                                           
                                        }}
                                        >
                                        Submit
                                </Button>
                            </Grid>      
                            <Grid item xs={5}>
                                <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => {
                                            if(modalFlag==="editCity"||modalFlag==="addCity"){
                                                handleClose()
                                            }
                                            setCityName("")
                                            setBtnAddState(false)
                                        }}
                                        >
                                        Cancel
                                </Button>
                            </Grid>          
                        </Grid>
                      }

              {/* //////////////// */}
              {modalFlag=="view" &&  
              <>
              <Grid item xs={12}>
                 <Typography variant="h6" component="p">
                 Cities of country
                 </Typography>
                 </Grid>
                 <Grid item xs={12}>
                  {citiesOfCountryData.map((city, index) => (
                        <Typography variant="h6" component="p" key={city.id}>
                        {city.name}
                        </Typography>
                  ))}
                  </Grid>
                  </>
                }
          </Grid>
           
          </div>
        </Fade>
      </Modal>
      {/*  */}
    </>
  );
}
