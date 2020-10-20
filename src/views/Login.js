import React from "react";
import { TextField, Button, Link, Box, Divider } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {useDispatch,useSelector } from "react-redux";

import { signInWithEmail } from "./../firebase/services/firebaseService";
import GoogleButton from "./../components/common/GoogleButton";
import FormHeader from "./../components/forms/FormHeader";
import AppContainer from "./../components/common/AppContainer";
import SubmittingLoader from "./../components/forms/SubmittingLoader";
import ErrorAlert from "./../components/common/ErrorAlert";
import FormWrapper from "./../components/forms/FormWrapper";
import { showNotification } from "./../redux/actions/notificationsActions"

export default function Login() {
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <AppContainer maxWidth="sm" bigMargin>
      <FormWrapper>
        <FormHeader icon={<LockOutlinedIcon />} txt="Zaloguj się" />
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string().required().email(),
            password: Yup.string().required(),
          })}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              await signInWithEmail(values);
              if(authenticated) {
                setSubmitting(false);
              }
              dispatch(showNotification("pomyślnie zalogowano"));  
            } catch (error) {
              setErrors({ auth: "Nieprawidłowy adres e-mail bądz hasło" });
              setSubmitting(false);
            } 
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <Field
                variant="outlined"
                inputProps={{autoComplete:"off"}}
                margin="normal"
                fullWidth
                label="Adres email"
                name="email"
                as={TextField}
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
                  Zaloguj się
                </Button>
                <Box mt={2} mb={2}>
                  <Divider />
                </Box>
                <GoogleButton />
              </Box>
              {errors.auth && <ErrorAlert txt={errors.auth} />}
              {isSubmitting && <SubmittingLoader />}
            </Form>
          )}
        </Formik>
        <Link variant="body2" component={RouterLink} to="/rejestracja">
          {"Nie masz konta? Zarejestruj się"}
        </Link>
      </FormWrapper>
    </AppContainer>
  );
}
