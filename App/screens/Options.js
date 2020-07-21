import React from 'react';
import { SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';


export default () => {
  return (
    <SafeAreaView>
      <RowItem
        title="Fellowship"
        rightIcon={
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        }
        onPress={() => alert("todo")}
      />

      <RowSeparator />
      <RowItem
        title="of the"
        rightIcon={
          <Entypo name="export" size={20} color={colors.blue} />
        }
        onPress={() => alert("todo")}
      />

      <RowSeparator />
      <RowItem
        title="Ring"
        rightIcon={
          <Entypo name="export" size={20} color={colors.blue} />
        }
        onPress={() => alert("todo")}
      />

      <RowSeparator />

    </SafeAreaView>
  );
}