import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default class CanadaCovid extends Component {
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
          Canada's Covid 19 Situation
        </Text>
        <Text style={styles.NormalText}>Coronavirus Cases: 1,076,607</Text>
        <Text style={styles.NormalText}>Deaths: 23,387</Text>
        <Text style={styles.NormalText}>Recovered: 974,985</Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/510px-Flag_of_Canada_%28Pantone%29.svg.png',
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
