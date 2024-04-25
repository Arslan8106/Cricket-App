import colors from "../colors/colors";
import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: colors.lightWhite,
    },
    mainHeading: {
        textAlign: "left",
        fontFamily: "Poppins-Light",
        fontSize: 25,
        letterSpacing: 0,
        color: colors.black,
        marginVertical: "1%"
    },
    teamScoreHeading: {
        textAlign: "left",
        fontFamily: "Poppins-Light",
        fontSize: 16,
        letterSpacing: 0,
        color: colors.black,
    },
    teamNewsHeading: {
        textAlign: "left",
        fontFamily: "Poppins-Medium",
        fontSize: 16,
        letterSpacing: 0,
        color: colors.darkBlue,
    },
    partnershipHeading: {
        textAlign: "left",
        fontFamily: "Poppins-Bold",
        fontSize: 18,
        letterSpacing: 0,
        color: colors.grey,
        paddingHorizontal: "3%",

    },
    innerContainer: {
        flexDirection: "column",
        paddingHorizontal: "5%",
    },
    batterNewsWrapper: {
        flexDirection: "row",
        paddingHorizontal: "5%",
        justifyContent: "space-between"
    },
    batterNameHeadingTextWrapper: {
        textAlign: "left",
        fontFamily: "Poppins-Medium",
        fontSize: 14,
        letterSpacing: 0,
        color: colors.black,
        width: '22.5%'
    },
    batterNewsTextWrapper: {
        textAlign: "left",
        fontFamily: "Poppins-Medium",
        fontSize: 14,
        letterSpacing: 0,
        color: colors.black,
        width: '13.5%'
    },
    batterNameTextWrapper: {
        textAlign: "left",
        fontFamily: "Poppins-Medium",
        fontSize: 14,
        letterSpacing: 0,
        color: "blue",
        width: '21.5%'
    },
    overStatsWrapper: {
        flexDirection: "column",
        paddingHorizontal: "5%",
        backgroundColor: colors.white
    },
    oversContainer: {
        paddingVertical: '1%',
        flexDirection: "row",
    },
    overRunsWrapper: {
        flexDirection: "row",
        paddingHorizontal: "1%",
        backgroundColor: colors.white
    },
    overTextWrapper: {
        width: "32%",
        textAlign: "left",
        fontFamily: "Poppins-Bold",
        fontSize: 14,
        letterSpacing: 0,
        color: colors.black,
        paddingRight: "12%",
        textTransform: "uppercase"
    },
    overNewsTextWrapper: {
        textAlign: "left",
        fontFamily: "Poppins-Medium",
        fontSize: 14,
        letterSpacing: 0,
        color: colors.black,
        paddingHorizontal: "1%",
    },

    innerSecondContainer: {
        flex: 1,
    },

    lowerContainer: {
        paddingHorizontal: "1%",
        flexDirection: "row",
    },
    secondLowerContainer: {
        paddingHorizontal: "1%",
        width: "36.5%",
        flexDirection: "row",
        paddingBottom: '5%',

    },
    runsButtonWrapper: {
      borderRadius: 8,
      paddingVertical: "5%",
      paddingHorizontal: "8%",
        backgroundColor: colors.primary,
        borderColor: colors.darkBlue,
        borderWidth: 3,
    },
    runsText: {
        textAlign: "center",
        color: colors.darkBlue,
        fontFamily: "Poppins-Bold",
        fontSize: 18
    },

})
