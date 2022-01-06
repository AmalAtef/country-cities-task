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


import Typography from "@material-ui/core/Typography";

import TextField from '@material-ui/core/TextField';

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
    country
}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const OpenAddEdit = useSelector(state => state.country.openAddEdit);
  ////// modal
  const [open, setOpen] = useState(false);

  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    handleOpen();
    if(modalFlag=="edit" && country){
        setCountryName(country.name)
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(openAddEdit(false))
  };

  const StyledFormControl = styled(FormControl)({
    formControl: {
      margin: 2,
      "& select": {
        paddingRight: "22px"
      }
    },
    selectEmpty: {
      marginTop: 0
    }
  });

  useEffect(() => {

  }, []);


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
                             handleClose()
                          }}
                        >
                         Submit
                   </Button>
              </Grid>          
          </Grid>
          }
          {modalFlag=="view" &&  
                <Typography variant="h5" component="p">
                {country.name}
                </Typography>
           }
          </div>
        </Fade>
      </Modal>
      {/*  */}
    </>
  );
}
