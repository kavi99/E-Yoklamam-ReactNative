import React from 'react';

import {
  SelectionScreen,
  StudentLogin,
  RegisterStudent,
  StudentHome,
} from './components';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {StyleSheet} from 'react-native';

export default class Navigation extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const AppNavigator = createStackNavigator(
  {
    Selection: {
      screen: SelectionScreen,
      navigationOptions: {
        header: null,
      },
    },
    StudentLogin: {
      screen: StudentLogin,
    },
    RegisterStudent: {
      screen: RegisterStudent,
    },
    StudentHome: {
      screen: StudentHome,
    },
  },
  {
    initialRouteName: 'Selection',
    headerLayoutPreset: 'center', //header baslık konumu
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#ffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({});
