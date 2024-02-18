import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logoImage from './salud_logo.png';
import Quiz from './Quiz';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={logoImage} style={styles.logo} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Quiz')}>
          <Text style={styles.buttonText}>Take the Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbf0df',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 450,
    height: 450,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#A1e3a1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default HomeScreen;

