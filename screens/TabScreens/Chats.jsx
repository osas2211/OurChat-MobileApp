import { View, Text, StyleSheet, FlatList } from "react-native"
import React from "react"
import { SearchInput } from "../../components/Input"
import { UserPreview } from "../../components/UserPreview"
import { colors, assets } from "../../constants"
import { TabStyles } from "./TabSyles"
import { dummyData } from "../../assets/dummyData"
import { TabHeader } from "../../components/TabHeader"

export const Chats = ({ navigation }) => {
  return (
    <View style={TabStyles.container}>
      <TabHeader tabName={"messages"} navigation={navigation} />
      <View style={{ marginTop: -20 }}>
        <SearchInput placeholder={"Search user"} />
      </View>
      <FlatList
        data={dummyData}
        style={{ marginTop: 5, marginBottom: 10 }}
        renderItem={({ item, index, separators }) => (
          <UserPreview
            userName={item.userName}
            preview={item.preview}
            userImage={item.userImage}
            lastSentTime={item.lastSentTime}
            msgColor={item.msgColor}
            msgFamily={item.msgFamily}
            unreadMsg={true}
            key={index}
          />
        )}
      />
    </View>
  )
}
