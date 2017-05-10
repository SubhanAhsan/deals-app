
import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import IconActionRecent from 'material-ui/svg-icons/action/restore';
import IconMapNearMe from 'material-ui/svg-icons/maps/near-me';
import IconMapLocalOffer from 'material-ui/svg-icons/maps/local-offer';

import PromoImg from '../images/dubai1.jpg';

const recentIcon = <IconActionRecent />;
const allDealsIcon = <IconMapLocalOffer />;
const nearbyIcon = <IconMapNearMe />;
const styles = {
  sceneHome:{

  },
  promoWrapper:{
    height: '100vh',
    width: '100%',
    position: 'fixed',
    top: '50px',
    left: '0px',
    backgroundImage: 'url(' + PromoImg + ')',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
  homeFootNav:{
    position: 'fixed',
    bottom: '0',
    left: '0',    
    width: '100%',
 
  },
};


class Home extends Component{


render(){

return(
<div id="sceneHome" style={styles.sceneHome}>  
<div id="promoWrapper" style={styles.promoWrapper}>         

</div>

<div id="homeFootNav" style={styles.homeFootNav}>
    <Paper zDepth={1}>
        <BottomNavigation >
         
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