
import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import IconActionRecent from 'material-ui/svg-icons/action/restore';
import IconMapNearMe from 'material-ui/svg-icons/maps/near-me';
import IconMapLocalOffer from 'material-ui/svg-icons/maps/local-offer';

import PromoImg from '../images/dubai1.jpg';
import IconFood from '../images/icons/food.svg';
import IconBeauty from '../images/icons/heart.svg';
import IconElectronics from '../images/icons/electronics.svg';
import IconFashion from '../images/icons/fashion.svg';
import IconHome from '../images/icons/home.svg';
import { pink300, pink400, lightBlue500, cyan500, yellow700, lightGreen400, deepOrange500, white, fullWhite, lightWhite } from 'material-ui/styles/colors';

const recentIcon = <IconActionRecent />;
const allDealsIcon = <IconMapLocalOffer />;
const nearbyIcon = <IconMapNearMe />;
const styles = {
  sceneHome: {

  },
  promoWrapper: {
    height: '100vh',
    width: '100%',
    position: 'fixed',
    top: '50px',
    left: '0px',
    backgroundImage: 'url(' + PromoImg + ')',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
  homeFootNav: {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',

  },
  bottomNavigation: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

  },

  searchWrapper: {
    width: '100%',
    textAlign: 'center',
  },
  categoryWrapper: {
    width: '100%',
    textAlign: 'center',
  },
  categoryBox: {
    display: 'inline-block',
  },
  category: {
    height: '70px',
    width: '70px',
    margin: '10px 20px 10px 20px',
    textAlign: 'center',
    //display: 'inline-block',
    backgroundSize: '32px 32px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',

  },
  categoryTitle: {
    color: white,
    
  },
  categoryBgBeauty: {
    backgroundColor: pink300,
    backgroundImage: 'url(' + IconBeauty + ')',

  },
  categoryBgFood: {
    backgroundColor: lightBlue500,
    backgroundImage: 'url(' + IconFood + ')',
  },
  categoryBgElectronics: {
    backgroundColor: deepOrange500,
    backgroundImage: 'url(' + IconElectronics + ')',
  },
  categoryBgFashion: {
    backgroundColor: yellow700,
    backgroundImage: 'url(' + IconFashion + ')',
  },
  categoryBgHome: {
    backgroundColor: lightGreen400,
    backgroundImage: 'url(' + IconHome + ')',
  },

};


class Home extends Component {

componentWillMount() {
  console.log("Home - componentWillMount");
  
}
componentDidMount() {
console.log("Home - componentDidMount");

  this.props.updateTopState({showNavBack: false});
}
componentWillUnmount() {
  console.log("Home - componentWillUnmount");
   this.props.updateTopState({showNavBack: true});
}

  render() {

    return (
      <div id="sceneHome" style={styles.sceneHome}>
        <div id="promoWrapper" style={styles.promoWrapper}>
          <div style={styles.searchWrapper}>
              <TextField     
      floatingLabelText="Quick search by name or keyword"
    /><br />
          </div>
          <div style={styles.categoryWrapper}>
            <div>
              <div style={{ ...styles.categoryBox }}>
                <Paper style={{ ...styles.category, ...styles.categoryBgFood }} zDepth={1} circle={true} ></Paper>
                <div style={styles.categoryTitle}>Food</div>
              </div>
              <div style={{ ...styles.categoryBox }}>
                <Paper style={{ ...styles.category, ...styles.categoryBgBeauty }} zDepth={1} circle={true} ></Paper>
                <div style={styles.categoryTitle}>Beauty & Spa</div>
              </div>
              <div style={{ ...styles.categoryBox }}>
                <Paper style={{ ...styles.category, ...styles.categoryBgElectronics }} zDepth={1} circle={true} />
                <div style={styles.categoryTitle}>Electronics</div>
              </div>
            </div>

            <div>
              <div style={{ ...styles.categoryBox }}>
                <Paper style={{ ...styles.category, ...styles.categoryBgFashion }} zDepth={1} circle={true} />
                <div style={styles.categoryTitle}>Fashion</div>
              </div>
              <div style={{ ...styles.categoryBox }}>
                <Paper style={{ ...styles.category, ...styles.categoryBgHome }} zDepth={1} circle={true} />
                <div style={styles.categoryTitle}>Home & Garden</div>
              </div>
            </div>
          </div>
        </div>

        <div id="homeFootNav" style={styles.homeFootNav}>
          <Paper zDepth={1}>
            <BottomNavigation style={styles.bottomNavigation} >

              <BottomNavigationItem
                label="Latest Deals"
                icon={recentIcon}
                containerElement={<Link to="/latest" />}
              />

              <BottomNavigationItem
                label="Nearby"
                icon={nearbyIcon}

              />
              <BottomNavigationItem
                label="All Deals"
                icon={allDealsIcon}

              />
            </BottomNavigation>
          </Paper>
        </div>
      </div>
    );//.return

  }//.render

}//.class

export default Home;