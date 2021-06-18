import React , {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { TouchableOpacity, Linking, Link } from 'react-native';
import Animal from './screens/Animal';
import Canada from './screens/Canada';
import Brampton from './screens/Brampton';
import HomeScreen from './screens/HomeScreen';
import CanadaCovid from './screens/CanadaCovid';
import IndiaCovid from './screens/IndiaCovid'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
    <View>
      <AppContainer/>
    </View>
    )
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  AnimalScreen: Animal, 
  BramptonScreen: Brampton,
  CanadaScreen: Canada, 
  CanadaCovidScreen: CanadaCovid,
  IndiaCovidScreen: IndiaCovid

})
const AppContainer = createAppContainer(AppNavigator)