import {StyleSheet} from "react-native";
import colors from "../colors/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightWhite,
    },
    mainWrapper: {
        paddingVertical: "2%",
        paddingHorizontal: "6%"
    },
    mainHeading: {
        textAlign: "left",
        fontFamily: "Poppins-Medium",
        fontWeight: "700",
        fontSize: 25,
        letterSpacing: 0,
        color: colors.black,
        marginVertical: "3%"
    },
    playerWrapper: {
        borderRadius: 10,
        backgroundColor: colors.darkGrey,
        paddingVertical: "4%",
        paddingHorizontal: "3%",
        marginVertical: "2%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    playerProfieImage: {
        width: 70,
        height: 70,
    },
    playerNameText: {
        color: colors.white,
        fontSize: 17,
        fontWeight: "bold",
        fontFamily: "Poppins-Bold",
        alignItems: "center",
        textTransform: "uppercase",
    },
    departmentNameText: {
        color: colors.white,
        fontSize: 15,
        fontFamily: "Poppins-Light",
        alignItems: "center",
    },
    innerPlayerInfoWrapper: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",

    }
})
