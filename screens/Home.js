import React from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { MEALS } from '../data/dummyData';
import CategoryCard from '../components/CategoryCard';
import Color from '../constant/Color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TrendingCard from '../components/TrendingCard';
import {BlurView} from '@react-native-community/blur';



const Home = ({ props, navigation }) => {
    return (
        <SafeAreaView style={styles.screen}>
            <FlatList data={MEALS} keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                keyboardDismissMode='on-drag'
                ListHeaderComponent={
                    <View>
                        {/* HEADER */}
                        <View style={styles.headerContainerTitle}>
                            <View style={{}}>
                                <Text style={styles.headerText}>Hello Minh Hòa</Text>
                                <Text style={styles.headerText1}>Hôm nay bạn muốn nấu gì ??</Text>
                            </View>
                            <TouchableOpacity style={styles.profileContainer} >
                                <Image style={styles.imgProfile} source={{ uri: 'https://imgur.com/cjKATNQ.jpg' }} />
                            </TouchableOpacity>
                        </View>
                        {/* SearchBar */}
                        <View style={styles.searchBar}>
                            <Icon name="search" size={23} />
                            <TextInput style={styles.textInput} placeholder="Search Recipe" />
                        </View>
                        {/* See Recipe */}
                        <View style={styles.seeViewRecipe}>
                            <Image style={styles.imgSee} source={{ uri: 'https://imgur.com/h4I1ri0.jpg' }} />
                            <View style={styles.textSee}>
                                <Text style={{}}>Bạn có 12 công thức nấu ăn mới bạn đã thử chưa !!</Text>
                                <TouchableOpacity style={{ marginTop: 10 }}>
                                    <Text style={{
                                        color: Color.lightSeaGreen,
                                        textDecorationColor: Color.lightSeaGreen,
                                        textDecorationLine: 'underline',
                                        fontFamily: 'OpenSans-Bold'

                                    }} >Xem ngay.</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* trending recipe */}
                        <View style={styles.trendingRecipe}>

                            <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 18, }}>Trending Recipe</Text>
                            <FlatList data={MEALS} keyExtractor={item => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={data => {
                                    return (
                                        <TrendingCard imgUrl= {data.item.imgUrl} categoryId={data.item.categoryId}  />
                                    )
                                }}
                            >
                            </FlatList>

                        </View>
                    </View>
                }
                renderItem={data =>
                    <CategoryCard
                        name={data.item.name}
                        imgUrl={data.item.imgUrl}
                        minute={data.item.minute}
                        serving={data.item.serving}
                        onPress={() => navigation.navigate('recipe')}
                    />
                }
                ListFooterComponent={
                    <View style={styles.footer}></View>
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',

    },
    footer: {
        marginBottom: 100
    },
    name: {
        color: 'black'
    },
    //#region HEADER

    headerContainerTitle: {
        marginLeft: 10,
        marginVertical: 5,
        flexDirection: 'row',
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        color: Color.lightSeaGreen,

    },
    headerText1: {
        color: 'grey'
    },
    profileContainer: {
        height: 50,
        width: 50,
        marginRight: 10,
        borderRadius: 25,
        overflow: 'hidden'
    },
    imgProfile: {
        height: '100%',
        width: '100%',
    },
    //#endregion

    //#region SearchBar
    searchBar: {
        backgroundColor: Color.lightGray,
        marginHorizontal: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,

    },
    textInput: {

    },
    //#endregion
    //#region SeeRecipe
    seeViewRecipe: {
        backgroundColor: '#EBFFFF',
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgSee: {
        height: 70,
        width: '25%',
        borderRadius: 10
    },
    textSee: {
        width: '75%',
        marginHorizontal: 7,
    },
    //#endregion
    //#region trending recipe
    trendingRecipe: {
        marginVertical: 5,
        marginHorizontal: 10,
    },
    //#endregion


});

export default Home;

