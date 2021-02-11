import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../components/homeComponent';
import { widthToDp, heightToDp } from '../../utils/responsiveUtils';
import Icon from 'react-native-vector-icons/AntDesign';
const homeTopTab = createMaterialTopTabNavigator();

// const friendStack = createStackNavigator();



export default function Home_Top_Tab() {
    return (
        <>
            <View style={styles.container} >
                <View style={styles.txtInputView}>
                    <Icon name="search1" color='grey' size={26} style = {styles.icnonStyle} />
                    <TextInput placeholder='search' style={styles.txtInput} />
                </View>
                <View style={styles.txtView}>
                    <Text style = {styles.txtHeader}>Order online</Text>
                    <Text style = {styles.txtHeader}>Collect in store</Text>
                </View>

            </View>
            <homeTopTab.Navigator initialRouteName='Weareable'

                tabBarOptions={
                    {

                        labelStyle: {
                            fontSize: widthToDp(3),
                        },
                        // tabStyle: {
                        //     width: 100,
                        // },
                        activeTintColor: '#5956e9',
                        inactiveTintColor: '#9a9a9d',
                        style: {
                            backgroundColor: '#f2f2f2',
                            // marginTop: 25,
                        },
                        indicatorStyle: {
                            borderBottomColor: '#5956e9',
                            borderBottomWidth: 4,
                            // borderColor: 'grey',
                        },

                    }}>
                <homeTopTab.Screen name="Wearable" /*options={{ title: 'Friends' }}*/ component={Home} />
                <homeTopTab.Screen name="Laptops" component={Home} />
                <homeTopTab.Screen name="Phones" component={Home} />
                <homeTopTab.Screen name="Drones" component={Home} />
            </homeTopTab.Navigator>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 0.6,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
    },

    txtInputView: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtInput: {
        width: widthToDp(70),
        height: widthToDp(13),
        marginTop: heightToDp(6),
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        textAlign: 'center',
        fontSize: widthToDp(5),
        color: '#868686',
        paddingLeft: widthToDp(11.5),
        paddingRight: widthToDp(2)
    },
    icnonStyle:{
        position:'absolute',
        bottom:heightToDp(2.5),
        left:widthToDp(18)
    },
    txtView: {
        flex: 1.75,
        justifyContent:'center',
        paddingLeft:widthToDp(15)
    },
   txtHeader:{
     fontSize:widthToDp(7),
     fontWeight:'bold'
   }

});

// function friend_stack() {
//     return (
//         <friendStack.Navigator initialRouteName="Friends"
//             screenOptions={{
//                 style: {
//                     textAlign: 'center'
//                 },
//                 headerStyle: {
//                     backgroundColor: '#252623',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                     fontWeight: 'bold',
//                     alignSelf: 'center',
//                     marginRight: 50
//                 },
//             }}>
//             <friendStack.Screen name="Friends" component={Freinds}
//                 options={{ title: 'Friends' }}
//                 options={{
//                     headerShown: false
//                 }}
//             />
//             <friendStack.Screen name="friendProfile" component={FriendProfile}
//                 options={
//                     ({ route }) => (
//                         {
//                             title: route.params.userName,
//                             headerShown: false
//                         }
//                     )}
//             />
//         </friendStack.Navigator>
//     );
// }