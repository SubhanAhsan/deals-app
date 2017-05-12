
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import IconSocialNotifications from 'material-ui/svg-icons/social/notifications';

import Home from './scenes/Home';
import Login from './scenes/Login';
import LatestDeals from './scenes/LatestDeals';


import './styles/App.css';

const styles = {
  title: {
    cursor: 'pointer',   
    fontSize: '20px',
  }, 
  appBar:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  drawer:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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

  routeToLatestDeals(){

  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="appBarContainer">
         <AppBar
            style={styles.appBar}
            title={<span style={styles.title}>Deals & more...</span>}
            onLeftIconButtonTouchTap={this.handleDrawerToggle}
            iconElementRight={<IconButton><IconSocialNotifications /></IconButton>}
            />
        </div>
       <div className="drawerContainer">
          <Drawer 
            containerStyle={styles.drawer}
            open={this.state.drawerOpen}  
            docked={false} 
            onRequestChange={(open) => this.setState({drawerOpen: open})}>
            <MenuItem></MenuItem>
            <MenuItem onTouchTap={this.handleDrawerClose} containerElement={<Link to="/latest" />}>Latest Deals</MenuItem>
            <MenuItem onTouchTap={this.handleDrawerClose}>Deals Nearby</MenuItem>
            <MenuItem onTouchTap={this.handleDrawerClose}>View All Deals</MenuItem>
            <MenuItem onTouchTap={this.handleDrawerClose} containerElement={<Link to="/login" />}>Login</MenuItem>
          </Drawer>
       </div>

       
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/latest" component={LatestDeals}/>
           <Route path="/login" component={Login}/>
        </Switch>
       

      </div>
      </Router>
    );//.return
  }//.render

}//.class App





export default App;
