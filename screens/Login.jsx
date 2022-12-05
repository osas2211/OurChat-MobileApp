import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { assets, colors } from "../constants"
import { AuthInput } from "../components/Input"
import { PrimaryButton } from "../components/Button"
import { AuthWrapper } from "../components/AuthWrapper"

export const Login = ({ navigation }) => {
  return (
    <AuthWrapper>
      <View style={{ width: "100%", marginTop: "55%" }}>
        <AuthInput
          icon={assets.user}
          placeholder="Username"
          top={26.5}
          left={48}
        />
        <AuthInput icon={assets.lock} placeholder="Password" secure={true} />
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <TouchableOpacity
          style={{ marginTop: 15, marginBottom: 35 }}
          onPress={() => navigation.navigate("reset-password")}
        >
          <Text style={styles.text}>Forgot Password?</Text>
        </TouchableOpacity>
        <PrimaryButton text={"LogIn"} bgColor={colors.mintGreen} width="85%" />
        <View style={{ marginTop: 20, marginBottom: 50 }}>
          <Text style={{ color: colors.babyPowder }}>
            Don't have an account?{" "}
            <Text
              style={{
                color: colors.amber,
                fontWeight: "bold",
                textDecorationColor: colors.mintGreen,
                textDecorationLine: "underline",
              }}
              onPress={() => navigation.navigate("signup")}
            >
              Sign Up here
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
