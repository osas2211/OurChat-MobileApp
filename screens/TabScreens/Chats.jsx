import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { AuthInput, SearchInput } from "../../components/Input"
import { colors } from "../../constants"
import { TabStyles } from "./TabSyles"

export const Chats = ({ navigation }) => {
  return (
    <View style={TabStyles.container}>
      <Text style={TabStyles.header}>Messages</Text>
      <View style={{ marginTop: 15 }}>
        <SearchInput placeholder={"Search chat"} />
      </View>
    </View>
  )
}
