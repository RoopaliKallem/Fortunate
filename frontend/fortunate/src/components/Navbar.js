import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
// material ui stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          // can add home here
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/signup">Signup</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
