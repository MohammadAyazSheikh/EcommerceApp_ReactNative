import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { widthToDp, heightToDp } from '../../utils/responsiveUtils';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from '../components/homeComponent';
import Favorite from '../components/favoriteComponent';
import Profile from '../components/profileComponent';
import Basket from '../components/basketComponent';
import Home_Top_Tab from './homeTopTab';



const rootTab = createMaterialBottomTabNavigator();

export default function root_Tab() {
    return (
        <rootTab.Navigator
            initialRouteName="Home"
            activeColor="#5956e9"
            barStyle={{ backgroundColor: '#f2f2f2' }}
        >
            <rootTab.Screen
                name="Home" component={Home_Top_Tab}
                options={{
                    tabBarLabel: null,
                    tabBarIcon: ({ color }) => (

                        <Icon name="home" color={color} size={26} />
                    ),
                }}
            />
            <rootTab.Screen
                name="Favorite" component={Favorite}
                options={{
                    tabBarLabel: null,
                    tabBarIcon: ({ color }) => (
                        <Icon name="hearto" color={color} size={24} />
                    ),
                }}
            />
            <rootTab.Screen
                name="Basket" component={Basket}
                options={{
                    tabBarLabel: null,
                    tabBarBadge: 3 ,
                    tabBarIcon: ({ color }) => (
                        <Icon name="shoppingcart" color={color} size={26} />
                    ),
                }}
            />
            <rootTab.Screen
                name="Profile" component={Profile}
                options={{
                    tabBarLabel: null,
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

