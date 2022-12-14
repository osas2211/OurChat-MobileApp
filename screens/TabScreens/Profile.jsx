import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native"
import React from "react"
import { TabStyles } from "./TabSyles"
import { TabHeader } from "../../components/TabHeader"
import { assets, colors } from "../../constants"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

export const Profile = ({ navigation }) => {
  return (
    <View style={TabStyles.container}>
      {/* <TabHeader tabName={"profile"} /> */}
      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
        <MaterialIcons
          name="arrow-back-ios"
          size={25}
          style={{ position: "absolute", top: 0, left: 15, zIndex: 1 }}
          color={"grey"}
          onPress={() => navigation.navigate("chats")}
        />
        <Text
          style={{
            fontFamily: "MontSemiBold",
            fontSize: 18,
            textAlign: "center",
            color: colors.smokyBlack,
          }}
        >
          Profile
        </Text>
      </View>
      <ScrollView
        style={{ marginVertical: 15, marginHorizontal: 35, height: "100%" }}
      >
        <Image
          source={assets.profile}
          resizeMode={"contain"}
          style={{
            height: 320,
            width: "100%",
            borderRadius: 10,
            alignSelf: "center",
          }}
        />
        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              fontFamily: "MontSemiBold",
              fontSize: 17,
              marginBottom: 10,
            }}
          >
            Welcome, Osaretin Frank
          </Text>
          <Text
            style={{
              fontFamily: "MontLight",
              fontSize: 13,
              marginBottom: 10,
            }}
          >
            Manage your personal Info, privacy, security and app settings.
          </Text>
        </View>

        <View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              marginTop: 20,
              paddingVertical: 5,
              borderBottomColor: "grey",
              borderBottomWidth: 0.5,
            }}
          >
            <Text>
              <MaterialIcons name="account-circle" size={25} />
            </Text>
            <Text style={{ marginLeft: 8 }}>Account</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.nav}>
            <Text>Personal Info</Text>
            <Text>
              <MaterialIcons name="arrow-forward-ios" size={15} />
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.nav}>
            <Text>Password & Security</Text>
            <Text>
              <MaterialIcons name="arrow-forward-ios" size={15} />
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.nav}>
            <Text>App Theme</Text>
            <Text>
              <MaterialIcons name="arrow-forward-ios" size={15} />
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    paddingVertical: 15,
    paddingBottom: 5,
    opacity: 0.7,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
})
