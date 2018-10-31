import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Number from './Number';

const indicators = ['pace', 'time', 'distance'];

export default class Numbers extends React.Component {
  state = {
    activeIndicator: 'pace',
    data: {
      pace: '5:50',
      time: '28:35',
      distance: '5.34'
    }
  };
  render() {
    const activeIndicator = (
      <Number
        active={true}
        name={this.state.activeIndicator}
        value={this.state.data[this.state.activeIndicator]}
      />
    );
    const inactiveIndicators = indicators
      .filter(indicator => indicator != this.state.activeIndicator)
      .map((indicator, index) => (
        <TouchableOpacity
          onPress={() => this.setState({activeIndicator: indicator})}
        >
          <Number
            key={index}
            name={indicator}
            value={this.state.data[indicator]}
          />
        </TouchableOpacity>
      ));

    return (
      <View style={styles.container}>
        <View style={styles.activeIndicator}>{activeIndicator}</View>
        <View style={styles.inactiveIndicator}>{inactiveIndicators}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeIndicator: {},
  inactiveIndicator: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
