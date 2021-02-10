import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { widthToDp, heightToDp } from '../../utils/responsiveUtils';


export default class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPass: true,

        }
        this.toggleShowPass = this.toggleShowPass.bind(this);
    }

    toggleShowPass() {
        this.setState({ showPass: !this.state.showPass })
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upperBox}>
                    <View style={styles.txtUpperView}>
                        <Text style={styles.txtUpper}>Welcome</Text>
                        <Text style={styles.txtUpper}>Back</Text>
                    </View>
                    <View style={styles.circle1}>
                        <View style={styles.innerCircle1}></View>
                    </View>
                    <View style={styles.circle2}>
                        <View style={styles.innerCircle2}></View>
                    </View>
                </View>
                <View style={styles.lowerBox}>
                    <View style={styles.loginTxtView}>
                        <Text style={styles.loginTxt}>Login</Text>
                    </View>
                    <View style={styles.inputRow}>
                        <View style={styles.labelRow}>
                            <Image style={styles.lblImgIcon}
                                source={require('../../assets/icons/Message.png')} />
                            <Text style={styles.lblTxt}>Email </Text>
                        </View>
                        <View style={styles.txtBoxRow}>
                            <TextInput placeholder='Type  Your Email' style={styles.txtBox} />
                        </View>
                    </View>

                    <View style={styles.inputRow}>
                        <View style={styles.labelRow}>
                            <Image style={styles.lblImgIcon}
                                source={require('../../assets/icons/Lock.png')} />
                            <Text style={styles.lblTxt}>Password</Text>
                        </View>
                        <View style={styles.txtBoxRow}>
                            <TextInput placeholder='Type Your Password' style={styles.txtBox} secureTextEntry={this.state.showPass} />
                            <TouchableOpacity style={styles.showHideBtn}
                                onPress={this.toggleShowPass}
                            >
                                {
                                    this.state.showPass ?
                                        <Image style={styles.lblImgIcon}
                                            source={require('../../assets/icons/Hide.png')} /> :
                                        <Image style={styles.lblImgIcon}
                                            source={require('../../assets/icons/Show.png')} />
                                }
                            </TouchableOpacity>

                        </View>
                    </View>
                    <TouchableOpacity style={styles.forgetPassBtn}>
                        <Text style={styles.forgetPassTxt}>Forget Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginBtnTxt}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.createBtn}>
                        <Text style={styles.createBtnTxt}>Create account</Text>
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
    },

    upperBox: {
        flex: 1.5,
        backgroundColor: '#5956e9',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtUpper: {
        color: 'white',
        fontSize: widthToDp('11.5%'),
        fontWeight: 'bold'
    },
    circle1: {
        position: 'absolute',
        backgroundColor: '#706efd',
        width: widthToDp('10%'),
        height: widthToDp('10%'),
        borderRadius: 100,
        left: widthToDp('5%'),
        top: widthToDp('8%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerCircle1: {
        backgroundColor: '#5956e9',
        width: widthToDp('6%'),
        height: widthToDp('6%'),
        borderRadius: 100,
    },
    circle2: {
        position: 'absolute',
        backgroundColor: '#706efd',
        width: widthToDp('15%'),
        height: widthToDp('15%'),
        borderRadius: 100,
        bottom: widthToDp('5%'),
        right: widthToDp('15%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerCircle2: {
        backgroundColor: '#5956e9',
        width: widthToDp('10%'),
        height: widthToDp('10%'),
        borderRadius: 100,
    },
    lowerBox: {
        flex: 3,
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection: 'column',
    },
    loginTxt: {
        fontWeight: 'bold',
        fontSize: widthToDp('5%'),
        marginLeft: widthToDp('5%'),
        marginTop: widthToDp('5%'),
        marginBottom: widthToDp('5%')
    },
    inputRow: {
        flexDirection: 'column',
        width: widthToDp('80%'),
        alignSelf: 'center',
        marginTop: widthToDp('2%'),
        marginBottom: widthToDp('2.5%'),
    },
    labelRow: {
        flexDirection: 'row',
    },
    lblImgIcon: {
        width: widthToDp('5.5%'),
        height: widthToDp('5.5%')
    },
    lblTxt: {
        marginLeft: 5,
        fontSize: widthToDp('4%')
    },
    txtBox: {
        padding: 5,
        paddingLeft: 0,
        borderBottomWidth: 0.5,
        borderColor: 'grey'
    },
    showHideBtn: {
        position: 'absolute',
        right: widthToDp('0'),
        bottom: widthToDp('8'),
    },
    forgetPassBtn: {
        marginLeft: widthToDp('10%'),
    },
    forgetPassTxt: {
        color: '#5956e9',
        fontSize: widthToDp('3.5%'),
    },
    loginBtn:{
        alignSelf:'center',
        backgroundColor: '#5956e9',
        width:widthToDp('80'),
        height:widthToDp('15'),
        borderRadius:10,
        marginTop:heightToDp(6),
        alignItems:'center',
        justifyContent:'center'
    },
    loginBtnTxt:{
        color:'white',
        fontWeight:'bold',
        fontSize:widthToDp(5),
    },
    createBtn:{
        alignSelf:'center',
        marginTop:heightToDp(1)
    },
    createBtnTxt:{
        color: '#5956e9',
        fontSize: widthToDp('4%'),
    }
});

