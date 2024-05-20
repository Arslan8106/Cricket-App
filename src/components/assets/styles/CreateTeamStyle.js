import {StyleSheet} from "react-native";
import colors from "../colors/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    mainWrapper: {
        paddingVertical: "2%",
        paddingHorizontal: "6%"
    },
    mainHeading: {
        textAlign: "left",
        fontWeight: "bold",
        fontSize: 28,
        letterSpacing: 0,
        color: colors.black,
        marginVertical: "3%"
    },
    createPlayerWrapper: {
        borderRadius: 10,
        paddingHorizontal: "4%",
        paddingVertical: "4%",
        marginBottom: '4%'
    },
    label: {
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
        marginBottom: "3%",
        paddingHorizontal: 10,
    },
    captainInput: {
        height: 45,
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: "3%",
        paddingHorizontal: 10,
        textTransform: "capitalize"
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
        fontWeight: "bold",
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
    },
    dropdown: {
        width: "100%",
        height: 50,
        borderBottomColor: colors.black,
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
        color: colors.black,
    },
    placeholderStyle: {
        fontSize: 17,
        color: colors.black
    },
    selectedTextStyle: {
        fontSize: 16,
        color: colors.black
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})
