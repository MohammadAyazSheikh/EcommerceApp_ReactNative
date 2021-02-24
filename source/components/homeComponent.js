import React, { Component, useRef } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { widthToDp, heightToDp } from '../../utils/responsiveUtils';
import {
    watch1,
    watch2,
    watch3,
    watch4,
    watch5
} from '../images'
const { width, height } = Dimensions.get('screen');

const data = [
    {
        id: 1,
        name: 'watch1',
        desc: 'some watch',
        image: watch1,
    },
    {
        id: 2,
        name: 'watch1',
        desc: 'some watch',
        image: watch1,
    },
    {
        id: 3,
        name: 'watch1',
        desc: 'some watch',
        image: watch1,
    },
    {
        id: 4,
        name: 'watch1',
        desc: 'some watch',
        image: watch1,
    }
]
export function RenderProduct(props) {
    let Width = props.width ? props.width : widthToDp(40);
    let imgRadius = props.imageRadius ? props.imageRadius : 100;
    let sclX = props.scrollX ? props.scalleX : 1;
    let sclY = props.scrollY ? props.scalleY : 1
    return (
        <View style={{
            ...styles.container,
            transform: [
                { scaleX: sclX },
                { scaleY: sclY },
                // { scale: props.scalleX }
            ]
        }}>
            <View style={{ ...styles.prodView, width: Width }}>
                <Image style={{ ...styles.img, borderRadius: imgRadius }}
                    source={props.img} />
                <Text style={styles.txtProdName}>{props.name}</Text>
                <Text style={styles.txtProdDesc}>{props.desc}</Text>
                <Text style={styles.txtProdPrice}>$ {props.price}</Text>
            </View>
        </View>
    );
}

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.scrollX = new Animated.Value(0);
        console.log(this.scrollX)
    }
    render() {
        return (
            // <ScrollView horizontal={true}>
            //     <RenderProduct name='Apple Watch' desc='Series 6 . Red' price={359} img={watch1} />
            //     <RenderProduct name='Apple Watch' desc='Series 2 . Black' price={431} img={watch2} />
            //     <RenderProduct name='Huwaie Watch' desc='Series 4 . Grey' price={431} img={watch3} />
            //     <RenderProduct name='Samsung Watch' desc='Series 11 . Pink' price={431} img={watch4} />
            //     <RenderProduct name='Oppo Watch' desc='Series 2 . Black' price={431} img={watch5} />
            // </ScrollView>

            <Animated.FlatList
                data={data}
                keyExtractor={(item) => item.id}
                horizontal={true}
                pagingEnabled={true}
                renderItem={({ item, index }) => {
                    return (
                        <RenderProduct name={item.name} desc={item.desc} price={431} img={item.image} />
                    )
                }}

            />
            // <Animated.FlatList
            //     data={data}
            //     keyExtractor={(item) => item.id}
            //     horizontal={true}
            //     onScroll={

            //         Animated.event(
            //             [{ nativeEvent: { contentOffset: { x: this.scrollX } } }],
            //             { useNativeDriver: true }
            //         )
            //     }

            //     renderItem={({ item, index }) => {


            //         const inputRange = [
            //             -1,
            //             0,
            //             width+ index,
            //             width+ index + 2
            //         ]

            //         const scale = this.scrollX.interpolate(
            //             {
            //                 inputRange,
            //                 outputRange: [1, 1, 1, 0]
            //             }
            //         )
            //         // console.log("-------------------")
            //         // console.log(scale)
            //         return (
            //             <RenderProduct name={item.name} desc={item.desc} price={431} img={item.image}
            //                 scalleX={scale} scalleY={scale} scale={1} />
            //         )
            //     }}

            // />
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
        marginLeft: widthToDp(4),
        marginRight: widthToDp(4),
        marginBottom: widthToDp(10)
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
        backgroundColor: '#fadfe0',
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

