import { View, Text } from "react-native"
import React from "react"
import { colors } from "../constants"

const MessageBox = ({ alignSelf, color, bgColor, text, time }) => {
  return (
    <View
      style={{
        alignSelf,
        margin: 5,
      }}
    >
      <View
        style={{
          backgroundColor: bgColor,
          paddingHorizontal: 18,
          paddingVertical: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ color, fontFamily: "MontRegular" }}>{text}</Text>
      </View>
      <Text
        style={{
          color: colors.smokyBlack,
          fontFamily: "MontLight",
          fontSize: 12,
          alignSelf,
          marginTop: 3,
        }}
      >
        {time}
      </Text>
    </View>
  )
}

export default MessageBox
