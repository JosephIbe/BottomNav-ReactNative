import React from 'react'

import { View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home/Home'
import Notifications from '../screens/Notifications'
import MyWardrobe from '../screens/Home/MyWardrobe'

const Tab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()

const HomeStackScreen = () => {
    return <HomeStack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <HomeStack.Screen 
            name="HomeScreen" 
            component={Home}
        />
        <HomeStack.Screen 
            name="My Wardrobe" 
            component={MyWardrobe}
        />
    </HomeStack.Navigator>
}

const Navigation = () => {

    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  const icons = {
                    Home: 'home',
                    Notifications: 'bell-outline',
                    Wardrobe: 'account-circle',
                  };
            
                  return <View style={styles.bottomNavCircle}>
                    <MaterialCommunityIcons
                      name={icons[route.name]}
                      color={color}
                      size={37}
                    />
                </View>
                },
                tabBarStyle: {
                    backgroundColor: '#1B1464',
                    height: 65,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingBottom: 10,
                    paddingTop: 10
                },
                headerShown: false,
                tabBarLabel: () => {return null}
            })}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen 
                name="Notifications" 
                component={Notifications}
            />
            <Tab.Screen 
                name="Wardrobe" 
                component={MyWardrobe}
            />
        </Tab.Navigator>
    </NavigationContainer>
}

const styles = StyleSheet.create({
    bottomNavCircle: {
        backgroundColor: '#C7C0F4',
        width: 45,
        height: 45,
        borderRadius: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Navigation