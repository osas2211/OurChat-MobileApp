import { View, Text } from "react-native"
import React from "react"
import { TabStyles } from "./TabSyles"
import { TabHeader } from "../../components/TabHeader"
import { assets, colors } from "../../constants"
import { IncomingRequest } from "../../components/IncomingRequest"

export const Notifications = ({ navigation }) => {
  return (
    <View style={TabStyles.container}>
      <TabHeader tabName={"notifications"} navigation={navigation} />
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <IncomingRequest name={"justin ryhes"} image={assets.profile} />
        <IncomingRequest name={"justin ryhes"} image={assets.stewie} />
        <IncomingRequest name={"justin ryhes"} image={assets.authImg} />
        <IncomingRequest name={"justin ryhes"} image={assets.authImg2} />
        <IncomingRequest name={"justin ryhes"} image={assets.authImg4} />
      </View>
    </View>
  )
}
