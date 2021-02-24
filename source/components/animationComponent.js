import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated, TouchableOpacity, Easing } from 'react-native';


export default class Animate extends React.Component {

    constructor(props) {
        super(props);
        this.position = new Animated.ValueXY({ x: 1, y: 1 });
        this.fadeAnim = new Animated.Value(1);

        this.intpScale = this.fadeAnim.interpolate({
            inputRange: [0.1, 0.5, 1],
            outputRange: [1, 2, 1],
        });

        this.intpRotate = this.fadeAnim.interpolate({
            inputRange: [1,50],
            outputRange: ['0deg', '360deg'],
            // extrapolate:'clamp'
        });

        this.intpMove = this.fadeAnim.interpolate({
            inputRange: [1,110],
            outputRange: [1, 100],
            // extrapolate:'clamp'
        });

    }




    render() {

        return (
            <View style={styles.container} >
                <Animated.View
                    style={{
                        width: 30,
                        height: 30,
                        backgroundColor: 'red',
                        transform: [
                            // { scaleX: this.intpScale },
                            // { scaleY: this.position.y },
                            { rotate: this.intpRotate },
                            { translateY: this.intpMove },
                        ]
                    }}
                >
                </Animated.View>
                <TouchableOpacity onPress={() => {
                    Animated.timing(
                        this.fadeAnim,
                        {
                            // toValue: { x: 5, y: 5 },
                            toValue: 360,
                            // stiffness: 300,
                            useNativeDriver: true,
                            duration: 5000
                        }
                    ).start();


                }}>
                    <Text>Touch Me</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {

                    Animated.sequence([
                        Animated.sequence([
                            Animated.spring(
                                this.position,
                                {
                                    toValue: { x: 3, y: 3 },
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
                            ),
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


