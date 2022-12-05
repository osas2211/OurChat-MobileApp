import { NavigationContainer } from "@react-navigation/native"
import { useFonts } from "expo-font"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { OnBoardScreen } from "./screens/onBoardScreen"
import { Login } from "./screens/Login"
import { SignUp } from "./screens/SignUp"
import { VerifyEmail } from "./screens/VerifyEmail"

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
