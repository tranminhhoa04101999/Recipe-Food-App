import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';
import Color from '../constant/Color';
import LinearGradient from 'react-native-linear-gradient';


const ButtonCustom = (props) => {
    if (props.color.length > 0) {
        return (
            <TouchableOpacity onPress={props.onPress} style={{ ...styles.screen, ...props.style }} >
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={props.color}
                    style={styles.button}
                >
                    <Text style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 16
                    }}>
                        {props.title}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity onPress={props.onPress} style={{ ...styles.screen, ...props.style }}>
            <View style={{...styles.button,...styles.button1}}>
                <Text style={{
                    textAlign: 'center',
                    color: 'red',
                    fontSize: 16
                }}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>)

}

const styles = StyleSheet.create({
    screen: {

    },
    title: {

    },
    button: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    button1:{
        borderWidth: 1,
        borderColor: Color.lightSeaGreen,
    }
});

export default ButtonCustom;