import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default function Menu() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFCFA',
      }}>
      <Text onPress={() => Actions.OnList()} style={styles.section}>
        - HomePage
      </Text>
      <Text onPress={() => Actions.MapDirection()} style={styles.section}>
        - Map Direction
      </Text>
      <Text onPress={() => Actions.Photo()} style={styles.section}>
        - Fotoğraf Çek
      </Text>
      <Text onPress={() => Actions.Story()} style={styles.section}>
        - Story
      </Text>
      <Text style={styles.section}>- İletişim</Text>
    </View>
  );
}
const styles = {
  section: {
    marginLeft: 20,
    marginTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
};
