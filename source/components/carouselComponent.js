import * as React from 'react';
import { OpaqueColorValue } from 'react-native';
import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
  }
]


const Indicator = ({ scrollX }) => {

  return (
    <View style={
      {
        position: 'absolute',
        bottom: 100,
        flexDirection: 'row'
      }
    }>
      {
        DATA.map((_, i) => {

          const inputRange = [(i - 1) * width, i * width, (i + 1) * width]

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1.4, 0.8],
            extrapolate: 'clamp'
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 0.9, 0.6],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
              key={i}
              style={
                {
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  backgroundColor: '#335',
                  margin: 10,
                  transform: [
                    {
                      scale: scale
                    }
                  ],
                  opacity: opacity
                }
              }
            >

            </Animated.View>)
        })
      }
    </View>
  );
}

const BackDrop = ({ scrollX }) => {
  // console.log(`ScrollX Value = ${JSON.stringify(scrollX)}`)
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i*width ),
    outputRange: bgs.map((bg) => bg),
  });
  return (
    <Animated.View
      style={
        [
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: backgroundColor
          }
        ]
      }
    >


    </Animated.View>
  );
}

const Square = ({ scrollX }) => {

  // going from zero to one
  const YOLO = Animated.modulo(
    Animated.divide(
      Animated.modulo(scrollX, width), //width se bahir na jae
      new Animated.Value(width)
    ),
    1);

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['45deg', '90deg', '180deg']
  })

  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0]
  })
  return (
    <Animated.View
      style={
        {
          width: 250,// height,
          height:250,// height,
          backgroundColor: '#fff',
          borderRadius: 86,
          position: 'absolute',
          top: 60 ,//-height * 0.6,
          left:70, //-height * 0.3,
          transform: [
            { rotate },
            // { translateX }
          ]
        }
      }>

    </Animated.View>)
}
export default function Carousel() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <BackDrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        horizontal
        scrollEventThrottle={32}
        contentContainerStyle={{ paddingBottom: 100 }}
        pagingEnabled
        onScroll={
          Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )
        }
        renderItem={
          ({ item }) => {
            return (
              <View style={{ width, alignItems: 'center', padding: 20 }}>
                <View style={{ flex: 0.7, justifyContent: 'center' }} >
                  <Image source={{ uri: item.image }}
                    style={
                      {
                        width: width / 2,
                        height: height / 2,
                        resizeMode: 'contain'
                      }
                    } />
                </View>
                <View style={{ flex: 0.3 }}>
                  <Text
                    style={{ fontWeight: 'bold', fontSize: 28, marginBottom: 10, color: 'white' }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{ fontWeight: '300', fontSize: 19, color: 'white' }}
                  >{item.description}</Text>
                </View>
              </View>
            );
          }
        }
      />
      <Indicator scrollX={scrollX} />
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