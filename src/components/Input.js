import React, { Component } from 'react';
import { StyleSheet,TextInput,View, Text } from 'react-native';

export default class Input extends Component {
state={
text:'',
};
  render() {
    return (
      <View>
       <TextInput ref={this.props.inputRef} onChangeText={text=>this.setState({
           text,
       })} value={this.state.text} style={styles.input} {...this.props} placeholderTextColor="#ddd"/>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  input:{
      height:40,
      paddingHorizontal:5,
      borderWidth:2,
      borderRadius:4,
      borderColor:'#f1f1f1',
      color:'#999',
      marginBottom:8,
      fontSize:14,
      fontWeight:'600'
  }
    });
