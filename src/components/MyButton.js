import React, { Component } from 'react';
import { StyleSheet,View, Text ,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
export default class MyButton extends Component {

  render() {
    return (
      <TouchableOpacity style={[styles.buton,{backgroundColor:this.props.bgColor,}]}>
       <Text style={{color:'#ffffff'}}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
MyButton.propTypes={
    text:PropTypes.string.isRequired,
    bgColor:PropTypes.string

}
const styles = StyleSheet.create({
buton:{
  paddingVertical:15,
  alignItems:'center',
  borderRadius:5
}

});