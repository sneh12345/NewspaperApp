import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraphreal}>Sneh's news website</Text>
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
          width: 300
        }}
        onPress={() =>
          Linking.openURL(
            'https://www.cbc.ca/news/world/coronavirus-covid19-canada-world-march9-2021-1.5941963'
          )
        }>
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
          height: 50,
          margin: 10,
          width: 300
        }}
        onPress={() =>
          Linking.openURL('https://angusreid.org/child-care-in-canada/')
        }>
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
          height: 50,
          margin: 10,
          width: 300
        }}
        onPress={() =>
          Linking.openURL(
            'https://www.livemint.com/news/india/india-reports-the-lowest-rise-in-daily-covid-cases-in-5-days-11615263192187.html'
          )
        }>
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
          height: 50,
          margin: 10,
          width: 300
        }}
        onPress={() =>
          Linking.openURL(
            'https://globalnews.ca/news/7685317/brampton-transit-covid-19-investigation-service/'
          )
        }>
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
          height: 50,
          margin: 10,
          width: 300
        }}
        onPress={() =>
          Linking.openURL(
            'https://www.livescience.com/largest-animal-ears-relative-to-body-size.html'
          )
        }>
        <Text style={styles.paragraph}>Animal news</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30,
          color: 'white'
        }}>
        Rate us
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#222831',
    width: '100%',
  },
  paragraphreal: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: 'white',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
