import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default class Canada extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#222831', height: 900 }}>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            padding: 20,
            paddingTop: 10,
            fontFamily: 'System',
            color: 'white',
            fontWeight: 'bold',
          }}>
         22-yr-old Winnipeg man hospitalized with coronavirus variant hopes his story will serve as warning
        </Text>
        <Text style={styles.NormalText}>
If you think you can't get seriously ill from COVID-19 because you're young and healthy, think again. That's the message a 22-year-old Winnipeg man is trying to get across by sharing his story about the illness that put him in hospital for nine days.

"You're not invincible just because you're healthy, just because you work out," said Peter Soliman, a psychology major at the University of Manitoba.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            borderWidth: 1,
            borderColor: 'red',
            borderRadius: 12,
            color: 'red',
            fontSize: 21,
            overflow: 'hidden',
            padding: 12,
            textAlign: 'center',
            height: 50,
            margin: 10,
            width: 300,
          }}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style={styles.ButtonText}>Go back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  NormalText: {
    fontSize: 18,
    textAlign: 'center',
    padding: 20,
    paddingTop: 10,
    fontSize: 18,
    fontFamily: 'System',
    color: 'white',
  },
  ButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
  tinyLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 325,
    height: 400,
  },
});

//ㅤ
