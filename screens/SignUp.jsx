import { View, Text, StyleSheet, ScrollView } from "react-native"
import React from "react"
import { assets, colors } from "../constants"
import { AuthInput } from "../components/Input"
import { PrimaryButton } from "../components/Button"
import { AuthWrapper } from "../components/AuthWrapper"

export const SignUp = ({ navigation }) => {
  return (
    <AuthWrapper img={assets.authImg2}>
      <View style={{ width: "100%", marginTop: "45%" }}>
        <AuthInput icon={assets.mail} placeholder="Email" />
        <AuthInput
          icon={assets.user}
          placeholder="Username"
          top={26.5}
          left={48}
        />
        <AuthInput icon={assets.lock} placeholder="Password" secure={true} />
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: 25,
          marginBottom: 35,
        }}
      >
        <PrimaryButton
          text={"Sign Up"}
          bgColor={colors.mintGreen}
          width="85%"
        />
        <View style={{ marginTop: 20, marginBottom: 50 }}>
          <Text style={{ color: colors.babyPowder }}>
            Already have an account?{" "}
            <Text
              style={{
                color: colors.amber,
                fontWeight: "bold",
                textDecorationColor: colors.mintGreen,
                textDecorationLine: "underline",
              }}
              onPress={() => navigation.navigate("login")}
            >
              Log In here
            </Text>
          </Text>
        </View>
      </View>
    </AuthWrapper>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.babyPowder,
  },
})
