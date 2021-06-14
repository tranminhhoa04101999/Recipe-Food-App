import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import Color from '../constant/Color';
import TabIcon from '../components/TabIcon';
import RecipeScreen from '../screens/Recipe';

const HomeStack = createStackNavigator();
const HomeNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen name="home" component={HomeScreen}
            />
            <HomeStack.Screen name="recipe" component={RecipeScreen} options={{
            }} />
        </HomeStack.Navigator>
    )
};



const Tabs = createBottomTabNavigator();

const tabNavigator = () => {
    return (
        <Tabs.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    backgroundColor: 'white',
                    borderTopColor: 'transparent',
                    height: 80,
                }
            }}
        >
            <Tabs.Screen name="homeNavigator" component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon name="home" size={35} focused={focused} />
                }}
            />


        </Tabs.Navigator>
    );
};

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="tabs" component={tabNavigator} />
                <Stack.Screen name="login" component={LoginScreen} options={{
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};


export default MainNavigator;