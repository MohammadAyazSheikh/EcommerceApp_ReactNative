import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import Main from './source/components/mainComponent';
import Animate from './source/components/animationComponent';
import Carousel from './source/components/carouselComponent';

export default function App() {

  return (
    <Carousel/>
    // <Animate/>
    // <Main />
  );
}




