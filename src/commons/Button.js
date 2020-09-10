/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, Dimensions, TouchableOpacity} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => this.props.onPress()}>
        <Text style={{color: 'white'}}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  viewStyle: {
    width: width * 0.71,
    height: height * 0.07,
    backgroundColor: '#1572de',
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
