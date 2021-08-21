import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddToCartScreen from './src/screens/AddToCartScreen';
import OnlineShoppingScreen from './src/screens/OnlineShoppingScreen';
import PaymentSuccessfulScreen from './src/screens/PaymentSuccessfulScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator()

export default function App() {


  return (
    // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" /> */}
    //    {/* <AddToCartScreen/>  */}
    //    {/* <OnlineShoppingScreen/>   */}
    //     <PaymentSuccessfulScreen/> 
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Online Shopping' component={OnlineShoppingScreen}/>
        <Stack.Screen name='Add to cart' component={AddToCartScreen} />
        <Stack.Screen name='Payment Successful' component={PaymentSuccessfulScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
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
