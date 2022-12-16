import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import React from "react"
import { MsgInput } from "../components/Input"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { assets, colors } from "../constants"

export const InChat = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
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
          onPress={() => navigation.navigate("chats")}
        />
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 25 }}
        >
          <Image
            source={assets.profile}
            resizeMode="contain"
            style={{ width: 60, height: 60, borderRadius: 60, marginRight: 10 }}
          />
          <View>
            <Text
              style={{
                textTransform: "capitalize",
                fontFamily: "MontBold",
                color: colors.babyPowder,
              }}
            >
              {"Jude Bellingham"}
            </Text>
            <Text
              style={{
                fontFamily: "MontLight",
                fontSize: 12,
                marginTop: 5,
                color: colors.babyPowder,
              }}
            >
              Online
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.inputArea}>
        <MsgInput placeholder={"Type a message"} width={"90%"} />
        <TouchableOpacity>
          <FontAwesome
            name="send-o"
            size={20}
            color={colors.amber}
            style={styles.sendBtn}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.mintGreen,
  },
  inputArea: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 30,
    paddingBottom: 10,
    backgroundColor: colors.babyPowder,
  },
  sendBtn: {
    backgroundColor: colors.smokyBlack,
    padding: 15,
    borderRadius: 35,
    marginRight: 10,
  },
})
