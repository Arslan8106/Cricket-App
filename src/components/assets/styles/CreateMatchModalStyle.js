import { StyleSheet, Dimensions } from "react-native";
import colors from "../colors/colors";

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginHorizontal: "11%",
        backgroundColor: "transparent",
    },
    matchModalContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    mainLabel: {
        fontFamily: "Poppins-Bold",
        fontSize: 22,
        paddingBottom: 5,
        color: colors.black,
        textAlign: "center"
    },
    input: {
        height: 45,
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        marginVertical: "3%"
    },
    lunchDinnerStyleText: {
        paddingHorizontal: "1%",
        paddingVertical: "2%",
        color: "#070707",
    },
    bookingModalContent: {
        backgroundColor: "white",
        padding: "5%",
        borderRadius: 10,
        width: "90%",
    },
    dateTimeStyle: {
        paddingVertical: "3%",
        fontFamily: "Poppins-Bold",
        fontSize: 18,
        paddingBottom: 5,
        color: colors.black,
        textAlign: "center"
    },
    teamSelectionWrapper: {
      flexDirection: "column"
    },
    selectTeamLabel: {
        fontFamily: "Poppins-Bold",
        fontSize: 17,
        paddingBottom: 5,
        color: colors.black,
        textAlign: "center"
    },
    opponentWrapper: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    dropdown: {
        width: "35%",
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
        color: colors.white,
    },
    placeholderStyle: {
        fontSize: 16,
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
    createMatchWrapper: {
        paddingHorizontal: "5%",
        marginTop: "5%",
        backgroundColor: colors.primary,
        borderRadius: 8,
        paddingTop: "1%",
        opacity: 1,
    },
    createMatchText: {
        marginVertical: 8,
        textAlign: "center",
        fontFamily: "Poppins-SemiBold",
        fontWeight: "600",
        fontSize: 16,
        color: colors.black,
        opacity: 1,
    },

});
