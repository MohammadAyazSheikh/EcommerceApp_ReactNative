import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { widthToDp, heightToDp } from '../../utils/responsiveUtils';


export default class Home extends Component {
    render() {


        return (
            <View style={styles.container}>
               <Text>Home in root tab</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#5956e9',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
});

