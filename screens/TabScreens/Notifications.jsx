import { View, Text } from "react-native"
import React from "react"
import { TabStyles } from "./TabSyles"

export const Notifications = () => {
  return (
    <View style={TabStyles.container}>
      <Text style={TabStyles.header}>Notifications</Text>
    </View>
  )
}
