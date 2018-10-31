import React from 'react';
import {View, StyleSheet} from 'react-native';
import RoundButton from '../RoundButton';
import {connect} from 'react-redux';

class Controls extends React.Component {
  render() {
    const startRunButton = (
      <RoundButton key={0} name="play" onPress={this.props.startRun} />
    );
    const pauseRunButton = (
      <RoundButton
        key={1}
        name={this.props.isPaused ? 'play' : 'pause'}
        onPress={
          this.props.isPaused ? this.props.unpauseRun : this.props.pauseRun
        }
      />
    );
    const stopRunButton = (
      <RoundButton key={2} name="square" onPress={this.props.stopRun} />
    );
    const toggleModeButton = (
      <RoundButton
        key={3}
        name={this.props.mode === 'map' ? 'pulse' : 'map'}
        onPress={this.props.toggleMode}
      />
    );
    let content;

    if (!this.props.isStarted) content = [startRunButton];
    else {
      if (!this.props.isPaused) content = [pauseRunButton, toggleModeButton];
      else content = [pauseRunButton, stopRunButton, toggleModeButton];
    }

    return <View style={styles.container}>{content}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20
  }
});

export default connect(
  state => ({
    ...state.run
  }),
  dispatch => ({
    startRun: () => dispatch({type: 'START_RUN'}),
    pauseRun: () => dispatch({type: 'PAUSE_RUN'}),
    unpauseRun: () => dispatch({type: 'UNPAUSE_RUN'}),
    stopRun: () => dispatch({type: 'STOP_RUN'})
  })
)(Controls);
