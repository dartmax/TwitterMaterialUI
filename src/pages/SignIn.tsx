import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100%',
  },
  blueSide: {
    backgroundColor: '#1DA1F2',
    marginSide: theme.spacing(1),
  },
  loginSide: {
  },
}));

function SignIn() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.blueSide}>
        <ul>
          <li>
            <Typography>Read about what will interest you.</Typography>
          </li>
          <li>
            <Typography>find out what the world is talking about.</Typography>

          </li>
          <li>
            <Typography>Join the conversation.</Typography>
          </li>
        </ul>
      </div>
      <div>
        <div className={classes.loginSide}></div>
      </div>
    </div>
  );
}

export default SignIn;
