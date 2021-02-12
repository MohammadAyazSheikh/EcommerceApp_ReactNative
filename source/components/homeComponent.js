import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { widthToDp, heightToDp } from '../../utils/responsiveUtils';


function RenderFucntion() {
    return (
        <View style = {styles.container}>
        <View style={styles.prodView}>
            <Image style={styles.img}
                source={require('../../assets/images/watch1.png')} />
            <Text style={styles.txtProdName}>Apple Watch</Text>
            <Text style={styles.txtProdDesc}>Series 6 . Red</Text>
            <Text style={styles.txtProdPrice}>$ 359</Text>
        </View>
        </View>
    );
}

export default class Home extends Component {
    render() {


        return (
            <ScrollView  horizontal = {true}> 
                    <RenderFucntion />
                    <RenderFucntion />
                    <RenderFucntion />
                    <RenderFucntion />
                    <RenderFucntion />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:widthToDp(4),
        marginRight:widthToDp(4),
        marginBottom:widthToDp(10)
    },
    prodView: {
        backgroundColor: 'white',
        width: widthToDp(40),
        height: heightToDp(33),
        borderRadius: 20,
        marginTop: heightToDp(10),
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    img: {
        borderRadius: 100,
        width: widthToDp(33),
        height: widthToDp(33),
        alignSelf: 'center',
        position: 'absolute',
        top: heightToDp(-5)
    },
    txtProdName: {
        fontSize: widthToDp(5),
        fontWeight: 'bold'
    },
    txtProdDesc: {
        padding: heightToDp(0.5),
        color: '#929292'
    },
    txtProdPrice: {
        marginBottom: heightToDp(2),
        color: '#5956e9',
        fontWeight: 'bold'
    }
});

