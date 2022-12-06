import { NavigationContainer } from "@react-navigation/native"
import { useFonts } from "expo-font"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { OnBoardScreen } from "./screens/onBoardScreen"
import { Login } from "./screens/Login"
import { SignUp } from "./screens/SignUp"
import { VerifyEmail } from "./screens/VerifyEmail"
import { ResetPassword } from "./screens/ResetPassword"
import { ResetPswdOTP } from "./screens/ResetPswdOTP"
import { NewPassword } from "./screens/NewPassword"

const Stack = createNativeStackNavigator()
export default function App() {
  const [loaded] = useFonts({
    rubik: require("./assets/fonts/rubik.ttf"),
  })
  if (!loaded) return null
  return (
    <NavigationContainer>
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}
