import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated, TouchableOpacity, Easing } from 'react-native';


export default class Animate extends React.Component {

    constructor(props) {
        super(props);
        this.position = new Animated.ValueXY({ x: 1, y: 1 });
        this.fadeAnim = new Animated.Value(1);

        this.intpColor = this.fadeAnim.interpolate({
            inputRange: [1, 2, 3],
            outputRange: ['red', 'yellow', 'green'],
        });

        this.intpRotate = this.fadeAnim.interpolate({
            inputRange: [1, 3],
            outputRange: ['0deg', '180deg'],
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
                        backgroundColor: 'red',//this.intpColor,
                        transform: [
                            // { scaleX: this.intpScale },
                            // { scaleY: this.position.y },
                            // { perspective: 200 },
                            // { rotate: this.intpRotate },
                            { rotateY: this.intpRotate },
                            // {scale:this.fadeAnim}
                        ]
                    }}
                >
                </Animated.View>
                <TouchableOpacity onPress={() => {
                    Animated.timing(
                        this.fadeAnim,
                        {
                            // toValue: { x: 5, y: 5 },
                            toValue: 3,
                            // stiffness: 300,
                            useNativeDriver: true,
                            duration: 1000
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


