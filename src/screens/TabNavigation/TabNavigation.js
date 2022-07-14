import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../HomeScreen/HomeScreen'
import MySetsScreen from '../MySetsScreen/MySetsScreen'
import SearchScreen from '../SearchScreen/SearchScreen'
import { colors } from '../../config/theme'
import { images } from '../../config/images'

const Tab = createBottomTabNavigator()
const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let icon

                switch (route.name) {
                    case "Home":
                        icon = focused ? images.homeFilled : images.home
                        break
                    case "My sets":
                        icon = images.list
                        break
                    case "Search":
                        icon = images.search
                        break
                }

                return <Image source={icon}
                    style={{
                        width: size,
                        height: size,
                        tintColor: focused ? colors.BLUE : "gray"
                    }} />
            },
            tabBarActiveTintColor: colors.BLUE,
            tabBarInactiveTintColor: "gray",

        })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="My sets" component={MySetsScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />

        </Tab.Navigator>
    )
}

export default TabNavigation