import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Router, Scene, Actions, Drawer} from 'react-native-router-flux';

import Login from './src/pages/Login';
import List from './src/pages/List';
import Menu from './src/pages/Menu';
import OnList from './src/pages/OnList';
import MapDirection from './src/pages/MapDirection';
import MapDirectionView from './src/pages/MapDirectionView';
import Photo from './src/pages/Photo';
import Story from './src/pages/Story';
const {width, height} = Dimensions.get('window');

class Root extends Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar}>
        <Scene hideNavBar key="Root">
          <Drawer
            drawerWidth={width / 2 + 50}
            drawerImage={require('./src/img/menu.png')}
            drawerPosition="left"
            key="LastScreen"
            contentComponent={Menu}>
            <Scene key="OnList" component={OnList} hideNavBar />
            <Scene key="Photo" component={Photo} hideNavBar />
            <Scene key="Story" component={Story} hideNavBar />
            <Scene key="Login" component={Login} initial hideNavBar />
          </Drawer>

          <Scene key="MapDirection" component={MapDirection} hideNavBar />
          <Scene
            key="MapDirectionView"
            component={MapDirectionView}
            hideNavBar
          />
        </Scene>
      </Router>
    );
  }
}
const styles = {
  navBar: {
    backgroundColor: '#6704AA',
  },
};
export default Root;
