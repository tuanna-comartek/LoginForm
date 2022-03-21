import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { Grid, TextField, Button, makeStyles, createStyles, Theme } from '@material-ui/core';
import useLogin from './hooks/useLogin';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '450px',
      display: 'block',
      margin: '0 auto',
      height: '520px',
      border: '1px solid gray',
      borderRadius: '10px',
    },
    textField: {
      '& > *': {
        width: '100%',
      },
    },
    submitButton: {
      marginTop: '24px',
    },
    title: { textAlign: 'center' },
    successMessage: { color: 'green' },
    errorMessage: { color: 'red' },
  }),
);
export default function LoginPage() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: 'giangpt',
      password: '1234567',
    },
    onSubmit: (values) => {
      hadleSubmit(values);
    },
  });

  const classes = useStyles();
  const { data, onLogin } = useLogin();
  function hadleSubmit(values: any) {
    onLogin({ username: values.email, password: values.password });
    // console.log('errrrrrrrr', error);
  }
  useEffect(() => {
    if (data !== undefined) {
      if (data.login.token) {
        history.replace('/home');
      } else {
        alert('Email or Password was wrong !!!');
      }
    }
    //
  }, [data]);

  return (
    <>
      <div style={{ paddingTop: 80 }}>
        <div className={classes.root}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container justify="space-around" direction="row">
              <Grid
                item
                lg={10}
                md={10}
                sm={10}
                xs={10}
                className={classes.textField}
                style={{ textAlign: 'center', paddingTop: 40, paddingBottom: 20 }}
              >
                <h1>Login Form</h1>
              </Grid>
              <Grid item lg={10} md={10} sm={10} xs={10} className={classes.textField} style={{ paddingBottom: 20 }}>
                <TextField
                  name="email"
                  id="email"
                  label="Email "
                  value={formik.values.email}
                  type="text"
                  helperText={'Enter your full name.'}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item lg={10} md={10} sm={10} xs={10} className={classes.textField} style={{ paddingBottom: 20 }}>
                <TextField
                  name="password"
                  id="password"
                  label="Password"
                  value={formik.values.password}
                  type="password"
                  helperText={'Please valid password.'}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item lg={10} md={10} sm={10} xs={10} className={classes.textField} style={{ paddingTop: 40 }}>
                <Button type="submit" variant="contained" color="secondary">
                  Submits
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </>
  );
}
