import React from 'react';
import Navbar from './components/Navbar';
import { theme } from './styles/Theme';
import { Grid, makeStyles } from '@material-ui/core';
import Leftbar from './components/Leftbar';
import Feeder from './components/Feeder';
import Rightbar from './components/Rightbar';
import { ClassNames } from '@emotion/react';

const useStyles = makeStyles((theme) => ({
  rightbar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

function App() {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feeder />
        </Grid>
        <Grid item sm={3}>
          <Rightbar className={ClassNames.rightbar} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
