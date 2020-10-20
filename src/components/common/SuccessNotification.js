import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Snackbar } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from "@material-ui/core/styles";

import { deleteSuccessNotfication } from "./../../redux/actions/notificationsActions";

export default function SuccessNotification() {
    const dispatch = useDispatch();
    const {isOpen,message} = useSelector((state) => state.notifications.login);
    const classes = useStyles();

    return (
        <Snackbar  className={classes.msg}  open={isOpen} autoHideDuration={3000}  onClose={() => dispatch(deleteSuccessNotfication())}    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}  >
        <Alert severity="success" variant="filled" onClose={() => dispatch(deleteSuccessNotfication())}  >{message}</Alert>
        </Snackbar>
    )
}

const useStyles = makeStyles((theme) => ({
    msg:{
        textTransform:"capitalize"
    }
  }));
  