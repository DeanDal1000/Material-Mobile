import React from 'react';
import Navbar from './components/Navbar';
import { theme } from './styles/Theme';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
