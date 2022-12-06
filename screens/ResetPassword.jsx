import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { AuthWrapper } from "../components/AuthWrapper"
import { AuthInput } from "../components/Input"
import { assets, colors } from "../constants"
import { PrimaryButton } from "../components/Button"

export const ResetPassword = ({ navigation }) => {
  return (
    <AuthWrapper img={assets.authImg3}>
      <View
        style={{
          width: "100%",
          marginTop: "40%",
          marginBottom: "30%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: 24,
            color: colors.babyPowder,
          }}
        >
          Reset Password
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "300",
            color: colors.babyPowder,
            paddingHorizontal: 6,
            marginBottom: 25,
            marginTop: 10,
          }}
        >
          Please Enter the e-mail address associated to your account. An otp
          will be sent to this address.
        </Text>
        <AuthInput placeholder={"Email"} icon={assets.mail} />
        <View style={{ marginTop: 10, width: "85%" }}>
          <PrimaryButton
            text={"Continue"}
            bgColor={colors.mintGreen}
            width={"100%"}
            onPress={() => navigation.navigate("reset-password-otp")}
          />
        </View>
        <TouchableOpacity
          style={{ marginTop: 15, marginBottom: 35 }}
          onPress={() => navigation.navigate("login")}
        >
          <Text
            style={{
              color: colors.amber,
            }}
          >
            Back to Log In
          </Text>
        </TouchableOpacity>
      </View>
    </AuthWrapper>
  )
}
