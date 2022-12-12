import { StyleSheet } from "react-native"
import { colors, assets } from "../../constants"

export const TabStyles = StyleSheet.create({
  container: { flex: 1, width: "100%", backgroundColor: colors.babyPowder },
  header: {
    marginTop: 60,
    marginLeft: 20,
    fontSize: 25,
    fontFamily: "PlayBold",
  },
})
