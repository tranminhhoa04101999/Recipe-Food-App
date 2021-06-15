import React, { useRef } from 'react';
import { View, StyleSheet, Animated, Text, Image } from 'react-native';
import Color from '../constant/Color';
import { MEALS } from '../data/dummyData';

const Recipe = ({ props, navigation, route }) => {
    const dataMeals = MEALS.find(item => item.id === 'm1');
    const scrollY = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.screen}>
            <Animated.FlatList data={dataMeals.ingredient} keyExtractor={() => Math.random() + 1}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View style={{
                        alignItems: 'center', overflow: 'hidden'
                    }}>
                        <Animated.Image
                            source={{ uri: 'https://i.imgur.com/Gof6lqq.jpg' }}
                            style={{
                                height: 300,
                                width: '150%',
                                transform: [
                                    {
                                        translateY: scrollY.interpolate({
                                            inputRange: [-300, 0, 300],
                                            outputRange: [-150, 0, 300 * 0.75]
                                        })
                                    },
                                    {
                                        scale: scrollY.interpolate({
                                            inputRange: [-300, 0, 300],
                                            outputRange: [2, 1, 0.75]
                                        })
                                    }
                                ]
                            }}
                        />
                        {/* info */}
                        <View style={styles.info}>
                            <View style={{ width: '60%', flexDirection: 'column' }}>
                                <Text style={{
                                    fontFamily: 'OpenSans-Bold', fontSize: 20, marginBottom: 10

                                }}>Pizza mâm sôi siêu ngon</Text>
                                <Text >30 phút | Khẩu phần ăn: 1</Text>
                            </View>
                            <View style={{ width: '40%',flexDirection: 'row',paddingLeft: 20 }}>
                                <View style={{
                                    overflow: 'hidden',
                                    borderRadius: 25,
                                    width: 50,
                                    height: 50,
                                }}>
                                    <Image source={{ uri: 'https://imgur.com/G9Ag9AU.jpg' }}
                                        style={{
                                            height: 50, width: 50,
                                        }}
                                    />
                                </View>
                                <View style={{
                                    overflow: 'hidden',
                                    borderRadius: 25,
                                    width: 50,
                                    height: 50,
                                    marginLeft: -20
                                }}>
                                    <Image source={{ uri: 'https://i.imgur.com/cjKATNQ.jpg' }}
                                        style={{
                                            height: 50, width: 50,
                                        }}
                                    />
                                </View>
                                <View style={{
                                    overflow: 'hidden',
                                    borderRadius: 25,
                                    width: 50,
                                    height: 50,
                                    marginLeft: -20
                                }}>
                                    <Image source={{ uri: 'https://i.imgur.com/cjKATNQ.jpg' }}
                                        style={{
                                            height: 50, width: 50,
                                        }}
                                    />
                                </View>
                                
                            </View>
                            
                            
                        </View>

                    </View>

                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY } } }
                ], { useNativeDriver: true })}

                renderItem={data =>
                    <View style={styles.viewRender}>
                        <View>

                        </View>

                        <View style={styles.viewIcon}>
                            <Image style={styles.imageIcon} source={{ uri: 'https://imgur.com/mvvUdns.jpg' }} />
                        </View>
                        {/* description */}
                        <View style={styles.description}>
                            <Text style={{}}>
                                {data.item}
                            </Text>
                        </View>
                    </View>
                }
            >

            </Animated.FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',

    },
    viewRender: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.lightGray,
        marginHorizontal: 15,
        marginVertical: 7,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
    viewIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 5,
        backgroundColor: Color.lightGray,
    },
    imageIcon: {
        height: 40,
        width: 40,
    },
    description: {
        paddingHorizontal: 30,

    },
    headerBarIcon: {
        position: 'absolute', left: 0, right: 0, bottom: 0, top: 0,
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    info: {
        flexDirection: 'row',
        height: 130,
        width: '95%',
        paddingHorizontal: 30,
        paddingVertical: 20,
        alignItems: 'center',
        backgroundColor: Color.lightGray,
        borderRadius: 10,
        marginVertical: 10,

    },
});

export default Recipe;

