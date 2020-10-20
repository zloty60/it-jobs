import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  LinearProgress,
  Collapse,
  IconButton,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import PersonIcon from "@material-ui/icons/Person";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";

import FormHeader from "./../forms/FormHeader";
import { updateUserProfile } from "./../../firebase/services/firestoreService";

export default function UserNameChange() {
  const { currentUserProfile } = useSelector((state) => state.userProfile);
  const [feedback, setFeedback] = useState(false);

  return (
    <Card>
      <CardContent>
        <FormHeader txt="Nazwa użytkownika" icon={<PersonIcon />} />
        <Formik
          initialValues={{
            displayName: currentUserProfile.displayName,
          }}
          validationSchema={Yup.object({
            displayName: Yup.string().required(),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            setFeedback(false);
            try {
              await updateUserProfile(values);
              setFeedback(true);
            } catch (error) {
              console.log(error);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ errors, touched, isSubmitting, isValid, dirty }) => (
            <Form>
              <Field
                error={errors.displayName && touched.displayName ? true : false}
                label="nazwa użytkownika"
                as={TextField}
                variant="outlined"
                name="displayName"
                inputProps={{autoComplete:"off"}}
                fullWidth
                margin="normal"
              />
              <Button
                color="primary"
                variant="contained"
                type="submit"
                disabled={!isValid || !dirty}
              >
                zaktualizuj
              </Button>
              {isSubmitting && (
                <Box mt={2} mb={2}>
                  <LinearProgress />
                </Box>
              )}
              {feedback && (
                <Box mt={2} mb={2}>
                  <Collapse in={feedback}>
                    <Alert
                      severity="success"
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setFeedback(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                    >
                      Nazwę użytkownika zmieniono poprawianie
                    </Alert>
                  </Collapse>
                </Box>
              )}
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
