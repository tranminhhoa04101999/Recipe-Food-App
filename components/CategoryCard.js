import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CategoryCard = (props) => {
    return (
        <TouchableOpacity style={styles.card} onPress={props.onPress}>
            <View>
                <Image source={{ uri: props.imgUrl }} style={styles.img}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.details}>
                <Text style={styles.name} >{props.name} </Text>
                <Text style={styles.detail}>Thời gian nấu: {props.minute} | Khẩu phần:  {props.serving}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        marginHorizontal: 10,
    },
    details:{
        flexDirection: 'column',
        marginLeft: 10,
        justifyContent: 'space-around',

    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    name: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
    },
    detail:{
        fontSize: 12,
        fontFamily: 'OpenSans-Regular',
        color: 'grey',
    }
});

export default CategoryCard;