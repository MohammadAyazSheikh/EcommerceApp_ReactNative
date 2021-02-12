import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { widthToDp, heightToDp } from '../../utils/responsiveUtils';




export default class Search extends Component {
    render() {


        return (
            <View style={styles.container} >
                <View style={styles.headerView}>
                    <TouchableOpacity style={styles.backIconView}
                        onPress={() => this.props.navigation.navigate('rootTab')}>
                        <Icon name="arrowleft" color='grey' size={26} style={styles.backIconStyle} />
                    </TouchableOpacity>
                    <View style={styles.txtInputView}>
                        <Icon name="search1" color='grey' size={26} style={styles.SerachIconStyle} />
                        <TextInput placeholder='search' style={styles.txtInput} />
                    </View>


                </View>
                <View style={styles.txtResulView} >
                    <Text style={styles.txtResult} >Found 6 result</Text>
                </View>
                <View style={styles.resultView}>

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
        justifyContent: 'center',
    },

    headerView: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    backIconView: {
        flex: 1,
        marginTop: heightToDp(5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    backIconStyle: {

    },
    txtInputView: {
        flex: 5,

    },
    txtInput: {
        width: widthToDp(70),
        height: widthToDp(13),
        marginTop: heightToDp(5),
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        textAlign: 'center',
        fontSize: widthToDp(5),
        color: '#868686',
        paddingLeft: widthToDp(11.5),
        paddingRight: widthToDp(2)
    },
    SerachIconStyle: {
        position: 'absolute',
        bottom: heightToDp(2),
        left: widthToDp(2.5)
    },
    txtResulView: {
        flex: 0.3,
    },
    txtResult: {
        alignSelf: 'center',
        marginTop: heightToDp(3),
        fontSize: widthToDp(5),
        fontWeight: 'bold'
    },
    resultView: {
        flex: 3,
        // backgroundColor: 'grey'
    }
});

