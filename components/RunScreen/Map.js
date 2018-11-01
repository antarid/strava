import React from 'react';
import {MapView} from 'expo';
import {View, StyleSheet} from 'react-native';

export default () => (
  <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  map: {
    width: '100%',
    height: '100%'
  }
});
