import React from 'react';
import { Text, TextInput,  TouchableOpacity, View, StyleSheet} from 'react-native';

import colors from '../constants/colors.js';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },
  button: {
    padding: 15,
    borderRightColor: colors.border,
    borderRightWidth: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  buttonText: {
    color: colors.blue,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  input: {
    color: colors.textLight,
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
});

export const ConversionInput = ({text, onButtonPress, ...props}) => {
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} />
    </View>
  );
}