import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
// import { widthToDp, heightToDp } from '../../utils/responsiveUtils';
import Icon from 'react-native-vector-icons/Feather';
import { Dimensions, PixelRatio } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';



const routine = [
    {
        id: 1,
        "place": 'Sadar, Karachi',
        time: '12 : 00 PM'
    },
    {
        id: 2,
        place: 'Imtiaz, Nazimabad',
        time: '01 : 00 PM'
    },
    {
        id: 3,
        place: 'PAF KIET, N. Nazimabad',
        time: '02 : 00 PM'
    },
    {
        id: 4,
        place: 'Quetta Hotel,Block F',
        time: '03 : 00 PM'
    },
    {
        id: 5,
        place: 'Near Sakhi Hassan',
        time: '04 : 00 PM'
    },
    {
        id: 6,
        place: 'Yousuf St. N.Nazimabad',
        time: '05 : 00 PM'
    },
]

function RenderItem(Props) {
    return (
        <Animated.View style={
            [
                styles.SingleItem,
                {
                    transform: [
                        { scale: Props.scale || 1 }
                    ]
                }
            ]
        }>
            <View style={{...styles.strip, backgroundColor:Props.stripColor}}>
            </View>
            <View style={styles.infoView}>
                <View style={styles.placeView}>
                    <Text style={{...styles.txtPlace, color:Props.stripColor}}>{Props.place}</Text>
                </View>
                <View style={styles.timeView}>
                    <Text style={styles.txtTime}>{Props.time}</Text>
                </View>
            </View>
        </Animated.View>
    );
}

export default class Schedule extends Component {
    constructor(props) {
        super(props);
        this.scrollY = new Animated.Value(0);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <View style={styles.headerView}>
                        <Text style={styles.txtHeader}>Shcedule</Text>
                    </View>
                    <View style={styles.alertView}>
                        <View style={styles.alertItemView}>
                            <Icon name="bell" color='black' size={20} style={styles.IconStyle} />
                            <Text style={styles.txtAlert}> Hey Ayaz You May Want To Go Sadar Next Hour</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.itemsView}>

                    <Animated.FlatList
                        data={routine}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={32}
                        //  contentContainerStyle={{ paddingBottom: 100 }}

                        onScroll={
                            Animated.event(
                                [{ nativeEvent: { contentOffset: { y: this.scrollY } } }],
                                { useNativeDriver: true }
                            )
                        }

                        renderItem={({ item, index }) => {

                            const inputRange = [
                                -1,
                                0,
                                153.5 * index,
                                153.5 * (index + 1.5)
                            ]

                            const scale = this.scrollY.interpolate(
                                {
                                    inputRange,
                                    outputRange: [1, 1, 1, 0]
                                }
                            )

                            const stripColor = ['#5fcaff', '#fd8c8a', '#5a60ce']

                            return (
                                <RenderItem place={item.place} time={item.time} scale={scale} stripColor={stripColor[index % 3]} />
                            )
                        }}

                    />
                </View>

            </View>
        );
    }
}

let { width, height } = Dimensions.get('window');

const widthToDp = (number) => {

    let givenWidth = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);

}

const heightToDp = (number) => {

    let givenHeight = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2',
        // justifyContent: 'center',
    },
    topView: {
        flex: 1.5,
        // backgroundColor:'red'
    },
    headerView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    txtHeader: {
        fontSize: widthToDp(6),
        fontWeight: 'bold'
    },
    alertView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    alertItemView: {
        width: widthToDp(78),
        height: heightToDp(7),
        backgroundColor: '#d3f2ff',
        borderRadius: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtAlert: {
        fontSize: widthToDp(3),
        margin: 3
    },
    itemsView: {
        // backgroundColor: 'grey',
        flex: 4,
        alignItems: 'center'
    },
    SingleItem: {
        backgroundColor: 'white',
        width: widthToDp(85),
        height: heightToDp(20),
        elevation: 4,
        borderRadius: 10,
        flexDirection: 'row',
        overflow: 'hidden',
        margin: 10
    },
    strip: {
        flex: 1,
        backgroundColor: '#5fcaff'
    },
    infoView: {
        flex: 20,
        backgroundColor: 'white'
    },
    placeView: {
        // backgroundColor: 'green',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        padding: 4
    },
    txtPlace: {
        fontSize: widthToDp(7),
        fontWeight: 'bold',
        color: '#00abff',
        alignSelf: 'center'
    },
    timeView: {
        // backgroundColor: 'red',
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtTime: {
        fontSize: widthToDp(7),
        fontWeight: 'bold',
        color: '#888a8a'
    }

});




