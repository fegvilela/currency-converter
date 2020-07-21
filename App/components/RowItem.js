import React from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  StyleSheet 
} from 'react-native';

import colors from "../constants/colors";

const styles = StyleSheet.create({
  row: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
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

export const RowItem = ({title, rightIcon, onPress}) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <Text style={styles.title}> 
      {title} 
    </Text>
    {rightIcon}
  </TouchableOpacity>
);

export const RowSeparator = () => <View style={styles.separator} />;