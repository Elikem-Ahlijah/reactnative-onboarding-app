import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddToCartScreen from './src/screens/AddToCartScreen';
import OnlineShoppingScreen from './src/screens/OnlineShoppingScreen';
import PaymentSuccessfulScreen from './src/screens/PaymentSuccessfulScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
       <AddToCartScreen/> 
       {/* <OnlineShoppingScreen/>   */}
        {/* <PaymentSuccessfulScreen/>  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
