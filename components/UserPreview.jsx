import { View, Text, Image, TouchableOpacity } from "react-native"
import React from "react"

export const UserPreview = ({
  preview,
  lastSentTime,
  userName,
  userImage,
  msgColor,
  msgFamily,
}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          width: "90%",
          height: 55,
          alignSelf: "center",
          paddingVertical: 10,
          flexDirection: "row",
          marginVertical: 10,
        }}
      >
        <Image
          source={userImage}
          resizeMode="contain"
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            marginHorizontal: 17,
          }}
        >
          <Text style={{ fontFamily: "PlayBold", fontSize: 17 }}>
            {userName}
          </Text>
          <Text
            style={{
              fontFamily: msgFamily || "MontLight",
              marginTop: 3,
              color: msgColor,
            }}
          >
            {preview}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "MontLight",
            fontSize: 12,
            alignSelf: "flex-end",
            marginBottom: 12,
          }}
        >
          {lastSentTime}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
