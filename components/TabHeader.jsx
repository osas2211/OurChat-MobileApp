import { View, Text } from "react-native"
import React from "react"
import { TabStyles } from "../screens/TabScreens/TabSyles"
import { colors, assets } from "../constants"

export const TabHeader = ({ tabName }) => {
  return (
    <View style={TabStyles.header}>
      <Text
        style={{
          fontSize: 28,
          fontFamily: "rubik",
          color: colors.babyPowder,
        }}
      >
        Our<Text style={{ color: colors.amber }}>Chat</Text>
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "MontRegular",
          textTransform: "capitalize",
          color: colors.babyPowder,
        }}
      >
        {" "}
        - {tabName}
      </Text>
    </View>
  )
}
