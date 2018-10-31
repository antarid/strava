import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';

export default class RunScreen extends React.Component {
  static navigationOptions = {
    header: null
    //title: 'Run'
  };

  render() {
    return (
      <View style={styles.centered}>
        <Text>Run screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
