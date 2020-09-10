import React, {Component} from 'react';

import {
  StyleSheet,
  Platform,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  Image,
  TextInput,
  YellowBox,
  Alert,
} from 'react-native';

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      isLoading: true,
      refreshing: false,
    };

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
  }

  GetItem(flower_name) {
    Alert.alert(flower_name.toString());
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  webCall = () => {
    return fetch('http://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
            refreshing: false,
          },
          function() {
            // In this block you can do something with new state.
          },
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount() {
    this.webCall();
  }

  onRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
      },
      () => {
        this.webCall();
      },
    );
  };

  searchFilter = text => {
    const newData = this.state.dataSource.filter(item => {
      const listItem = `${item.title.toLowerCase()}`;

      return listItem.indexOf(text.toLowerCase()) > -1;
    });

    this.setState({
      dataSource: newData,
    });
  };

  renderHeader = () => {
    const {text} = this.state;
    return (
      <View style={styles.searchContainer}>
        <TextInput
          onChangeText={text => {
            this.setState({
              text,
            });

            this.searchFilter(text);
          }}
          value={text}
          placeholder="Search..."
          style={styles.searchInput}
        />
      </View>
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
        <FlatList
          ListHeaderComponent={this.renderHeader()}
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          renderItem={({item}) => (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text
                onPress={this.GetItem.bind(this, item.userId)}
                style={styles.textView}>
                {item.id} {item.title}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },

  imageView: {
    width: '50%',
    height: 100,
    margin: 7,
    borderRadius: 7,
  },

  textView: {
    width: '50%',
    textAlignVertical: 'center',
    padding: 10,
    color: '#000',
  },
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
});
