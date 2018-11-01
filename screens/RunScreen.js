import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Numbers from '../components/RunScreen/Numbers';
import Map from '../components/RunScreen/Map';
import Invintation from '../components/RunScreen/Invintation';
import Controls from '../components/RunScreen/Controls';
import {Location, Permissions} from 'expo';
import {connect} from 'react-redux';

class RunScreen extends React.Component {
  static navigationOptions = {
    header: null
    //title: 'Run'
  };

  state = {
    mode: 'numbers'
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log(error);
    }
    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
    console.log(location);
  };

  toggleMode = () => {
    this.setState({mode: this.state.mode === 'numbers' ? 'map' : 'numbers'});
  };

  render() {
    let content;
    if (!this.props.runIsStarted) content = <Invintation />;
    else {
      if (this.state.mode === 'numbers') content = <Numbers />;
      else content = <Map />;
    }

    return (
      <View style={styles.centered}>
        <View style={styles.content}>{content}</View>
        <View style={styles.controls}>
          <Controls toggleMode={this.toggleMode} mode={this.state.mode} />
        </View>
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
  content: {
    backgroundColor: '#fff',
    flex: 4,
    width: '100%',
    justifyContent: 'center'
  },
  controls: {
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(state => ({
  runIsStarted: state.run.isStarted
}))(RunScreen);
