import { View, Text } from "react-native"
import React from "react"
import { AuthInput } from "../../components/Input"

export const Chats = () => {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <Text
        style={{
          marginTop: 50,
          marginLeft: 20,
          fontSize: 25,
          fontWeight: "700",
        }}
      >
        Messages
      </Text>
    </View>
  )
}
