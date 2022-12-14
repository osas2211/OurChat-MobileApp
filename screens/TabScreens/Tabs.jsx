import { View, Text } from "react-native"
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Chats } from "./Chats"
import { Friends } from "./Friends"
import { Notifications } from "./Notifications"
import { Profile } from "./Profile"
import { colors } from "../../constants"

export const Tabs = ({ navigation }) => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      initialRouteName="chats"
      screenOptions={{
        tabBarActiveTintColor: colors.mintGreen,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.smokyBlack,
          width: "90%",
          alignSelf: "center",
          marginBottom: 15,
          borderRadius: 30,
          height: 55,
        },
        tabBarItemStyle: {
          justifyContent: "space-around",
          padding: 6,
        },
      }}
    >
      <Tab.Screen
        name="chats"
        component={Chats}
        options={{
          tabBarLabel: "Chats",
          tabBarShowLabel: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-text-outline"
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="friends"
        component={Friends}
        options={{
          tabBarLabel: "Friends",
          tabBarShowLabel: true,
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Notifications",
          tabBarShowLabel: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarShowLabel: true,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
