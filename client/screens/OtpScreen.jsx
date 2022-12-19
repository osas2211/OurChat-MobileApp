import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import React, { useState, createRef } from "react"
import { assets, colors } from "../constants"
import { PrimaryButton } from "../components/Button"
import { OtpInput } from "../components/Input"

export const OtpScreen = ({
  header,
  img,
  onPress,
  otp1,
  setOtp1,
  otp2,
  setOtp2,
  otp3,
  setOtp3,
  otp4,
  setOtp4,
}) => {
  const oneRef = createRef()
  const twoRef = createRef()
  const threeRef = createRef()
  const fourRef = createRef()

  const changeFocus = (backRef, nextRef, otp, text, setOtp) => {
    if (Number(text) || text == "" || text == "0") {
      setOtp(text)
      if (otp === "") {
        nextRef.current.focus()
      }
      if (otp !== "") {
        backRef.current.focus()
      }
    }
  }
  const onChangeInputOne = (text) => {
    changeFocus(oneRef, twoRef, otp1, text, setOtp1)
  }
  const onChangeInputTwo = (text) => {
    changeFocus(oneRef, threeRef, otp2, text, setOtp2)
  }
  const onChangeInputThree = (text) => {
    changeFocus(twoRef, fourRef, otp3, text, setOtp3)
  }
  const onChangeInputFour = (text) => {
    changeFocus(threeRef, fourRef, otp4, text, setOtp4)
  }
  return (
    <ScrollView style={styles.body}>
      <Image
        source={img}
        resizeMode={"contain"}
        style={{ height: 400, width: "100%" }}
      />
      <View>
        <Text style={{ fontWeight: "500", fontSize: 18, marginBottom: 14 }}>
          {header}
        </Text>
        <Text style={{ fontWeight: "300", marginBottom: 24 }}>
          Please enter the 4 digit code sent to youremail@example.com
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 24,
        }}
      >
        <OtpInput ref={oneRef} value={otp1} onChange={onChangeInputOne} />
        <OtpInput ref={twoRef} value={otp2} onChange={onChangeInputTwo} />
        <OtpInput ref={threeRef} value={otp3} onChange={onChangeInputThree} />
        <OtpInput ref={fourRef} value={otp4} onChange={onChangeInputFour} />
      </View>
      <View
        style={{
          marginBottom: 60,
        }}
      >
        <TouchableOpacity>
          <Text
            style={{
              color: colors.blue,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Resend OTP
          </Text>
        </TouchableOpacity>
        <PrimaryButton
          text={"Verify & Proceed"}
          bgColor={colors.blue}
          width="100%"
          onPress={onPress}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 35,
  },
})
