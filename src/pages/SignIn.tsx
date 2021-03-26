import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import twitterBlueSideImage from '../assets/img/lohp_en_1302x955.png';


const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    height: 'calc(100vh - 84px)',
  },
  blueSide: {
    backgroundImage: `url(${twitterBlueSideImage})`,
    flex: '0 0 50%',
    height: '1016px',
    left: '0px',
    right: '0px',
    scrollbarColor: 'rgb(170, 184, 194) rgb(247, 249, 250)',
    top: '0px',
    width: '897.417px',
    backgroundPositionX: 'center',
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
  },
  blueSideTwitterIcon: {
    color: 'white',
    fontSize: 350,
    top: '45%',
    left: '50%',
    position: 'relative',
    transform: 'translate(-50%, -50%)',
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 64,
    letterSpacing: -1.2,
    marginBottom: 45,
    marginTop: 20,
  },
}));

function SignIn() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon className={classes.blueSideTwitterIcon} />
      </section>
      <section className={classes.loginSide}>
        <div>
          <TwitterIcon color='primary' className={classes.loginSideTwitterIcon} />
          <Typography className={classes.loginSideTitle} variant='h4'>Happening now</Typography>
          <Typography><b>Join Twitter today.</b></Typography>
          <br />
          <Button style={{ marginBottom: 20 }} variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            Log In
          </Button>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
