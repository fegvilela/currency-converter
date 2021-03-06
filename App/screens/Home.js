import React, { useState } from "react";
import { 
  View, 
  StatusBar, 
  StyleSheet, 
  Image, 
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { format } from 'date-fns';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

import colors from '../constants/colors';
import { ConversionInput } from '../components/ConversionInput';
import { Button } from '../components/Button';
import { KeyboardSpacer } from '../components/KeyboardSpacer';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  content: {
    paddingTop: screen.height * .12,
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
  },
  header: {
    alignItems: "flex-end",
    marginHorizontal: 20,
  }
});

export default ({ navigation }) => {
  const baseCurrency = "USD" ;
  const quoteCurrency = "GBP";
  const conversionRate = 0.8359;
  const date = '2020-01-07';

  const [scrollEnabled, setScrollEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <ScrollView scrollEnabled={scrollEnabled}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push('Options')}>
            <Entypo name="cog" size={32} color={colors.white} />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.content}>
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
              "MMMM do, yyyy"
            )}`}
          </Text>

          <Button text="Reverse Currencies" onPress={() => alert("hey")} />
          <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
        </View>
      </ScrollView>
    </View>
  );
}