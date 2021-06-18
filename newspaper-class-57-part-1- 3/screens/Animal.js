import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default class Animal extends Component {
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
          Animal News
        </Text>
        <Text style={styles.NormalText}>
          A stray dog kept stealing a stuffed unicorn, so animal control bought
          it for him
        </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://www.ctvnews.ca/polopoly_fs/1.5365417.1616895618!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg',
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
    height: 350,
  },
});

//ㅤ
