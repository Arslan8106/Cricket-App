import {StyleSheet} from "react-native";
import colors from "../colors/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightWhite,
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
    mainWrapper: {
        paddingVertical: "2%",
        paddingHorizontal: "4%"
    },
    newsHeading: {
        textAlign: "left",
        fontFamily: "Poppins-Medium",
        fontWeight: "700",
        fontSize: 30,
        letterSpacing: 0,
        color: colors.black,
        paddingHorizontal: '1%',
        marginVertical: "3%"
    },
    createTeamWrapper: {
        borderRadius: 50,
        backgroundColor: colors.darkBlue,
        padding: 10,
        width: '77%',
        flexDirection: "row",
        alignItems: "center",
        marginRight: "14%",
    },
    sendWhatsappMessageWrapper: {
        borderRadius: 50,
        backgroundColor: colors.primary,
        padding: 10,
        width: '40%',
        flexDirection: "row",
        alignItems: "center",
    },
    signOutWrapper: {
        borderRadius: 50,
        backgroundColor: colors.darkBlue,
        padding: 10,
        width: '22%',
        flexDirection: "row",
        alignItems: "center",
        marginRight: "14%",
    },
    createTeamText: {
        color: colors.white,
        fontSize: 15,
        fontFamily: "Poppins-Medium",
        alignItems: "center",
    },
    sendMessageButtonText: {
        color: colors.white,
        fontSize: 15,
        fontFamily: "Poppins-Medium",
        alignItems: "center",
        paddingLeft: '3%'
    }
});
