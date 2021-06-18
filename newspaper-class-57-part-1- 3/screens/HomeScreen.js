import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Button,
} from 'react-native';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  incrimentCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraphreal}>My news app</Text>
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
            height: 47,
            margin: 10,
            width: 300,
          }}
          onPress={() => this.props.navigation.navigate('CanadaCovidScreen')}>
          <Text style={styles.paragraph}>Covid 19 news (Canada)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            borderColor: 'blue',
            borderWidth: 1,
            borderRadius: 12,
            color: 'white',
            fontSize: 21,
            overflow: 'hidden',
            padding: 12,
            textAlign: 'center',
            height: 47,
            margin: 10,
            width: 300,
          }}
          onPress={() => this.props.navigation.navigate('CanadaScreen')}>
          <Text style={styles.paragraph}>Canada news</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            borderColor: 'green',
            borderWidth: 1,
            borderRadius: 12,
            color: 'white',
            fontSize: 21,
            overflow: 'hidden',
            padding: 12,
            textAlign: 'center',
            height: 47,
            margin: 10,
            width: 300,
          }}
          onPress={() => this.props.navigation.navigate('IndiaCovidScreen')}>
          <Text style={styles.paragraph}>Covid 19 news (India)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            borderColor: 'orange',
            borderWidth: 1,
            borderRadius: 12,
            color: 'white',
            fontSize: 21,
            overflow: 'hidden',
            padding: 12,
            textAlign: 'center',
            height: 47,
            margin: 10,
            width: 300,
          }}
          onPress={() => this.props.navigation.navigate('BramptonScreen')}>
          <Text style={styles.paragraph}>Brampton news</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'yellow',
            borderColor: 'yellow',
            borderWidth: 1,
            borderRadius: 12,
            color: 'white',
            fontSize: 21,
            overflow: 'hidden',
            padding: 12,
            textAlign: 'center',
            height: 47,
            margin: 10,
            width: 300,
          }}
          onPress={() => this.props.navigation.navigate('AnimalScreen')}>
          <Text style={styles.paragraph}>Animal news</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 30,
            color: 'black',
          }}>
          Rate us
        </Text>
        <TouchableOpacity onPress={this.incrimentCounter}>
          <Image
            style={{
              height: 50,
              width: 50,
              alignItems: 'center',
            }}
            onPress={this.incrimentCounter}
            source={{
              uri:
                'https://www.nicepng.com/png/detail/7-75703_disney-emoji-blitz-mickey-mouse-thumbs-up-emoji.png',
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center', // <-- the magic
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 0,
            width: 200,
          }}>
          {this.state.counter}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F6F6F6',
    height: '100%',
    marginBottom: 350,
  },
  paragraphreal: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'blue',
    padding: 20,
    marginTop: -140,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});

//
