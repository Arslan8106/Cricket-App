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
        fontSize: 25,
        letterSpacing: 0,
        color: colors.black,
        marginVertical: "1%"
    },
    teamScoreHeading: {
        textAlign: "left",
        fontSize: 16,
        letterSpacing: 0,
        color: colors.black,
    },
    teamNewsHeading: {
        textAlign: "left",
        fontSize: 16,
        letterSpacing: 0,
        color: colors.darkBlue,
    },
    partnershipHeading: {
        textAlign: "left",
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
        fontSize: 14,
        letterSpacing: 0,
        color: colors.black,
        width: '22.5%'
    },
    batterNewsTextWrapper: {
        textAlign: "left",
        fontSize: 14,
        letterSpacing: 0,
        color: colors.black,
        width: '13.5%'
    },
    batterNameTextWrapper: {
        textAlign: "left",
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
        fontSize: 14,
        letterSpacing: 0,
        color: colors.black,
        paddingRight: "12%",
        textTransform: "uppercase"
    },
    overNewsTextWrapper: {
        textAlign: "left",
        fontSize: 14,
        letterSpacing: 0,
        color: colors.black,
        paddingHorizontal: "1%",
    },

    innerSecondContainer: {
        flex: 1,
    },

    lowerContainer: {
        paddingHorizontal: "2%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: "1%"
    },
    secondLowerContainer: {
        paddingHorizontal: "2%",
        flexDirection: "row",
        paddingBottom: '5%',
        justifyContent: "space-evenly"
    },
    runsButtonWrapper: {
      paddingVertical: "6%",
      paddingHorizontal: "9%",
        backgroundColor: colors.lightWhite,
        borderColor: colors.darkBlue,
        borderWidth: 3,
        alignItems: "center"
    },
    runsWrapper: {
      paddingVertical: "6%",
      paddingHorizontal: "9%",
        width: "100%",
        backgroundColor: colors.lightWhite,
        borderColor: colors.darkBlue,
        borderWidth: 3,
        alignItems: "center"
    },
    nbRunsButtonWrapper: {
      paddingVertical: "6%",
      paddingHorizontal: "8.5%",
        backgroundColor: colors.lightWhite,
        borderColor: colors.darkBlue,
        borderWidth: 3,
        alignItems: "center",
        width: "95%"

    },
    runsText: {
        textAlign: "center",
        color: colors.darkBlue,
        fontWeight: "bold",
        fontSize: 18,
        width: "50%"
    },
    sixRunsText: {
        textAlign: "center",
        color: colors.darkBlue,
        fontWeight: "bold",
        fontSize: 16,
        width: "50%"
    },
    undoRunsText: {
        textAlign: "center",
        color: colors.darkBlue,
        fontWeight: "bold",
        fontSize: 17,
        width: "60%"
    },
    rtdRunsText: {
        textAlign: "center",
        color: colors.darkBlue,
        fontWeight: "bold",
        fontSize: 16,
        width: "50%"
    },
    rtrRunsText: {
        textAlign: "center",
        color: colors.darkBlue,
        fontWeight: "bold",
        fontSize: 14,
        width: "50%"
    },

})
