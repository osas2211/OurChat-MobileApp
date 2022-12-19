import { StyleSheet } from "react-native"
import { colors, assets } from "../../constants"

export const TabStyles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: colors.babyPowder,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 25,
    fontSize: 20,
    fontFamily: "rubik",
    color: colors.babyPowder,
    backgroundColor: colors.mintGreen,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
})
