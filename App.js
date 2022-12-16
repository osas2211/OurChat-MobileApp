import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { useFonts } from "expo-font"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { OnBoardScreen } from "./screens/onBoardScreen"
import { Login } from "./screens/Login"
import { SignUp } from "./screens/SignUp"
import { VerifyEmail } from "./screens/VerifyEmail"
import { ResetPassword } from "./screens/ResetPassword"
import { ResetPswdOTP } from "./screens/ResetPswdOTP"
import { NewPassword } from "./screens/NewPassword"
import { Tabs } from "./screens/TabScreens/Tabs"
import { colors } from "./constants"
import { InChat } from "./screens/InChat"

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.babyPowder,
  },
}
const Stack = createNativeStackNavigator()
export default function App() {
  const [loaded] = useFonts({
    rubik: require("./assets/fonts/rubik.ttf"),
    MontBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    MontExtraBold: require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    MontSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    MontLight: require("./assets/fonts/Montserrat-Light.ttf"),
    MontExtraLight: require("./assets/fonts/Montserrat-ExtraLight.ttf"),
    MontRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    MontMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
    PlayBold: require("./assets/fonts/Play-Bold.ttf"),
    PlayRegular: require("./assets/fonts/Play-Regular.ttf"),
  })
  if (!loaded) return null
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="onBoarding">
        <Stack.Screen
          name="onBoarding"
          component={OnBoardScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="reset-password"
          component={ResetPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="reset-password-otp"
          component={ResetPswdOTP}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="enter-new-password"
          component={NewPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="verify-email"
          component={VerifyEmail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="tabs"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="in-chat"
          component={InChat}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
