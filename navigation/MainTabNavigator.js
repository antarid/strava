import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import RunScreen from '../screens/RunScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Workouts',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-list${focused ? '' : '-outline'}`
          : 'md-list'
      }
    />
  )
};

const RunStack = createStackNavigator({
  Run: RunScreen
});

RunStack.navigationOptions = {
  tabBarLabel: 'Run',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-walk${focused ? '' : '-outline'}`
          : 'md-walk'
      }
    />
  )
};

export default createBottomTabNavigator({
  RunStack,
  HomeStack
});
