import { View, Text } from "react-native"
import React from "react"
import { TabStyles } from "./TabSyles"
import { TabHeader } from "../../components/TabHeader"

export const Notifications = ({ navigation }) => {
  return (
    <View style={TabStyles.container}>
      <TabHeader tabName={"notifications"} navigation={navigation} />
    </View>
  )
}
