import { View, Text } from "react-native"
import React from "react"
import { TabStyles } from "./TabSyles"

export const Profile = () => {
  return (
    <View style={TabStyles.container}>
      <Text style={TabStyles.header}>Profile</Text>
    </View>
  )
}
