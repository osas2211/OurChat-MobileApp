import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native"
import React from "react"
import { AuthInput, SearchInput } from "../../components/Input"
import { UserPreview } from "../../components/UserPreview"
import { colors, assets } from "../../constants"
import { TabStyles } from "./TabSyles"
import { dummyData } from "../../assets/dummyData"

export const Chats = ({ navigation }) => {
  return (
    <View style={TabStyles.container}>
      <Text style={TabStyles.header}>Messages</Text>
      <View style={{ marginTop: 15 }}>
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
            key={index}
          />
        )}
      />
    </View>
  )
}
