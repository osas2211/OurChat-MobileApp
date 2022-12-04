import { View, Text, TextInput, Image, StyleSheet } from "react-native"
import React from "react"
import { colors } from "../constants"

export const AuthInput = ({
  icon,
  placeholder,
  value,
  onChange,
  secure,
  top,
  left,
}) => {
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <Image
        source={icon}
        resizeMode="cover"
        style={{
          position: "absolute",
          top: top || 23,
          left: left || 45,
          zIndex: 1,
        }}
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        secureTextEntry={secure}
        style={{
          backgroundColor: colors.babyPowder,
          width: "85%",
          height: 50,
          padding: 10,
          borderRadius: 7,
          paddingLeft: 40,
          marginVertical: 8,
        }}
      />
    </View>
  )
}
