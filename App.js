import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
//SCREENS
import MenuScreen from './screens/MenuScreen';
import OneMobileGameScreen from './screens/OneMobileGameScreen';
import EnterNamesScreen from './screens/EnterNamesScreen';
import RulesMobileScreen from './screens/RulesMobileScreen';
import SettingsScreen from './screens/SettingsScreen';
import GameConfigScreen from './screens/GameConfigScreen';
import ConfirmationPlayersScreen from './screens/ConfirmationPlayersScreen';
//NAVIGATION
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MenuScreen">
          <Stack.Screen 
          name="MenuScreen"
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
          component={MenuScreen}
           />

          <Stack.Screen 
          name="gameScreen"
          component={OneMobileGameScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
          />
          <Stack.Screen name="RulesMobileScreen" component={RulesMobileScreen}/>
          <Stack.Screen name="Config" component={GameConfigScreen}/>
          <Stack.Screen name="Settings" component={SettingsScreen}/>
          <Stack.Screen 
          name="EnterNames"
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
          component={EnterNamesScreen}/>
          <Stack.Screen name="Confirmation"
           options={{
            headerShown: false,
            gestureEnabled: false,
          }}
          component={ConfirmationPlayersScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
