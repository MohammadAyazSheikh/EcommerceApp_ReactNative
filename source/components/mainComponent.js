import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './splashScreen';
import LogIn from './logInComponent';
import root_Tab from '../routes/rootTab';
import Search from '../components/searchComponent'
const rootStack = createStackNavigator();



export default function Main() {
  return (
    <NavigationContainer>
      <rootStack.Navigator initialRouteName="Splash"
        screenOptions={{
          style: {
            textAlign: 'center'
          },
          headerStyle: {
            backgroundColor: '#A4A7A0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            marginRight: 50
          },
        }}
      >
        <rootStack.Screen name="Splash" component={Splash}
          options={{
            headerShown: false
            // title: 'Getting Start',
            // headerTitleStyle: {
            //   alignSelf: 'center',
            // },
          }} />
        <rootStack.Screen name="LogIn" component={LogIn}
          options={{
            headerShown: false
          }}
        />
        <rootStack.Screen name="rootTab" component={root_Tab}
          options={{
            headerShown: false
          }}
        />
        <rootStack.Screen name="Search" component={Search}
          options={{
            headerShown: false
          }}
        />
        {/* <rootStack.Screen name="LogIn" component={LogIn}
          options={{ title: 'Login Now' }} />
        <rootStack.Screen name="SignUp" component={SignUp}
          options={{ title: 'Register' }} /> */}
        {/* <rootStack.Screen name="RootTab" component={root_Tab}
          options={{
            headerShown: false
          }}
        /> */}
      </rootStack.Navigator>
    </NavigationContainer>
  );
}

