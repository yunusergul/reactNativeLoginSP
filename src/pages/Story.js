import StoryComponent from 'react-native-story';
import React, {Component} from 'react';
import {TextInput,View} from 'react-native';
import {WebView} from 'react-native-webview';

const stories = [
  {
    id: '1',
    source: require('../img/background_story.jpg'),
    user: 'Osman Cansız',
    avatar: require('../img/1.png'),
  },
  {
    id: '2',
    source: require('../img/background_story.jpg'),
    user: 'Burkay Sevilmiş',
    avatar: require('../img/2.png'),
  },
  {
    id: '3',
    source: require('../img/background_story.jpg'),
    user: 'Yunus Ergül',
    avatar: require('../img/3.png'),
  },
  {
    id: '4',
    source: require('../img/background_story.jpg'),
    user: 'Murat Temel',
    avatar: require('../img/4.png'),
  },
  {
    id: '5',
    source: require('../img/background_story.jpg'),
    user: 'Göktuğ Kara',
    avatar: require('../img/5.png'),
  },
];

export default class Story extends Component {
  render() {
    return (
        <StoryComponent
          unPressedBorderColor="#e95950"
          pressedBorderColor="#ebebeb"
          stories={stories}
          footerComponent={
            <TextInput
              placeholder="Send message"
              placeholderTextColor="white"
            />
          }
        />
         
     
    );
  }
}
