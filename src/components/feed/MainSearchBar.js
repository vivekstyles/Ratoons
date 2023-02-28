import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';

export default class MainSearchBar extends React.Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Feeds');
          }}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg',
            }}
          />
        </TouchableOpacity>
        <SearchBar style={styles.searchBar} />
        <Image
          style={styles.logo}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/465/465607.png',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  logo: {
    height: 35,
    width: 35,
    borderRadius: 20,
    margin: 5,
  },
  searchBar: {
    flex: 1,
  },
});
