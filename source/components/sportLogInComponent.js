import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Animated, Platform, ScrollView, KeyboardAvoidingView, Keyboard } from 'react-native';
import { widthToDp, heightToDp } from '../../utils/responsiveUtils';



export default class LogInSport extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPass: true,
            rememberPass: false
        }
        this.toggleShowPass = this.toggleShowPass.bind(this);
        this.popUpIcon = new Animated.ValueXY({ x: 1, y: 1 });
        this.ballAnim = new Animated.Value(1);
        this.bigCircleAnim = new Animated.Value(0);
        this.headingleAnim = new Animated.Value(1);

        this.moveHeadinAnim = this.headingleAnim.interpolate({
            inputRange: [0.7, 1],
            outputRange: [-heightToDp(7), 0],
        });

    }

    toggleShowPass() {
        this.setState({ showPass: !this.state.showPass })

        Animated.sequence([
            Animated.sequence([
                Animated.spring(
                    this.popUpIcon,
                    {
                        toValue: { x: 1.3, y: 1.3 },
                        stiffness: 200,
                        useNativeDriver: true,
                        duration: 100
                    }

                ),
                Animated.spring(
                    this.popUpIcon,
                    {
                        toValue: { x: 1, y: 1 },
                        useNativeDriver: true,
                        duration: 100
                    }
                )
            ])
        ]).start();
    }


    componentDidMount() {

        let show = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
        let hide = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';
        this.keyboardWillShowSub = Keyboard.addListener(show, this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener(hide, this.keyboardWillHide);
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }



    keyboardWillShow = (event) => {

        Animated.parallel([
            Animated.timing(
                this.ballAnim,
                {
                    toValue: 0,
                    useNativeDriver: true,
                    duration: 300
                }
            ),
            Animated.timing(
                this.bigCircleAnim,
                {
                    toValue: -heightToDp(10),
                    useNativeDriver: true,
                    duration: 300
                }
            ),
            Animated.timing(
                this.headingleAnim,
                {
                    toValue: 0.7,
                    useNativeDriver: true,
                    duration: 300
                }
            )
        ]).start();
    };

    keyboardWillHide = (event) => {

        Animated.parallel([
            Animated.timing(
                this.ballAnim,
                {
                    toValue: 1,
                    useNativeDriver: true,
                    duration: 300
                }
            ),
            Animated.timing(
                this.bigCircleAnim,
                {
                    toValue: 0,
                    useNativeDriver: true,
                    duration: 300
                }
            ),
            Animated.timing(
                this.headingleAnim,
                {
                    toValue: 1,
                    useNativeDriver: true,
                    duration: 300
                }
            )
        ]).start();
    };

    render() {
        return (

            <View style={styles.container}

            >
                <Animated.View style={{ ...styles.topCircle, transform: [{ translateY: this.bigCircleAnim }] }} />
                <View style={styles.smallCircle} />
                <Animated.Image style={{ ...styles.imgBall, transform: [{ scale: this.ballAnim }] }} source={require('../../assets/images/football0.png')} />
                <Animated.View style={{ ...styles.header, transform: [{ scale: this.headingleAnim }, { translateY: this.moveHeadinAnim }] }}>
                    <Text style={styles.txtHeading}> <Animated.Image  source={require('../../assets/images/zero.png')}/> IMINN</Text>
                    <Text style={styles.txtdesc}>Welcome back to IMINN!</Text>
                    <Text style={styles.txtSubHeading}>Let's Login</Text>
                </Animated.View>
                <View style={styles.bottom}>
                    <ScrollView>
                        <View style={styles.inputView}>
                            <TextInput placeholder="Enter you email" style={styles.inputStyle} />
                        </View>
                        <View style={{ ...styles.inputView, marginBottom: 0 }}>
                            <TouchableOpacity style={styles.showHideBtn}
                                onPress={this.toggleShowPass}
                            >

                                <Animated.Image style={{
                                    ...styles.hideImgIcon, transform: [
                                        { scaleX: this.popUpIcon.x },
                                        { scaleY: this.popUpIcon.y }
                                    ]
                                }}
                                    source={require('../../assets/images/hideshow.png')} />
                            </TouchableOpacity>
                            <TextInput placeholder="Enter you password" style={styles.inputStyle} secureTextEntry={this.state.showPass} />
                        </View>
                        <View style={styles.savePassRow}>
                            <TouchableOpacity style={this.state.rememberPass ?
                                {
                                    ...styles.btnRemember,
                                    backgroundColor: 'white',
                                    borderStyle: 'solid',
                                    borderColor: "grey",
                                    borderWidth: 1.5
                                }
                                :
                                styles.btnRemember}
                                onPress={() => { this.setState({ rememberPass: !this.state.rememberPass }) }}
                            >
                                <Text style={styles.txtBtnRemember} >✓</Text>
                            </TouchableOpacity>
                            <Text style={styles.txtRemberCred}>Remember my credentials</Text>
                        </View>
                        <View style={styles.btnLoginView}>
                            <TouchableOpacity style={styles.btnLogin}><Text style={styles.txtLogin}>LOGIN</Text></TouchableOpacity>
                        </View>
                        <View style={styles.signupView}>
                            <Text style={{ fontSize: widthToDp(3) }}>Don't have an account yet?</Text>
                            <TouchableOpacity style={styles.btnSignin}><Text style={{ color: "#3c8dd9", fontSize: widthToDp(3) }}>Signin</Text></TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        // alignContent:'center'
    },

    topCircle: {
        backgroundColor: '#408ad0',
        width: widthToDp(165),
        height: widthToDp(165),
        borderRadius: widthToDp(165) / 2,
        position: 'absolute',
        top: -(heightToDp(150) / 2.2),
        right: widthToDp(-30),
        // left:widthToDp(0)
    },
    imgBall: {
        width: widthToDp(70),
        height: widthToDp(70),
        borderRadius: widthToDp(40) / 2,
        left: widthToDp(25),
        top: heightToDp(20),
        position: 'absolute',
        // ...Platform.select({
        //     ios: {
        //         shadowColor: '#000',
        //         shadowOffset: { width: 0, height: 2 },
        //         shadowOpacity: 0.8,
        //         shadowRadius: 2,
        //     },
        //     android: {
        //         elevation: 50,
        //     },
        // }),
    },
    smallCircle: {
        backgroundColor: '#dcebf7',
        width: widthToDp(20),
        height: widthToDp(20),
        borderRadius: widthToDp(20) / 2,
        position: 'absolute',
        top: (heightToDp(45)),
        right: widthToDp(45),
        // left:widthToDp(0)
    },
    header: {
        flex: 2,
        justifyContent: "flex-start",
        alignItems: 'center'
    },
    txtHeading: {
        marginTop: 45,
        color: 'white',
        fontWeight: 'bold',
        fontSize: widthToDp(10),

    },
    txtdesc: {
        color: 'white',
        fontSize: widthToDp(4.5)
    },
    txtSubHeading: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: widthToDp(6)
    },
    bottom: {
        flex: 1.4,
        // backgroundColor: 'red',
        justifyContent: 'center',
        paddingTop: heightToDp(6),

    },
    inputView: {
        paddingLeft: widthToDp(5),
        paddingRight: widthToDp(5),
        marginBottom: heightToDp(7.5)
    },
    inputStyle: {
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: widthToDp(4.5),
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    savePassRow: {
        // backgroundColor: 'grey',
        height: heightToDp(7.5),
        justifyContent: "flex-start",
        alignItems: 'center',
        flexDirection: 'row'
    },
    btnRemember: {
        margin: widthToDp(5),
        backgroundColor: "#3c8dd9",
        width: widthToDp(6),
        height: widthToDp(6),
        borderRadius: widthToDp(6) / 2,
        justifyContent: "center",
        alignItems: 'center'
    },
    txtBtnRemember: {
        color: 'white',
        fontSize: widthToDp(4),

    },
    txtRemberCred: {
        fontSize: widthToDp(3)
    },
    signupView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: heightToDp(5)
    },
    btnSignin: {
        marginLeft: widthToDp(3),
        borderBottomWidth: 1.5,
        borderBottomColor: "#3c8dd9"
    },
    btnLoginView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: heightToDp(3),
        marginBottom: heightToDp(5)
    },
    btnLogin: {
        width: widthToDp(50),
        height: widthToDp(14),
        backgroundColor: "#3c8dd9",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: widthToDp(50) / 2,
    },
    txtLogin: {
        color: "white",
        fontWeight: 'bold',
        fontSize: widthToDp(5)
    },
    showHideBtn: {

        alignSelf: 'flex-end'
    },
    hideImgIcon: {
        width: widthToDp(5),
        height: widthToDp(3),
        // transform:[{scale:5}]
    }
});

