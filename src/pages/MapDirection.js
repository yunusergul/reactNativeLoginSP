import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import {Actions} from 'react-native-router-flux';
import Button from '../commons/Button';

const {width, height} = Dimensions.get('window');

export default class MapDirection extends Component {
  state= {
    firstLocation: '',
    lastLocation: '',
    firstLangLat: [],
    lastLangLat: [],
    firstImgOk: require('../img/ok.png'),
    lastImgOk: require('../img/ok.png'),
  };

  openSearchModal(type) {
    RNGooglePlaces.openAutocompleteModal()
      .then(place => {
        console.log(place);
        if (type === 'first') {
          this.setState({
            firstLocation: place.name,
            firstImgOk: require('../img/check.png'),
            firstLangLat: [place.location.latitude, place.location.longitude],
          });
        } else {
          this.setState({
            lastLocation: place.name,  
            lastImgOk: require('../img/check.png'),
            lastLangLat: [place.location.latitude, place.location.longitude],
          });
        }
      })
      .catch(error => console.log(error.message)); // error is a Javascript Error object
  }

  renderSection(text, onPress, img) {
    return (
      <View style={styles.section}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{textAlign: 'center', flex: 18}}>{text}</Text>
          <Image source={img} style={{}} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={require('../img/bg.png')}
          style={styles.backgroudStyle}
          blurRadius={1}>

          {this.renderSection(
            this.state.firstLocation,
            () => this.openSearchModal('first'),
            this.state.firstImgOk,
          )}
          {this.renderSection(
            this.state.lastLocation,
            () => this.openSearchModal('last'),
            this.state.lastImgOk,
          )}
          
          <Button
          text='View Direction 🗾'
          onPress={() =>
            Actions.MapDirectionView({
              data: {
                firstLangLat: this.state.firstLangLat,
                lastLangLat: this.state.lastLangLat,
              },
            })
          }
        />

        </ImageBackground>
      </View>
    );
  }
}


const styles = {
  section: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    width: width * 0.59,
    height: height * 0.05,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  backgroudStyle: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerButtonStyle: {
    width: width * 0.24,
    height: width * 0.24,
    borderRadius: (width * 0.24) / 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerMainViewStyle: {
    flexDirection: 'row',
    marginTop: 20,
    width: width * 0.59,
    justifyContent: 'space-between',
  },
  pickerTextStyle: {
    color: 'white',
    width: width * 0.24,
    textAlign: 'center',
    marginTop: 10,
  },
  photoStyle: {
    width: width * 0.24,
    height: width * 0.24,
    borderRadius: (width * 0.24) / 2,
  },
};