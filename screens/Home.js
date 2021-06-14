import React from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
import { MEALS } from '../data/dummyData';
import CategoryCard from '../components/CategoryCard';


const Home = ({props,navigation}) => {
    return (
        <SafeAreaView style={styles.screen}>
            <FlatList data={MEALS} keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                keyboardDismissMode='on-drag'
                ListHeaderComponent={
                    <View></View>
                }
                renderItem={data =>
                    <CategoryCard
                        name={data.item.name}
                        imgUrl= {data.item.imgUrl}
                        minute={data.item.minute}
                        serving = {data.item.serving}
                        onPress= {()=>navigation.navigate('recipe')}
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
    }
});

export default Home;

