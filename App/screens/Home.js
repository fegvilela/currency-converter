import React from 'react';
import { 
  View, 
  StatusBar, 
  StyleSheet, 
  Image, 
  Dimensions,
  Text } from 'react-native';
  import { format } from 'date-fns';

import colors from '../constants/colors';
import { ConversionInput } from '../components/ConversionInput';
import { Button } from '../components/Button';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width / 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: colors.white,
    textAlign: "center",
    marginVertical: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    color: colors.white,
  }
});

export default () => {
  const baseCurrency = "USD" ;
  const quoteCurrency = "GBP";
  const conversionRate = 0.8359;
  const date = '2020-07-01';

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/background.png")}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.textHeader}> Currency Converter</Text>

      <ConversionInput
        text="USD"
        value="123"
        onButtonPress={() => alert("todo!")}
        keyboardType="numeric"
        onChangeText={(text) => console.log("text", text)}
      />
      <ConversionInput
        text="GBP"
        value="123"
        onButtonPress={() => alert("todo!")}
        keyboardType="numeric"
        onChangeText={(text) => console.log("text", text)}
        editable={false}
      />

      <Text style={styles.text}> 
        {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
          new Date(date), 
          'MMMM do, yyyy')}`} 
      </Text>

      <Button 
        text="Hello"
        onPress={() => alert('hey')}
      />
    </View>
  );
}