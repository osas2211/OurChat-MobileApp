import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { colors } from "../constants"
import React from "react"

export const PrimaryButton = ({ width, bgColor, text, onPress }) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: bgColor, width: width, ...styles.primaryBtn }}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export const SendButton = ({ bgColor }) => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  primaryBtn: {
    padding: 16,
    borderRadius: 12,
  },
  sendBtn: {},
  text: {
    textTransform: "uppercase",
    color: colors.babyPowder,
    textAlign: "center",
    fontWeight: "bold",
  },
})
