import {StyleSheet} from "react-native";
import colors from "../colors/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightWhite,
    },
    mainWrapper: {
        flexDirection: "column",
        paddingHorizontal: "3%",
        alignItems: "center"
    },
    mainHeading: {
        textAlign: "left",
        fontFamily: "Poppins-Medium",
        fontWeight: "700",
        fontSize: 25,
        letterSpacing: 0,
        color: colors.black,
        marginVertical: "3%",
        paddingHorizontal: '5%'
    },
    createMatchButtonWrapper: {
        alignSelf: "flex-end",
        borderRadius: 50,
        backgroundColor: colors.darkBlue,
        padding: 10,
        width: '40%',
        flexDirection: "row",
        alignItems: "center",
        marginRight: "4%",
        marginVertical: "3%"
    },
    createMatchText: {
        color: colors.white,
        fontSize: 15,
        fontFamily: "Poppins-Medium",
        alignItems: "center",
    },
});
