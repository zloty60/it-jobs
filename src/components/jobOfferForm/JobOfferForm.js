import React, { useState} from "react";
import { Formik, Form, Field } from "formik";
import { Typography, Box, MenuItem } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import * as Yup from "yup";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

import {
  updateJobOfferInFirestore,
  addJobOfferToFirestore,
} from "./../../firebase/services/firestoreService";
import FormHeader from "./../forms/FormHeader";
import AppContainer from "./../common/AppContainer";
import SubmittingLoader from "./../forms/SubmittingLoader";
import FormWrapper from "./../forms/FormWrapper";
import {
  experienceOptions,
  categoryOptionsOfferForm,
} from "./../../data/selectOptions";
import NotificationForm from "./NotificationForm";


export default function JobOfferForm({selectedJobOffer,offerId})  {
  const classes = useStyles();
  const [newOfferId,setNewOfferId] = useState(null);
  const [isFormSend,setIsFormSend] = useState(false);

  const initialValues = selectedJobOffer ?? {
    company: "",
    jobTitle: "",
    experienceLevel: "",
    salary: "",
    city: "",
    category: "",
    jobDescription: "",
    id:"",
    date: new Date(),
  };

  const validationSchema = Yup.object({
    company: Yup.string().required(),
    jobTitle: Yup.string().required(),
    experienceLevel: Yup.string().required(),
    salary: Yup.number().required().moreThan(0),
    city: Yup.string().required(),
    category: Yup.string().required(),
    jobDescription: Yup.string().required(),
  });

  return (
    <AppContainer maxWidth="md">
      <FormWrapper>
        <>
      <FormHeader
          icon={<WorkOutlineIcon />}
          txt={
              selectedJobOffer
                  ? "Zaktualizuj ogłoszenie"
                  : "Dodaj ogłoszenie"
                }
              />

        {isFormSend ?  <Box marginTop={3}
        ><NotificationForm newOfferId={newOfferId} editOfferId={offerId} edit={selectedJobOffer} />
        </Box>   
        :  
         <Formik
          initialValues={initialValues}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              if(selectedJobOffer) {
                await updateJobOfferInFirestore({ ...values, date: new Date() })
                setIsFormSend(true);
              } else {
                const response = await addJobOfferToFirestore(values);
                setNewOfferId(response.id);
                setIsFormSend(true);
              }
              if(newOfferId) {
                setSubmitting(false);
              }  
            } catch (error) {
              setSubmitting(false);
              throw(error);
            }
          }}
          validationSchema={validationSchema}
        >
          {({ errors, isSubmitting, touched, isValid, dirty }) => (
            <>
              <Form>
                <Field
                  error={errors.company && touched.company ? true : false}
                  label="nazwa firmy"
                  as={TextField}
                  variant="outlined"
                  name="company"
                  inputProps={{autoComplete:"off"}}
                  fullWidth
                  margin="normal"
                />
                <Field
                  error={errors.jobTitle && touched.jobTitle ? true : false}
                  label="stanowisko"
                  as={TextField}
                  variant="outlined"
                  name="jobTitle"
                  inputProps={{autoComplete:"off"}}
                  fullWidth
                  margin="normal"
                />
                <Field
                  error={errors.salary && touched.salary ? true : false}
                  label="pensja"
                  as={TextField}
                  variant="outlined"
                  name="salary"
                  inputProps={{autoComplete:"off"}}
                  min="0"
                  fullWidth
                  margin="normal"
                  type="number"
                />
                <Field
                  error={errors.city && touched.city ? true : false}
                  label="lokalizacja pracy"
                  as={TextField}
                  variant="outlined"
                  name="city"
                  inputProps={{autoComplete:"off"}}
                  fullWidth
                  margin="normal"
                />
                <Field
                  select
                  label="Doświadczenie"
                  fullWidth
                  margin="normal"
                  as={TextField}
                  variant="outlined"
                  name="experienceLevel"
                  error={
                    errors.experienceLevel && touched.experienceLevel
                      ? true
                      : false
                  }
                >
                  {experienceOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Field>
                <Field
                  select
                  label="kategoria ogłoszenia"
                  fullWidth
                  margin="normal"
                  as={TextField}
                  variant="outlined"
                  name="category"
                  error={errors.category && touched.category ? true : false}
                >
                  {categoryOptionsOfferForm.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Field>
                <Field
                  error={
                    errors.jobDescription && touched.jobDescription
                      ? true
                      : false
                  }
                  label="opis ogłoszenia"
                  as={TextField}
                  variant="outlined"
                  name="jobDescription"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={5}
                />
                <Typography variant="caption" display="block" gutterBottom>
                  * wszystkie pola są obowiązkowe!
                </Typography>
                <Box mt={2} display="flex" justifyContent="flex-end">
                  <Button
                    color="inherit"
                    variant="contained"
                    component={RouterLink}
                    to="/"
                    className={classes.btnMarginRight}
                  >
                    Anuluj
                  </Button>
                  <Button
                    disabled={!isValid || !dirty}
                    color="primary"
                    variant="contained"
                    type="submit"
                  >
                    {selectedJobOffer ? "zaktualizuj" : "Dodaj"}
                  </Button>
                </Box>
                {isSubmitting && <SubmittingLoader />}
              </Form>
            </>
          )}
        </Formik>}               
        </>
      </FormWrapper>
    </AppContainer>
  );
}

const useStyles = makeStyles((theme) => ({
  btnMarginRight: {
    marginRight: theme.spacing(2),
  },
}));
