import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../constant/Color';
import images from '../constant/images';
import ButtonCustom from '../components/ButtonCustom';

const Login = ({ navigation }) => {


    return (
        <View style={styles.screen}>
            {/* HEADER */}
            <View style={styles.imgContainer}>
                <ImageBackground style={styles.imgBackground} source={{ uri: images.loginBackground }} resizeMode="cover">
                    <LinearGradient style={styles.linearGra}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={[
                            Color.rgbLogin,
                            Color.black,
                        ]}
                    >
                        <Text style={styles.text}>
                            Nấu ăn chưa bao giờ dễ đến thế
                        </Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
            {/* ------ */}
            {/* Body */}
            <View style={styles.body}>
                <Text style={styles.title}>
                    Khám phá hơn 1200 công thức nấu ăn đa dạng mọi vùng miền, nấu ăn là dễ.
                </Text>
                <View style={styles.buttonContainer}>
                        <ButtonCustom
                            color={[Color.darkSeaGreen, Color.lightSeaGreen]}
                            title="Login"
                            onPress={() => {navigation.replace('tabs') }}
                            style={{
                                marginTop: 30,
                            }}
                        />
                        <ButtonCustom
                            color={[]}
                            title="Sign Up"
                            onPress={() => { }}
                            style={{
                                marginTop: 10,
                            }}
                        />
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'black',
    },
    // header//
    imgContainer: {
        height: '65%',
    },
    imgBackground: {
        flex: 1,
        justifyContent: "flex-end",
        height: '100%',
        width: '100%'
    },
    linearGra: {
        height: 200,
        justifyContent: "flex-end",

    },
    text: {
        lineHeight: 45,
        color: 'white',
        fontFamily: 'OpenSans-Bold',
        fontSize: 40,
        width: '80%',
        marginLeft: 10,
    },
    // body
    title: {
        color: '#ccc',
        fontSize: 14,
        width: '65%',
        marginLeft: 10,
        marginTop: 10,
        lineHeight: 20,
    },
    buttonContainer: {
        marginTop: 10,
        justifyContent: 'center',
        marginHorizontal: 30
    }
});

export default Login;

