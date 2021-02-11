import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { widthToDp, heightToDp } from '../../utils/responsiveUtils';


export default class Splash extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.txtView}>
                    <Text style={styles.txt}>Find Your</Text>
                    <Text style={styles.txt}>Gadget</Text>
                </View>

                <View style={styles.imgView}>
                    <Image style={styles.img}
                        source={require('../../assets/images/Saly-19.png')}
                    />
                    <Image style={styles.shadowBox}
                        source={require('../../assets/images/rect.png')}
                    />
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.btn}
                       onPress={() => this.props.navigation.navigate('LogIn')}
                    >
                        <Text style={styles.txtBtn}>
                            Getting Start
                    </Text>
                    </TouchableOpacity>
                </View>

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
    txtView: {
        //marginTop: heightToDp('15%'),
        flexDirection: 'column',
        //alignItems: 'flex-start',
        justifyContent: 'center',
        //height: heightToDp('20%'),
        flex: 1.5,
        //backgroundColor: 'red',
        //marginRight:widthToDp('15%')
    },
    txt: {
        fontSize: widthToDp('13%'),
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    imgView: {
        //backgroundColor: 'green',
        //height: heightToDp('55%'),
        flex: 2
    },
    img: {
        width: widthToDp('70%'), //90
        height: widthToDp('60%'), //80

    },
    shadowBox: {
        //  backgroundColor: 'red',
        position: 'absolute',
        width: widthToDp('50%'),
        //height: widthToDp('10%'), 
        top: widthToDp('47%'),
        left: widthToDp('10%'),
        // opacity:
    },
    btnView: {
        //height: heightToDp('25%'),
        flex: 1,
        //backgroundColor:'grey',
        justifyContent: 'center'
    },
    btn: {
        width: widthToDp('70%'),
        height: heightToDp('10%'),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 10
    },
    txtBtn: {
        color: '#5956e9',
        fontSize: widthToDp('5%'),
        fontWeight: 'bold'
    }

});

