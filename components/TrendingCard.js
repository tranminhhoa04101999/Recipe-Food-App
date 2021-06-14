import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Color from '../constant/Color';
import {BlurView} from '@react-native-community/blur';

const TrendingCard = (props) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => { }}>
            <ImageBackground source={{ uri: props.imgUrl }} style={styles.img} resizeMode="cover" >
                <View style={styles.category}>
                    <Text>{props.categoryId}</Text>

                </View>
                <BlurView blurType="dark" style={styles.blur} blurAmount={100} blurRadius={10}>
                </BlurView>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 350,
        width: 250,
        marginTop: 10,
        borderRadius: 10,
        marginRight: 20,
        overflow: 'hidden'
    },
    img: {
        height: 350,
        width: 250,
        borderRadius: 10,
    },
    category:{
        position: 'absolute',
        left: 15,
        top: 20,
        backgroundColor: Color.rgbGray,
        borderRadius: 5,
        paddingHorizontal: 7,
        paddingVertical: 5 
    },
    blur:{
        position: 'absolute',
        left: 10,
        right: 10,
        bottom: 10,
    },
});

export default TrendingCard;