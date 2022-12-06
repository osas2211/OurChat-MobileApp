import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { assets, colors } from "../constants"
import { AuthInput } from "../components/Input"
import { PrimaryButton } from "../components/Button"
import { AuthWrapper } from "../components/AuthWrapper"

export const NewPassword = ({ navigation }) => {
  return (
    <AuthWrapper img={assets.authImg4}>
      <View style={{ width: "100%", marginTop: "45%" }}>
        <Text style={styles.text}>Enter New Passowrd</Text>
        <AuthInput
          icon={assets.lock}
          placeholder="New Password"
          secure={true}
        />
        <AuthInput
          icon={assets.lock}
          placeholder="Confirm New Password"
          secure={true}
        />
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 50,
        }}
      >
        <PrimaryButton
          text={"Reset Password"}
          bgColor={colors.mintGreen}
          width="85%"
        />
      </View>
    </AuthWrapper>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.babyPowder,
    textAlign: "center",
    padding: 20,
    fontSize: 16,
    fontWeight: "700",
  },
})
