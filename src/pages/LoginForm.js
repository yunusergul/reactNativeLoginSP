import React, {Component} from 'react';
import {
  Button,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native';
import Input from '../components/Input';
import MyButton from '../components/MyButton';
import List from '../pages/List';
import {Router, Scene, Actions, Drawer} from 'react-native-router-flux';

export default class LoginForm extends Component {
  state = {
    name: '',
    pass: '',
  };

  Kontrol = () => {
    if (this.state.name != 'Admin' || this.state.pass != '1234') {
      Alert.alert(
        'Yanlış Giriş!',
        'Lütfen bilgilerinizi doğru giriniz.',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
      this.setState({
        name: '',
        pass: '',
      });
    } else {
      Actions.OnList();
    }
  };

  render() {
    return (
      <View>
        <Text style={styles.singInText}>Giriş Yap </Text>
        <Input
          value={this.state.name}
          onChangeText={value => this.setState({name: value})}
          onSubmitEditing={() => this.passwordInput.focus()}
          returnKeyType={'next'}
          autoCapitalize="none"
          placeholder="Username"
        />

        <Input
          value={this.state.pass}
          onChangeText={value => this.setState({pass: value})}
          returnKeyType={'go'}
          inputRef={input => (this.passwordInput = input)}
          secureTextEntry={true}
          placeholder="Password"
        />

        <Button onPress={this.Kontrol} title="Giriş Yap" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  singInText: {
    marginVertical: 10,
    fontSize: 14,
    color: '#333',
  },
});
