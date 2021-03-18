import * as React from 'react';
import { OpaqueColorValue } from 'react-native';
import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Extrapolate } from 'react-native-reanimated';
import { SafeAreaConsumer } from 'react-native-safe-area-context';
import root_Tab from '../routes/rootTab';
const { width, height } = Dimensions.get('screen');


/*

w = 2
0,2,4,6,8

 iteration 1
i = 0, w = 0

prev   cur   next
i-1*w, i*w, i+1*w,  
 -2  ,  0   ,   2 --> input

 (0.8,  1.4 ,   0.8) -> ouput

 iteration 2
i = 1, w = 2 

i-1*w, i*w, i+1*w, 
 0  ,  2   ,   4 

*/
// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation
// https://twitter.com/mironcatalin/status/1321180191935373312

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
    {
        "key": "3571572",
        "title": "Multi-lateral intermediate moratorium",
        "description": "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
        "image": "https://image.flaticon.com/icons/png/256/3571/3571572.png"
    },
    {
        "key": "3571747",
        "title": "Automated radical data-warehouse",
        "description": "Use the optical SAS system, then you can navigate the auxiliary alarm!",
        "image": "https://image.flaticon.com/icons/png/256/3571/3571747.png"
    },
    {
        "key": "3571680",
        "title": "Inverse attitude-oriented system engine",
        "description": "The ADP array is down, compress the online sensor so we can input the HTTP panel!",
        "image": "https://image.flaticon.com/icons/png/256/3571/3571680.png"
    },
    {
        "key": "3571603",
        "title": "Monitored global data-warehouse",
        "description": "We need to program the open-source IB interface!",
        "image": "https://image.flaticon.com/icons/png/256/3571/3571603.png"
    },
    {
        "key": "1",
        "title": "Monitored global data-warehouse",
        "description": "We need to program the open-source IB interface!",
        "image": "https://image.flaticon.com/icons/png/256/3571/3571603.png"
    },
    {
        "key": "2",
        "title": "Monitored global data-warehouse",
        "description": "We need to program the open-source IB interface!",
        "image": "https://image.flaticon.com/icons/png/256/3571/3571603.png"
    },
    {
        "key": "3",
        "title": "Monitored global data-warehouse",
        "description": "We need to program the open-source IB interface!",
        "image": "https://image.flaticon.com/icons/png/256/3571/3571603.png"
    },
    {
        "key": "4",
        "title": "Monitored global data-warehouse",
        "description": "We need to program the open-source IB interface!",
        "image": "https://image.flaticon.com/icons/png/256/3571/3571603.png"
    }
]





export default function Anim() {
    const scrollX = React.useRef(new Animated.Value(0)).current;


    return (
        <View style={styles.container}>
            <StatusBar hidden />
            {/* <BackDrop scrollX={scrollX} /> */}
            {/* <Square scrollX={scrollX} /> */}
            <Animated.FlatList
                data={DATA}
                keyExtractor={(item) => item.key}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={32}
                // contentContainerStyle={{ paddingBottom: 100 }}
                // pagingEnabled
                onScroll={

                    Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollX } } }],
                        { useNativeDriver: true }
                    )


                }
                renderItem={
                    ({ item, index }) => {



                        const inputRange = [
                            -1,
                            0,
                            (140) * index,
                            (140) * (index + 1)
                        ]

                        const scale = scrollX.interpolate(
                            {
                                inputRange,
                                outputRange: [1, 1, 1, 0],
                                // extrapolate:'clamp'
                            },
                        );

                        const opac = scrollX.interpolate(
                            {
                                inputRange,
                                outputRange: [1, 1, 1, 0],
                                // extrapolate:'clamp'
                            },
                        );

                        return (

                            <Animated.View style={{
                                // width:200,
                                alignItems: 'center',
                                backgroundColor: 'red',
                                margin: 10,
                                opacity: opac,

                                transform: [
                                    {
                                        scale: scale
                                    }
                                ]
                            }}>
                                {/* <View style={{ flex: 0.7, justifyContent: 'center' }} > */}
                                <Image source={{ uri: item.image }}
                                    style={
                                        {
                                            width: 100,
                                            height: 100,
                                            // resizeMode: 'contain'
                                        }
                                    } />

                                <View style={{ flex: 0.3 }}>
                                    <Text
                                        style={{ fontWeight: 'bold', fontSize: 11, color: 'white' }}
                                    >
                                        {item.title}
                                    </Text>
                                    <Text
                                        style={{ fontWeight: '300', fontSize: 11, color: 'white' }}
                                    >{item.description}</Text>
                                </View>
                            </Animated.View>
                        );
                    }
                }
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});