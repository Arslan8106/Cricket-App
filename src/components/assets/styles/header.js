import { StyleSheet } from "react-native";
import colors from "../colors/colors";

const header = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 4,
    backgroundColor: "#F6F6F6",
    borderBottomColor: "#e0e0e0",
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 54,
    color: "#191926",
    paddingLeft: 27,
    flexGrow: 1,
  },
  notificationIconStyle: {
    opacity: 1,
    paddingRight: 17.7,
  },
  reservationsIconStyle: {
    color: colors.midLightBlack,
    opacity: 1,
    paddingRight: "10%",
  },
});

export default header;
