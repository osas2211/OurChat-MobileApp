import { View, Text, Image, TouchableOpacity } from "react-native"
import React from "react"
import { assets, colors } from "../constants"

export const IncomingRequest = ({ image, name, id }) => {
  return (
    <View
      style={{
        width: "90%",
        flexDirection: "row",
        marginVertical: 7,
        alignSelf: "center",
        padding: 10,
        borderColor: "#edf3f3",
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <Image
          source={image}
          resizeMode="contain"
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            borderColor: "#CCDBDC",
            borderWidth: 1,
          }}
        />
      </TouchableOpacity>
      <View style={{ marginLeft: 10 }}>
        <View>
          <Text style={{ textTransform: "capitalize", fontFamily: "MontBold" }}>
            {name}
          </Text>
          <Text style={{ fontFamily: "MontLight" }}>
            Sent a friend request.
          </Text>
        </View>
        <View
          style={{
            marginTop: 8,
            flexDirection: "row",
          }}
        >
          <ActionButton
            bgColor={colors.mintGreen}
            color={colors.babyPowder}
            text={"accept"}
            onPress={() => {}}
          />
          <ActionButton
            bgColor={"#CCDBDC"}
            color={colors.smokyBlack}
            text={"reject"}
            onPress={() => {}}
          />
        </View>
      </View>
      <Text
        style={{
          position: "absolute",
          top: 8,
          right: 15,
          fontFamily: "MontLight",
          fontSize: 12,
          color: colors.smokyBlack,
        }}
      >
        1hr
      </Text>
    </View>
  )
}

export const ActionButton = ({ bgColor, color, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: bgColor,
          padding: 4,
          borderRadius: 5,
          width: 120,
          marginRight: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: color,
            textTransform: "capitalize",
            fontFamily: "MontMedium",
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
