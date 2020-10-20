import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Collapse,
  IconButton,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import FormHeader from "./../forms/FormHeader";
import { updateUserPassword } from "./../../firebase/services/firebaseService";

export default function PasswordChange() {
  const [passwordChanged, setPasswordChanged] = useState(false);
  return (
    <Card>
      <CardContent>
        <FormHeader txt="Zmień hasło" icon={<VpnKeyIcon />} />
        <Formik
          initialValues={{ newPassword1: "", newPassword2: "" }}
          validationSchema={Yup.object({
            newPassword1: Yup.string().required(),
            newPassword2: Yup.string()
              .oneOf([Yup.ref("newPassword1"), null], "Passwords do not match")
              .required("Required"),
          })}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            console.log("submit");
            setPasswordChanged(false);
            try {
              await updateUserPassword(values);
              setPasswordChanged(true);
            } catch (error) {
              setErrors({ auth: error.message });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form>
              <Field
                error={
                  errors.newPassword1 && touched.newPassword1 ? true : false
                }
                label="nowe hasło"
                as={TextField}
                variant="outlined"
                name="newPassword1"
                fullWidth
                margin="normal"
                type="password"
              />

              <Field
                error={
                  errors.newPassword2 && touched.newPassword2 ? true : false
                }
                label="potwierdź nowe hasło"
                as={TextField}
                variant="outlined"
                name="newPassword2"
                fullWidth
                margin="normal"
                type="password"
              />
              <Button
                color="primary"
                variant="contained"
                type="submit"
                disabled={!isValid || !dirty}
              >
                zaktualizuj
              </Button>
              {errors.auth && (
                <Box mt={2} mb={2}>
                  <Alert severity="error">{errors.auth}</Alert>
                </Box>
              )}
              {errors.newPassword2 && touched.newPassword2 && (
                <Box mt={2} mb={2}>
                  <Alert severity="error">hasła nie są takie same</Alert>
                </Box>
              )}
              {passwordChanged && (
                <Box mt={2} mb={2}>
                  <Collapse in={passwordChanged}>
                    <Alert
                      severity="success"
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setPasswordChanged(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                    >
                      hasło zmieniono poprawianie
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
