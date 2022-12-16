import { View, Text, TextInput, Image, StyleSheet } from "react-native"
import React from "react"
import { colors } from "../constants"
import AntDesign from "react-native-vector-icons/AntDesign"

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

export const OtpInput = React.forwardRef(({ onChange, value }, ref) => {
  return (
    <View>
      <TextInput
        style={{
          width: 65,
          height: 65,
          backgroundColor: colors.babyPowder,
          fontSize: 24,
          textAlign: "center",
          borderColor: "#cad4c8",
          borderWidth: 1,
        }}
        keyboardType="numeric"
        maxLength={1}
        ref={ref}
        onChangeText={onChange}
        value={`${value}`}
      />
    </View>
  )
})

export const SearchInput = ({ value, onChange, onPress, placeholder }) => {
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <AntDesign
        name="search1"
        color={"grey"}
        size={27}
        style={{ position: "absolute", top: 15, right: 35, zIndex: 1 }}
        onPress={onPress}
      />
      <TextInput
        style={{
          backgroundColor: "#f1f8f3",
          width: "90%",
          margin: 5,
          height: 50,
          borderRadius: 15,
          paddingHorizontal: 20,
          paddingRight: 55,
          color: colors.smokyBlack,
          fontFamily: "MontRegular",
          elevation: 3,
        }}
        placeholder={placeholder}
      />
    </View>
  )
}

export const MsgInput = ({ value, onChange, onPress, placeholder, width }) => {
  return (
    <View style={{ width, alignItems: "center" }}>
      <TextInput
        style={{
          backgroundColor: "#f1f8f3",
          width: "90%",
          margin: 5,
          height: 50,
          borderRadius: 15,
          paddingHorizontal: 20,
          paddingRight: 55,
          paddingVertical: 5,
          color: colors.smokyBlack,
          fontFamily: "MontRegular",
        }}
        placeholder={placeholder}
        multiline={true}
      />
    </View>
  )
}
