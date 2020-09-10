import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  YellowBox,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import axios from 'axios';

const fs = RNFetchBlob.fs;
const dirs = RNFetchBlob.fs.dirs;
const file_path = dirs.DownloadDir + '/bigjpg.png';

export default class Photo extends Component {
  state = {
    photo: require('../img/bg.jpg'),
  };
  openImagePicker() {
    // More info on all the options is below in the API Reference... just some common use cases shown here
    const options = {
      maxWidth: 500,
      maxHeight: 500,
      title: 'Fotoğraf',
      takePhotoButtonTitle: 'Fotoğraf Çek',
      cancelButtonTitle: 'Vazgeç',
      chooseFromLibraryButtonTitle: 'Dosyalardan Seç',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.height < response.width) {
        alert('Lütfen Yan Fotograf Çekmeyiniz LA.');
      } else {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          const source = {uri: response.uri};
          console.log(response);

          RNFetchBlob.fs
            .writeFile(file_path, response.data, 'base64')
            .then(() => {
              axios
                .post('http://burkaysevilmis.com/api/Test/PostUser/', {
                  ad: 'Leon',
                  soyad: 'Karabacak',
                  sifre: 'leonkarabacak123',
                  isactive: 'true',
                  gorsel: response.data
                })
                .then(function(response) {
                  console.log(response);
                })
                .catch(function(error) {
                  console.log(error);
                });
            });
          this.setState({
            photo: source,
          });
        }
      }
    });

    // ImagePicker.showImagePicker(options, response => {});
  }

  //<View style={styles.Box}>
  // <Text style={{textAlign:'center',textAlignVertical:'center'}} onPress={()=>this.openImagePicker()}> Fotoğraf Çek </Text>
  // </View>
  //Box:{
  // backgroundColor:'red',
  //width:'80%',
  //height:30,
  //}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Box1}>
          <Image
            resizeMode="stretch"
            style={{width: '100%', height: '100%'}}
            source={this.state.photo}
          />
        </View>
        <View style={styles.Box2}>
          <View
            style={{
              width: '80%',
              height: '18%',
              borderRadius: 14,
              backgroundColor: '#14d18f',
            }}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
              <Text
                style={{
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  color: 'white',
                }}
                onPress={() => this.openImagePicker()}>
                {' '}
                Fotoğraf Çek 📸{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Box1: {
    flex: 2,
  },
  Box2: {
    backgroundColor: '#f0ffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
