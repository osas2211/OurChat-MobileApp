import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native"
import { colors } from "../constants"
import React from "react"

const Wrapper = ({ child }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        style="auto"
        backgroundColor={colors.babyPowder}
        animated={true}
      />
      {child}
    </SafeAreaView>
  )
}

export default Wrapper
