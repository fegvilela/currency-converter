import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  row: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: colors.text,
    fontSize: 16,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export default () => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.row} onPress={() => alert('todo')}>
        <Text style={styles.title}> Fellowship </Text>
      </TouchableOpacity>
    
      <View style={styles.separator} />

      <TouchableOpacity style={styles.row} onPress={() => alert('todo')}>
        <Text style={styles.title}> of </Text>
      </TouchableOpacity>
      
      <View style={styles.separator} />
      
      <TouchableOpacity style={styles.row} onPress={() => alert('todo')}>
        <Text style={styles.title}> the Ring </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}