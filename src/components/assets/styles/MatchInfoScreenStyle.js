import {StyleSheet} from "react-native";
import colors from "../colors/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: colors.lightWhite,

    },
    mainHeadingWrapper: {
        marginTop: "4%",
        backgroundColor: colors.white,
    },
    mainHeading: {
        paddingVertical: "2%",
        paddingHorizontal: "3%",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        letterSpacing: 0,
        color: colors.black,
        textTransform: "uppercase"
    },
    matchDetailsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "8%",
        paddingVertical: "2%",
        paddingTop: "4%",

    },
    matchDetailsInnerFirstWrapper: {
        flexDirection: "column"
    },
    verticalLine: {
        borderRightWidth: 1,
        borderColor: 'black', // Change the color as needed
        marginVertical: 10, // Adjust as needed
    },
    matchDetailsInnerSecondWrapper: {

        flexDirection: "column"
    },
    detailsHeadingText: {
        textAlign: "left",
        fontSize: 16,
        letterSpacing: 0,
        color: colors.black,
    },
    matchDetailsText: {
        paddingVertical: "1%",
        textAlign: "left",
        fontSize: 14,
        letterSpacing: 0,
        color: colors.black,
    }

});
