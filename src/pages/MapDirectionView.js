/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Actions} from 'react-native-router-flux';

const {width, height} = Dimensions.get('window');

export default class Map extends Component {
  state: {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  UNSAFE_componentWillMount() {
    console.log(this.props.data);

    const {firstLangLat} = this.props.data;

    this.setState({
      region: {
        latitude: firstLangLat[0],
        longitude: firstLangLat[1],
        latitudeDelta: 8,
        longitudeDelta: 8,
      },
    });
  }

  render() {
    const {firstLangLat, lastLangLat} = this.props.data;
    const origin = {latitude: firstLangLat[0], longitude: firstLangLat[1]};
    const destination = {
      latitude: lastLangLat[0],
      longitude: lastLangLat[1],
    };
    const GOOGLE_MAPS_APIKEY = 'AIzaSyCCu4o30Fkxbo53-MPKxI5wHIjojjecCU0';

    return (
      <View
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <MapView
          style={{...StyleSheet.absoluteFillObject}}
          region={this.state.region}>
          <Marker coordinate={origin} />
          <Marker coordinate={destination} />
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={6}
            strokeColor="#05B3FD"
          />
        </MapView>
      </View>
    );
  }
}

const styles = {
  buttonStyle: {
    // marginTop: height - 100,
    // marginLeft: width - 80,
  },
};
