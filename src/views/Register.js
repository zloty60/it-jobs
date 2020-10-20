import React from "react";
import { TextField, Button, Link, Box, Divider } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {useSelector, useDispatch } from "react-redux";

import { registerInFirebase } from "./../firebase/services/firebaseService";
import FormHeader from "./../components/forms/FormHeader";
import AppContainer from "./../components/common/AppContainer";
import ErrorAlert from "./../components/common/ErrorAlert";
import SubmittingLoader from "./../components/forms/SubmittingLoader";
import FormWrapper from "./../components/forms/FormWrapper";
import GoogleButton from "./../components/common/GoogleButton";
import { showNotification } from "./../redux/actions/notificationsActions";



export default function Register() {
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state) => state.auth);
  return (
    <AppContainer maxWidth="sm" bigMargin>
      <FormWrapper>
        <FormHeader icon={<LockOutlinedIcon />} txt="Zarejestruj się" />
        <Formik
          initialValues={{ displayName: "", email: "", password: "" }}
          validationSchema={Yup.object({
            displayName: Yup.string().required(),
            email: Yup.string().required().email(),
            password: Yup.string().required(),
          })}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              await registerInFirebase(values);
              if(authenticated) {
                setSubmitting(false);
              }
              dispatch(showNotification("pomyślnie zarejestrowano"));
            } catch (error) {
              setErrors({
                register:
                  "Adres e-mail jest zajęty bądź hasło ma mniej niż 6 znaków",
              });
            }
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                inputProps={{autoComplete:"off"}}
                fullWidth
                label="Nazwa użytkownika"
                name="displayName"
                error={errors.displayName && touched.displayName ? true : false}
              />
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                inputProps={{autoComplete:"off"}}
                fullWidth
                label="Adres email"
                name="email"
                error={errors.email && touched.email ? true : false}
              />
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Hasło"
                type="password"
                error={errors.password && touched.password ? true : false}
              />
              <Box mt={3} mb={3}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Zarejestruj się
                </Button>
                <Box mt={2} mb={2}>
                  <Divider />
                </Box>
                <GoogleButton />
              </Box>
              {errors.register && <ErrorAlert txt={errors.register} />}
              {isSubmitting && <SubmittingLoader />}
            </Form>
          )}
        </Formik>
        <Link variant="body2" component={RouterLink} to="/logowanie">
          Posiadasz już konto? Zaloguj się
        </Link>
      </FormWrapper>
    </AppContainer>
  );
}
