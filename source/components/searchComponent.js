import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { widthToDp, heightToDp } from '../../utils/responsiveUtils';

import { products } from '../../utils/product';
import {
    watch1,
    watch2,
    watch3,
    watch4,
    watch5
} from '../images'




export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productSearch: '',
            productCount: 0,
            flag: false,
            prod: null
        }
    }


    renderProduct = ({ item }) => {
        let pName = item.name.replace(/\s+/g, '').toLocaleLowerCase();
        if (pName.includes(this.state.productSearch) && this.state.productSearch) {

            return (
                <RenderProduct name={item.name}
                    desc={item.desc}
                    price={431} img={item.image}
                    width={widthToDp(80)}
                    imageRadius={25}
                />

            )
        }
        else {
            return (<View></View>)
        }
    }
   

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
                        <TextInput placeholder='search' style={styles.txtInput}
                            onChangeText={(value) => {
                                let str = value.replace(/\s+/g, '').toLocaleLowerCase();
                                this.setState({ productSearch: str });
                            }}
                        />
                    </View>
                </View>
                {/* <View style={styles.txtResulView} >
                    <Text style={styles.txtResult} >Found {this.state.productCount} result</Text>
                </View> */}
                <View style={styles.resultView}>
                        <FlatList
                            data={products}
                            renderItem={this.renderProduct}
                            keyExtractor={item => item.id.toString()}
                        />
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
    },
    resultSrcollView: {
        flex: 1,
        // flexDirection: 'row',
        // flexWrap:'wrap'
    },
    resultItemView: {
        // flex:1
    }
});

