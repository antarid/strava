import React from 'react';
import {Icon} from 'expo';
import {View, TouchableOpacity, StyleSheet, Platform} from 'react-native';

import Colors from '../constants/Colors';

export default ({name, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Icon.Ionicons
        name={Platform.OS == 'ios' ? 'ios-' + name : 'md-' + name}
        size={30}
        color={Colors.buttonText}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginLeft: 10,
    marginRight: 10,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    backgroundColor: Colors.buttonBackground
  }
});
