import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { widthToDp, heightToDp } from '../../utils/responsiveUtils';


export default class Favorite extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image style={styles.img}
                        source={require('../../assets/images/Sally-4.png')} />
                </View>
                <View style={styles.bottomView}>
                    <Text style={styles.txtMain}>No Favorite Yet</Text>
                    <View style={styles.txtSubView}>
                        <Text style={styles.txtSub}>Hit the blue button down</Text>
                        <Text style={styles.txtSub}>below to Create order</Text>
                    </View>
                    <TouchableOpacity style={styles.btn}
                        // onPress={() => this.props.navigation.navigate('LogIn')}
                    >
                        <Text style={styles.txtBtn}>
                            Start Ordering
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
        backgroundColor: '#f2f2f2',
    },
    imageView: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: widthToDp(75),
        height: widthToDp(75)
    },
    bottomView: {
        flex: 1,
        // backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtMain: {
        fontSize: widthToDp(8),
        fontWeight: 'bold'
    },
    txtSubView: {
        alignItems: 'center'
    },
    txtSub: {
        color: '#69696b',
        fontSize: widthToDp(4)
    },
    btnView: {
        //height: heightToDp('25%'),
        flex: 1,
        //backgroundColor:'grey',
        justifyContent: 'center'
    },
    btn: {
        marginTop:heightToDp(4),
        width: widthToDp('70%'),
        height: heightToDp('10%'),
        backgroundColor: '#58c0ea',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 7
    },
    txtBtn: {
        color: 'white',
        fontSize: widthToDp('5%'),
        fontWeight: 'bold'
    }
});

