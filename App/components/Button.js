import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonIcon: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
  },
});

export const Button = ({ text, onPress }) => {
  return(
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image source={require('../assets/images/reverse.png')} style={styles.buttonIcon} />
      <Text style={styles.buttonText}> 
        { text } 
      </Text>
    </TouchableOpacity> 
  );
}