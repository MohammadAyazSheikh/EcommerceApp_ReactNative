import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { widthToDp, heightToDp } from '../../utils/responsiveUtils';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function RenderInfo(props) {
    return (
        <View style={styles.bottomView}>
            <View style={styles.txtBottomView}>
                <Text style={styles.txtBottom} >{props.text}</Text>
            </View>
            <TouchableOpacity style={styles.bottomIconView}>
                <Icon name="arrow-right" color='black' size={20} style={styles.IconStyle} />
            </TouchableOpacity>
        </View>
    )
}

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }
    // <Icon name="home" color={color} size={26} />
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.txtHeaderView}>
                    <Text style={styles.txtHeader}>My Profile</Text>
                </View>
                <View style={styles.mainView}>
                    <ScrollView>
                        <View style={styles.profileInfoView}>
                            <Image style={styles.profileImage}
                                source={require('../../assets/images/profile2.png')} />
                            <Text style={styles.txtName}>Shahid Afridi</Text>
                            <View style={styles.IconView}>
                                <Icon name="location-pin" color='black' size={20} style={styles.IconStyle} />
                                <Text style={styles.txtAdress}>Address: 43 Oxford Road</Text>
                            </View>
                            <Text style={styles.txtAdress}>M13 4GR</Text>
                            <Text style={styles.txtAdress}>Manchester, UK</Text>
                        </View>
                        <RenderInfo text = 'Edid Profile'/>
                        <RenderInfo text = 'Shoping Address'/>
                        <RenderInfo text = 'Order History'/>
                        <RenderInfo text = 'Notifications'/>

                    </ScrollView>
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
    txtHeaderView: {
        flex: 1,
        justifyContent: 'center',

    },
    txtHeader: {
        paddingTop: heightToDp(4),
        paddingLeft: widthToDp(5),
        fontSize: widthToDp(6),
        fontWeight: 'bold'
    },
    mainView: {
        flex: 5
    },
    profileInfoView: {
        backgroundColor: 'white',
        elevation: 3,
        alignSelf: 'center',
        width: widthToDp(80),
        height: heightToDp(30),
        borderRadius: 20,
        marginTop: heightToDp(8),
        marginBottom: heightToDp(2),
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileImage: {
        width: widthToDp(26),
        height: widthToDp(26),
        borderRadius: 100,
        position: 'absolute',
        bottom: heightToDp(19),
        left: widthToDp(27),
        // borderColor:'grey',
        // borderWidth:1
    },
    txtName: {
        fontSize: widthToDp(4.5),
        fontWeight: 'bold',
        marginTop: widthToDp(15)
    },
    IconView: {
        flexDirection: 'row'
    },
    IconStyle: {
        paddingRight: 10
    },
    bottomView: {
        marginTop: heightToDp(2),
        marginBottom: heightToDp(2),
        backgroundColor: 'white',
        elevation: 3,
        alignSelf: 'center',
        width: widthToDp(80),
        height: heightToDp(10),
        borderRadius: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtBottomView: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    bottomIconView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtBottom: {
        fontSize: widthToDp(4),
        paddingLeft: widthToDp(5)
    }

});

