import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { deleteEventInFirestore } from "./../../firebase/services/firestoreService";

export default function DeleteAlert({
  openDeleteAlert,
  setOpenDeleteAlert,
  jobTitle,
  id,
  redirect,
}) {
  const history = useHistory();
  const handleDeleteJobOffer = async () => {
    try {
      await deleteEventInFirestore(id);
      if (redirect) {
        history.push("/");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <Dialog
      open={openDeleteAlert}
      onClose={() => setOpenDeleteAlert(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Czy na pewno chcesz usunąć tą ofertę pracy?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Oferta {jobTitle} zostanie usunięta na stałe
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => setOpenDeleteAlert(false)}
          color="primary"
          variant="contained"
        >
          anuluj
        </Button>
        <Button
          onClick={handleDeleteJobOffer}
          color="secondary"
          variant="contained"
        >
          usuń
        </Button>
      </DialogActions>
    </Dialog>
  );
}
