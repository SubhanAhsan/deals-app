import React, { Component } from 'react';
import './styles/App.css';
import PromoImg from './images/dubai1.jpg';

import AppBar from 'material-ui/AppBar';
import IconSocialNotifications from 'material-ui/svg-icons/social/notifications';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';



import Toggle from 'material-ui/Toggle';
import IconButton from 'material-ui/IconButton';

import FlatButton from 'material-ui/FlatButton';


function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
   
  },
 
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
  }


  handleDrawerToggle = () => this.setState((prevState, props) => ({drawerOpen: !prevState.drawerOpen}));
  handleDrawerClose = () => this.setState({drawerOpen: false});


  render() {
    return (
      <div className="App">
        <div className="appBarContainer">
         <AppBar
            title={<span style={styles.title}>Dubai Deals</span>}
            onLeftIconButtonTouchTap={this.handleDrawerToggle}
            iconElementRight={<IconButton><IconSocialNotifications /></IconButton>}
            />
        </div>
        <div className="appMainContainer">
         
        </div>

       <div className="drawerContainer">
          <Drawer open={this.state.drawerOpen}  docked={false} onRequestChange={(open) => this.setState({drawerOpen: open})}>
            <MenuItem></MenuItem>
            <MenuItem onTouchTap={this.handleDrawerClose}>Latest Deals</MenuItem>
          </Drawer>
       </div>


      </div>
    );
  }
}

export default App;
