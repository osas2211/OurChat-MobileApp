import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { assets, colors } from "../constants"

export const AuthWrapper = ({ children, img }) => {
  return (
    <View style={styles.auth}>
      <StatusBar
        style="auto"
        backgroundColor={colors.mintGreen}
        animated={true}
      />
      <Image
        source={img || assets.authImg}
        resizeMode="cover"
        style={styles.img}
      />
      <View
        style={{
          ...styles.img,
          backgroundColor: colors.smokyBlack,
          opacity: 0.6,
        }}
      />
      <ScrollView>
        <View style={styles.top}>
          <Text style={{ ...styles.text, fontSize: 30, fontFamily: "rubik" }}>
            Our
            <Text style={{ color: colors.mintGreen }}>Chat</Text>
          </Text>
          <Text style={{ color: colors.babyPowder, marginTop: 15 }}>
            Chat with Friends and Family In Realtime.
          </Text>
          {/* JSX Children */}
          {children}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  auth: {
    flex: 1,
    width: "100%",
    position: "relative",
  },
  img: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  top: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "20%",
    height: "100%",
  },
  text: {
    color: colors.babyPowder,
  },
})
