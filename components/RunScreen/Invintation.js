import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default () => (
  <View style={styles.container}>
    <Text>Lets start new run!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center'
  }
});
