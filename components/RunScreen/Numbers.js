import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Number from './Number';

const indicators = ['pace', 'time', 'distance'];

class Numbers extends React.Component {
  state = {
    activeIndicator: 'pace'
  };

  getStringValueOfProp = propName => {
    const prop = this.props[propName];
    switch (propName) {
      case 'time':
        let seconds = prop % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        let minutes = parseInt(prop / 60) % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let hours = parseInt(prop / 3600) % 24;
        hours = hours < 10 ? '0' + hours : hours;
        return `${hours !== '00' ? hours + ':' : ''}${minutes}:${seconds}`;
      default:
        return prop;
    }
  };

  render() {
    const activeIndicator = (
      <Number
        active={true}
        name={this.state.activeIndicator}
        value={this.getStringValueOfProp(this.state.activeIndicator)}
      />
    );
    const inactiveIndicators = indicators
      .filter(indicator => indicator != this.state.activeIndicator)
      .map((indicator, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => this.setState({ activeIndicator: indicator })}
        >
          <Number
            name={indicator}
            value={this.getStringValueOfProp(indicator)}
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

export default connect(state => ({
  ...state.run.params
}))(Numbers);

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
