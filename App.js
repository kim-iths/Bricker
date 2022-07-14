import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './src/screens/TabNavigation/TabNavigation';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer onReady={() => console.log('Ready')}>
        <Stack.Navigator>
          <Stack.Screen name="Tab" component={TabNavigation} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Evaluate day" component={EvaluateDayScreen} /> */}
          {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
        </Stack.Navigator>
        
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
