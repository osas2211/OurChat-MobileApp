import { View, Text, StyleSheet, Image } from "react-native"
import React from "react"
import { assets, colors } from "../constants"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { PrimaryButton } from "../components/Button"

export const UserProfile = ({ navigation }) => {
  return (
    <View>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back-ios"
          size={18}
          style={{
            backgroundColor: "#a0e78e",
            padding: 15,
            borderRadius: 25,
            color: colors.babyPowder,
          }}
          color={"grey"}
          onPress={() => navigation.navigate("in-chat")}
        />
        <Text
          style={{
            fontFamily: "MontBold",
            color: colors.babyPowder,
            fontSize: 16,
          }}
        >
          Profile
        </Text>
      </View>
      <View style={{ alignSelf: "center", marginTop: -75, elevation: 5 }}>
        <Image
          source={assets.profile}
          resizeMode="contain"
          style={{ height: 150, width: 150, borderRadius: 25 }}
        />
      </View>
      <View
        style={{
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontFamily: "MontBold",
            textTransform: "capitalize",
            color: colors.smokyBlack,
            textAlign: "center",
          }}
        >
          malcolm curtis
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "MontLight",
            color: colors.smokyBlack,
            textAlign: "center",
          }}
        >
          Creative Director @AdobeStudios and web3 Freelancer.
        </Text>
      </View>
      <View
        style={{
          padding: 20,
          paddingHorizontal: 40,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <PrimaryButton
          text={"Accept request"}
          bgColor={colors.mintGreen}
          width="45%"
        />
        <PrimaryButton
          text={"reject request"}
          bgColor={"#210F04"}
          width="45%"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 25,
    paddingTop: 40,
    paddingBottom: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.mintGreen,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    elevation: 2,
  },
})
