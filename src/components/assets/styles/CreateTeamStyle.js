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
        fontFamily: "Poppins-Bold",
        fontWeight: "bold",
        fontSize: 28,
        letterSpacing: 0,
        color: colors.black,
        marginVertical: "3%"
    },
    label: {
        fontFamily: "Poppins-Medium",
        fontSize: 18,
        marginBottom: 5,
        color: colors.black,
        paddingVertical: '1%'
    },
    input: {
        height: 45,
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },

    closeIcon: {
        position: 'absolute',
        top: 6,
        right: 1,
        zIndex: 1,
    },
    saveButton: {
        paddingVertical: "2%",
        color: colors.white,
        paddingHorizontal: "1%",
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        fontSize: 23,
        backgroundColor: colors.darkBlue,
        borderRadius: 10,
        textAlign: "center",
    },
    buttonsWrapper: {
        flexDirection: "column",
        paddingVertical: "5%",
        paddingHorizontal: "6%"
    },
    addMoreButton: {
        paddingVertical: "2%",
        color: colors.white,
        paddingHorizontal: "1%",
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        fontSize: 23,
        backgroundColor: colors.primary,
        borderRadius: 10,
        textAlign: "center",
        marginVertical: '3%'
    },
    captainNameText: {
        color: colors.black,
        fontSize: 17,
        fontFamily: "Poppins-Bold",
        alignItems: "center",
        textTransform: "uppercase",
    },
    yourTeamWrapper: {
        flexDirection: "column",
        justifyContent: "space-between",
        paddingVertical: "3%",
        paddingHorizontal: "3%",
        backgroundColor: colors.primary,
        borderRadius: 12,
        marginVertical: '3%'
    },
    teamWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 12,
        marginVertical: '2%'
    }
})
