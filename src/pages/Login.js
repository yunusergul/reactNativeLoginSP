import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  YellowBox
} from 'react-native';
import LoginForm from './LoginForm';

import RNFetchBlob from 'react-native-fetch-blob';

RNFetchBlob.fetch('GET', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQz4o-ZE3WBFfTbwHYtNAu2Dl1Jr7W-o-yhlukwwJp1XwoDAz52', {
  Authorization: 'Bearer access-token...',
  // more headers  ..
})
  // STAY HIGH
  // when response status code is 200
  .then(res => {
    // the conversion is done in native code
    let base64Str = res.base64();
    console.log(base64Str);
    // the following conversions are done in js, it's SYNC
    let text = res.text();
    let json = res.json();
  })
  // Status code is not 200
  .catch((errorMessage, statusCode) => {
    // error handling
  });

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headBackground} />
        <KeyboardAvoidingView behavior="position">
          <View>
            <Text style={styles.logo}>BRF</Text>
            <Text style={styles.logoDescription}>Software</Text>
          </View>

          <ScrollView>
            <View style={styles.loginArea}>
              <LoginForm />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingVertical: 80,
  },
  headBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 250,
    width: '100%',
    backgroundColor: '#1572de',
  },
  logo: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f2f2f2',
  },
  logoDescription: {
    textAlign: 'center',
    color: '#f2f2f2',
  },
  loginArea: {
    marginHorizontal: 40,
    marginVertical: 40,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,

    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
  },
  loginAreaTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  loginAreaDescription: {
    fontSize: 12,
    color: '#7e868f',
    marginVertical: 10,
    textAlign: 'center',
  },
});
