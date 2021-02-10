import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Splash from './source/components/splashScreen';
import LogIn from './source/components/logInComponent';
import Main from './source/components/mainComponent'

export default function App() {
  return (
    <LogIn/>
    // <Main />
  );
}


