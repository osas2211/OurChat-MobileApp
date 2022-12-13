import { View, Text, Image, TouchableOpacity } from "react-native"
import React from "react"
import { colors } from "../constants"

export const UserPreview = ({
  preview,
  lastSentTime,
  userName,
  userImage,
  msgColor,
  msgFamily,
  online,
  showStatus,
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
        <View>
          <Image
            source={userImage}
            resizeMode="contain"
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          {showStatus && (
            <View
              style={{
                height: 13,
                width: 13,
                borderRadius: 13,
                backgroundColor: online ? colors.mintGreen : "#CAD2C5",
                position: "absolute",
                zIndex: 1,
                bottom: -15,
                right: 0,
                borderColor: colors.babyPowder,
                borderWidth: 2,
              }}
            />
          )}
        </View>
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
              fontSize: 13,
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
