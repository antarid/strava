import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Numbers from '../components/RunScreen/Numbers';
import Controls from '../components/RunScreen/Controls';

export default class RunScreen extends React.Component {
  static navigationOptions = {
    header: null
    //title: 'Run'
  };

  state = {
    mode: 'numbers'
  };

  toggleMode = () => {
    this.setState({mode: this.state.mode === 'numbers' ? 'map' : 'numbers'});
  };

  render() {
    return (
      <View style={styles.centered}>
        <Numbers />
        <Controls toggleMode={this.toggleMode} mode={this.state.mode} />
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
