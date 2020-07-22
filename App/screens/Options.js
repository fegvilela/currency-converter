import React from 'react';
import { SafeAreaView, ScrollView, Linking, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';

const openLink = url => 
  Linking.openURL(url).catch(() => {
    Alert.alert('Error', 'try later')
  }
);



export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <RowItem
          title="Fellowship"
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
          onPress={() => openLink("https://google.com")}
        />

        <RowSeparator />

        <RowItem
          title="of the"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          onPress={() => openLink("https://facebook.com")}
        />

        <RowSeparator />

        <RowItem
          title="Ring"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          onPress={() => openLink("https://twitter.com")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}