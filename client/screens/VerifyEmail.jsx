import React, { useState } from "react"
import { OtpScreen } from "./OtpScreen"
import { assets, colors } from "../constants"

export const VerifyEmail = ({ navigation }) => {
  const [otp1, setOtp1] = useState("")
  const [otp2, setOtp2] = useState("")
  const [otp3, setOtp3] = useState("")
  const [otp4, setOtp4] = useState("")
  return (
    <OtpScreen
      header={"Verify your Email"}
      img={assets.envelope}
      onPress={() => {}}
      otp1={otp1}
      otp2={otp2}
      otp3={otp3}
      otp4={otp4}
      setOtp1={setOtp1}
      setOtp2={setOtp2}
      setOtp3={setOtp3}
      setOtp4={setOtp4}
    />
  )
}
