import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { widthToDp, heightToDp } from '../../utils/responsiveUtils';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import {Icon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from '../components/homeComponent';


const rootTab = createMaterialBottomTabNavigator();

export default function root_Tab() {
    return (
        <rootTab.Navigator
            initialRouteName="Home"
            activeColor="#5956e9"
            barStyle={{ backgroundColor: '#f2f2f2' }}
            
        >
            <rootTab.Screen
                name="Home" component={Home}
                options={{
                    tabBarLabel: null,
                    // tabBarBadge: 3 ,
                    
                    tabBarIcon: ({ color }) => (
                     
                        <Icon name="home" color={color} size={26} />
                    ),
                }}
            />
           
           <rootTab.Screen
                name="Home2" component={Home}
                options={{
                    tabBarLabel: null,
                    tabBarBadge: 3 ,
                    
                    tabBarIcon: ({ color }) => (
                     
                        <Icon name="hearto" color={color} size={26} />
                    ),
                }}
            />
            
            <rootTab.Screen
                name="Home3" component={Home}
                options={{
                    tabBarLabel: null,
                    // tabBarBadge: 3 ,
                    
                    tabBarIcon: ({ color }) => (
                     
                        <Icon name="shoppingcart" color={color} size={26} />
                    ),
                }}
            />
            
            <rootTab.Screen
                name="Home4" component={Home}
                options={{
                    tabBarLabel: null,
                    // tabBarBadge: 3 ,
                    
                    tabBarIcon: ({ color }) => (
                     
                        <Icon name="user" color={color} size={26} />
                    ),
                }}
            />
        </rootTab.Navigator>
    );
}




const styles = StyleSheet.create({

    img: {
        width: widthToDp('5%'), //90
        height: widthToDp('5%'), //80

    },
});

