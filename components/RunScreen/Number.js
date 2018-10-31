import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default ({value, name, active}) => (
  <View style={styles.container}>
    <Text style={active ? styles.activeValue : styles.value}>{value}</Text>
    <Text style={styles.name}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  value: {
    textAlign: 'center',
    fontSize: 45,
    fontWeight: 'bold'
  },
  activeValue: {
    textAlign: 'center',
    fontSize: 100,
    fontWeight: 'bold'
  },
  name: {
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 15,
    marginTop: -5
  }
});
