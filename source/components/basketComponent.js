import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { widthToDp, heightToDp } from '../../utils/responsiveUtils';
import Icon from 'react-native-vector-icons/Feather';

const iPad = require('../../assets/images/ipad.jpg');
const airPods = require('../../assets/images/airpods.jpg');

class RenderItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 1
        }

        this.incrementQty = this.incrementQty.bind(this);
        this.decrementQty = this.decrementQty.bind(this);
    }


    incrementQty() {
        this.setState({ qty: this.state.qty + 1 })
    }
    decrementQty() {
        this.setState({ qty: this.state.qty - 1 })
    }

    render() {
        return (
            <View style={styles.singleItemView}>
                <View style={styles.imgView}>
                    <Image style={styles.ImageStyle}
                        source={this.props.image} />
                </View>
                <View style={styles.itemInfoView} >
                    <View style={styles.nameView}>
                        <Text style={styles.txtName}>{this.props.name}</Text>
                    </View>
                    <View style={styles.priceView}>
                        <Text style={styles.txtPrice}>$ {this.props.price}</Text>
                    </View>
                    <View style={styles.qtyView}>
                        <Text>Quantity</Text>
                        <TouchableOpacity style={styles.btn}
                            onPress={this.decrementQty}
                        >
                            <Icon name="minus" color='white' size={20} style={styles.IconStyle} />
                        </TouchableOpacity>
                        <Text>{this.state.qty}</Text>
                        <TouchableOpacity style={styles.btn}
                            onPress={this.incrementQty}
                        >
                            <Icon name="plus" color='white' size={20} style={styles.IconStyle} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default class Basket extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <View style={styles.headerView}>
                        <Text style={styles.txtHeader}>Basket</Text>
                    </View>
                    <View style={styles.alertView}>
                        <View style={styles.alertItemView}>
                            <Icon name="bell" color='black' size={20} style={styles.IconStyle} />
                            <Text style={styles.txtAlert}>Delivery for FREE until the end of the month</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.itemsView}>
                    {/* <ScrollView> */}
                    <RenderItems name='2020 Apple iPad Air 10.9' price={579}
                        image={iPad}
                    />
                    <RenderItems name='APPLE AirPods Pro - White' price={357}
                        image={airPods}
                    />

                    {/* </ScrollView> */}

                </View>
                <View style={styles.bottomView}>
                    <View style={styles.TotalPriceView}>
                        <View style={styles.TotalPriceInnerView}>
                            <Text style={styles.txtTotal}>Total</Text>
                        </View>
                        <View style={styles.TotalPriceInnerView}>
                            <Text style={styles.txtTotalPrice}>$ 954</Text>
                        </View>

                    </View>
                    <View style={styles.btnCheckoutView}>
                        <TouchableOpacity style={styles.btnCheckout}>
                            <Text style={styles.txtBtnCheckout} >
                                Checkout
                            </Text>
                        </TouchableOpacity>
                    </View>
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
        // justifyContent: 'center',
    },
    topView: {
        flex: 1.5,
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
        width: widthToDp(68),
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
    singleItemView: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        width: widthToDp(80),
        height: heightToDp(25),
        flexDirection: 'row',
        elevation: 5
    },
    imgView: {
        flex: 1.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageStyle: {
        width: widthToDp(25),
        height: widthToDp(30),
    },

    itemInfoView: {
        flex: 2
    },
    nameView: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    txtName: {
        fontSize: widthToDp(4),
        fontWeight: 'bold',
        marginLeft: widthToDp(2)
    },
    priceView: {
        flex: 1,
        justifyContent: 'center'
    },
    txtPrice: {
        fontSize: widthToDp(4),
        fontWeight: 'bold',
        marginLeft: widthToDp(2),
        color: '#5956e9'
    },
    qtyView: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingLeft: widthToDp(2),
    },
    btn: {
        backgroundColor: '#7dccec',
        width: widthToDp(5),
        height: widthToDp(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginLeft: widthToDp(5),
        marginRight: widthToDp(5)
    },
    bottomView: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    TotalPriceView: {
        flexDirection: 'row',
        flex: 1.5,
        alignItems: 'center'
    },
    TotalPriceInnerView: {
        flex: 1
    },
    txtTotal: {
        alignSelf: 'flex-start'
    },
    txtTotalPrice: {
        alignSelf: 'flex-end',
        fontSize: widthToDp(4),
        // fontWeight: 'bold',
        marginRight: widthToDp(4),
        color: '#5956e9',
       
    },
    txtTotal: {
        fontSize: widthToDp(4),
        marginLeft:widthToDp(4)
        // fontWeight: 'bold',
    },
    btnCheckoutView: {
        flex: 3,
        backgroundColor: 'green',
        justifyContent:'center',
        alignItems:'center',
        
    },
    txtBtnCheckout:{
        color:'white'
    },
    btnCheckoutView:{
        width:widthToDp(80),
        height:heightToDp(8),
        backgroundColor:'#5956e9',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:heightToDp(1),
        borderRadius:10
    }
});

