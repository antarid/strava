import React from 'react';
import { View, StyleSheet } from 'react-native';
import RoundButton from '../RoundButton';
import { connect } from 'react-redux';

class Controls extends React.Component {
  startButton = () => (
    <RoundButton key={0} name="play" onPress={this.props.startRun} />
  );

  pauseRunButton = () => {
    const { isPaused, unpauseRun, pauseRun } = this.props;
    return (
      <RoundButton
        key={1}
        name={isPaused ? 'play' : 'pause'}
        onPress={isPaused ? unpauseRun : pauseRun}
      />
    );
  };

  stopRunButton = () => (
    <RoundButton key={2} name="square" onPress={this.props.stopRun} />
  );

  toggleModeButton = () => (
    <RoundButton
      key={3}
      name={this.props.mode === 'map' ? 'pulse' : 'map'}
      onPress={this.props.toggleMode}
    />
  );

  render() {
    const { isStarted, isPaused } = this.props;

    let content;
    if (isStarted) content = [this.startRunButton()];
    else {
      if (isPaused) content = [this.pauseRunButton(), this.toggleModeButton()];
      else
        content = [
          this.pauseRunButton(),
          this.stopRunButton(),
          this.toggleModeButton()
        ];
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
    startRun: () => dispatch({ type: 'START_RUN' }),
    pauseRun: () => dispatch({ type: 'PAUSE_RUN' }),
    unpauseRun: () => dispatch({ type: 'UNPAUSE_RUN' }),
    stopRun: () => dispatch({ type: 'STOP_RUN' })
  })
)(Controls);
