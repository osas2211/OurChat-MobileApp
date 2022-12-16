import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native"
import React from "react"
import { SearchInput } from "../../components/Input"
import { UserPreview } from "../../components/UserPreview"
import { colors, assets } from "../../constants"
import { TabStyles } from "./TabSyles"
import { dummyData } from "../../assets/dummyData"
import AntDesign from "react-native-vector-icons/AntDesign"
import { TabHeader } from "../../components/TabHeader"

export const Friends = ({ navigation }) => {
  return (
    <SafeAreaView style={TabStyles.container}>
      <TabHeader tabName={"friends"} navigation={navigation} />
      <View style={{ marginTop: -20 }}>
        <SearchInput placeholder={"Search friends"} />
      </View>
      <FlatList
        data={dummyData}
        style={{ marginBottom: 10, flex: 1 }}
        renderItem={({ item, index }) => (
          <UserPreview
            userName={item.userName}
            preview={item.preview2}
            userImage={item.userImage}
            online={item.online}
            showStatus={true}
            navigation={navigation}
            key={index}
          />
        )}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          height: 60,
          width: 60,
          borderRadius: 60,
          backgroundColor: colors.mintGreen,
          alignItems: "center",
          justifyContent: "center",
          elevation: 4,
        }}
      >
        <AntDesign name="adduser" size={25} color={colors.babyPowder} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}
