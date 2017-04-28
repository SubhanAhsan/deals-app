import React, {Component} from 'react';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import IconActionRecent from 'material-ui/svg-icons/action/restore';
import IconActionRecent from 'material-ui/svg-icons/action/restore';

const recentIcon = <IconActionRecent />;
const allDealsIcon = <IconActionRecent />;
const nearbyIcon = <IconActionRecent />;

class Home extends Component{


render(){

<Paper zDepth={1}>
        <BottomNavigation >
          <BottomNavigationItem
            label="Latest Deals"
            icon={recentIcon}
            onTouchTap={}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onTouchTap={}
          />
          <BottomNavigationItem
            label="All Deals"
            icon={allDealsIcon}
            onTouchTap={}
          />
        </BottomNavigation>
</Paper>

}//.render

}//.class

export default Home;