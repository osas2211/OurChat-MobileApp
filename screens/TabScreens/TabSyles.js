import { StyleSheet } from "react-native"
import { colors, assets } from "../../constants"

export const TabStyles = StyleSheet.create({
  container: { flex: 1, width: "100%", backgroundColor: colors.babyPowder },
  header: {
    paddingTop: 60,
    paddingLeft: 20,
    paddingBottom: 15,
    fontSize: 20,
    fontFamily: "rubik",
    color: colors.babyPowder,
    backgroundColor: colors.mintGreen,
    alignItems: "center",
    flexDirection: "row",
  },
})
