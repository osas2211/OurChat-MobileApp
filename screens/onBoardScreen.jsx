import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native"
import React from "react"
import { assets, colors } from "../constants"
import { PrimaryButton } from "../components/Button"
import Wrapper from "../components/Wrapper"
import { StatusBar } from "expo-status-bar"

export const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        style="auto"
        backgroundColor={colors.babyPowder}
        animated={true}
      />
      <View style={styles.onboard}>
        <Image
          source={assets.onboardImg}
          resizeMode="stretch"
          style={styles.img}
        />
        <View style={styles.text}>
          <Text style={styles.strong}>
            Chat with Friends and Family In Realtime.
          </Text>
          <Text style={styles.faint}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            voluptatum unde similique libero tenetur sit.
          </Text>
          <View style={{ marginTop: 25 }}>
            <PrimaryButton
              text={"get started"}
              onPress={() => navigation.navigate("login")}
              bgColor={colors.smokyBlack}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  onboard: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 0,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  img: {
    width: "130%",
    height: "60%",
    marginLeft: "-13%",
    marginBottom: 15,
  },
  text: {
    padding: 25,
  },
  strong: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
    textTransform: "capitalize",
  },
  faint: {
    opacity: 0.5,
    lineHeight: 20,
  },
})
