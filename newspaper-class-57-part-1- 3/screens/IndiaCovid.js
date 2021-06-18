import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default class IndiaCovid extends Component {
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
          India reports the lowest rise in daily covid cases in 5 days
        </Text>
        <Text style={styles.NormalText}>
          India reported 15,388 new COVID-19 cases, 16, 596 recoveries, and 77
          deaths in the last 24 hours, according to the Union Health Ministry on
          Tuesday.
        </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://images.livemint.com/img/2021/03/09/600x338/2021-03-08T094431Z_308808521_RC2X6M9X4URN_RTRMADP_3_HEALTH-CORONAVIRUS-INDIA-CASES_1615263573443_1615263594334.JPG',
          }}
        />
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
    height: 300,
  },
});

//ㅤ
