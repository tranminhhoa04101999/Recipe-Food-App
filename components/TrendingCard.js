import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import Color from '../constant/Color';
import { BlurView } from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TrendingCard = (props) => {
    return (
        <TouchableOpacity style={styles.card} onPress={props.onPress}>

            <Image source={{ uri: props.imgUrl }} style={styles.img} resizeMode="cover" />
            <View style={styles.category}>
                <Text>{props.categoryId}</Text>

            </View>

            <View style={styles.blur}>
                <View style={{marginHorizontal: 5,marginVertical:5,width:'80%',justifyContent:'space-around'}}>
                    <Text style={styles.textInBlur}>{props.name}</Text>
                    <Text style={{color:'white',}} > {props.minute} | khẩu phần: {props.serving}</Text>
                </View>
                <Icon name="bookmark" size={23} color={props.isBookmark ? Color.lightSeaGreen : 'white'} />
            </View>
            {/* <BlurView blurType="dark" blurRadius={10} blurAmount={10} style={styles.bl} /> */}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 350,
        width: 250,
        marginTop: 10,
        borderRadius: 10,
        marginRight: 20,
    },
    img: {
        height: 350,
        width: 250,
        borderRadius: 10,
    },
    category: {
        position: 'absolute',
        left: 15,
        top: 20,
        backgroundColor: Color.rgbGray,
        borderRadius: 5,
        paddingHorizontal: 7,
        paddingVertical: 5
    },
    blur: {
        flex:1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        backgroundColor: Color.rgbBlack,
        borderRadius: 10,

    },
    bl: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
    },
    textInBlur: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        color: 'white',
    },
});

export default TrendingCard;