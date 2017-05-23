
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
import IconNavBack from 'material-ui/svg-icons/navigation/arrow-back';
import IconNavMenu from 'material-ui/svg-icons/navigation/menu';

import Home from './scenes/Home';
import Login from './scenes/Login';
import LatestDeals from './scenes/LatestDeals';
import DealInfo from './scenes/DealInfo';


import './styles/App.css';

const styles = {
  title: {
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: 'bolder',
  },
  titleWordMy: {
    color: '#a7ff00',
    fontStyle: 'italic',
    paddingLeft: '2px',
    paddingRight: '4px',
  },
  appBar: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  drawer: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  leftIconButton:{
   
  },
};



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      showNavBack: false,
    };

    this.updateTopState = this.updateTopState.bind(this);
  }

  updateTopState(stateDataObj) {
    this.setState(stateDataObj);
  }

  handleDrawerToggle = () => this.setState((prevState, props) => ({ drawerOpen: !prevState.drawerOpen }));
  handleDrawerClose = () => this.setState({ drawerOpen: false });

  handleNavLeftButtonTap = () => {
    if(this.state.showNavBack){ // if not nav go back is active
         history.back();
         this.setState((prevState, props) => ({ drawerOpen: false })); //also close the drawer if open
    }
    else{ // if home page
      this.setState((prevState, props) => ({ drawerOpen: !prevState.drawerOpen }));
    }
  }

  componentWillMount() {
    console.log("App - componentWillMount");
  }
  componentDidMount() {
    console.log("App - componentDidMount");
  }
  componentWillUnmount() {
    console.log("App - componentWillUnmount");
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="appBarContainer">
            <AppBar
              style={styles.appBar}
              title={<span style={styles.title}>Save<span style={styles.titleWordMy}>My</span>Dime.com</span>}
              iconElementLeft={<IconButton style={styles.leftIconButton}>{this.state.showNavBack ? <IconNavBack /> : <IconNavMenu />}</IconButton>}
              onLeftIconButtonTouchTap={this.handleNavLeftButtonTap}
              iconElementRight={<IconButton><IconSocialNotifications /></IconButton>}
            />
          </div>
          <div className="drawerContainer">
            <Drawer
              containerStyle={styles.drawer}
              open={this.state.drawerOpen}
              docked={false}
              onRequestChange={(open) => this.setState({ drawerOpen: open })}>
              <MenuItem></MenuItem>
              <MenuItem onTouchTap={this.handleDrawerClose} containerElement={<Link to="/latest" />}>Latest Deals</MenuItem>
              <MenuItem onTouchTap={this.handleDrawerClose}>Deals Nearby</MenuItem>
              <MenuItem onTouchTap={this.handleDrawerClose}>View All Deals</MenuItem>
              <MenuItem onTouchTap={this.handleDrawerClose} containerElement={<Link to="/login" />}>Login</MenuItem>
            </Drawer>
          </div>


          <Switch>
            <Route exact path="/" render={(props) => (
              <Home {...props} updateTopState={this.updateTopState} />
            )} />

            <Route path="/latest" component={LatestDeals} />
            <Route path="/deal" component={DealInfo} />
            <Route path="/login" component={Login} />

            <Route path="/index.html" component={Home} />
          </Switch>


        </div>
      </Router>
    );//.return
  }//.render

}//.class App





export default App;
