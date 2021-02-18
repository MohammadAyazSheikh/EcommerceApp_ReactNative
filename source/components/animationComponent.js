import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated, TouchableOpacity, Easing } from 'react-native';


export default class Animate extends React.Component {

    constructor(props) {
        super(props);
        this.position = new Animated.ValueXY({ x: 1, y: 1 });
        // this.fadeAnim = new Animated.Value(0);

    }




    render() {




        return (
            <View style={styles.container} >
                <Animated.View
                    style={{
                        width: 30,
                        height: 30,
                        backgroundColor: 'red',
                        // opacity:  this.fadeAnim
                        transform: [
                            { scaleX: this.position.x },
                            { scaleY: this.position.y },
                            // { skewX: toString( this.position.x )},

                        ]
                    }}
                >
                </Animated.View>
                <TouchableOpacity onPress={() => {
                    Animated.spring(
                        this.position,
                        {
                            toValue: { x: 5, y: 5 },
                            stiffness: 300,
                            useNativeDriver: true,
                            // stiffness:200
                        }
                    ).start();




                    // Animated.timing(
                    //     this.fadeAnim,
                    //     {
                    //         toValue: 1,
                    //         duration: 10000,
                    //         useNativeDriver: true
                    //     }
                    // ).start();

                }}>
                    <Text>Touch Me</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {

                    Animated.sequence([
                        Animated.sequence([
                            Animated.spring(
                                this.position,
                                {
                                    toValue: { x: 4, y: 4 },
                                    // stiffness: 300,
                                    useNativeDriver: true,
                                    // stiffness:200.
                                    duration: 200
                                }

                            ),
                            Animated.spring(
                                this.position,
                                {
                                    toValue: { x: 1, y: 1 },
                                    // stiffness: 300,
                                    useNativeDriver: true,
                                    // stiffness:200,
                                    duration: 200
                                }
                            )
                        ])
                    ]).start();
                }}>


                    <Text>Touch Me 2</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: '#5956e9',
        alignItems: 'center',
        justifyContent: 'center',
    },

});


