import {StyleSheet} from "react-native";
import colors from "../colors/colors";

export default StyleSheet.create({
    mainCardWrapper: {
        flexDirection: "column",
        paddingHorizontal: "5%",
    },
    cardInnerDataWrapper: {
        flexDirection: "column",
    },
    mainMatchHeading: {
        paddingLeft: 12,
        paddingRight: 2,
        fontFamily: "Poppins-SemiBold",
        fontSize: 12,
        color: colors.primary,
        opacity: 1,
        paddingVertical: '2%'
    },
    teamAStylingWrapper: {
        paddingVertical: "2%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    teamBStylingWrapper: {
        paddingVertical: "2%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    teamNames: {
        paddingLeft: 12,
        paddingRight: 2,
        fontFamily: "Poppins-Light",
        fontSize: 16,
        fontWeight: "500",
        color: colors.white,
        opacity: 1,
    },
    teamStats:
        {
            fontFamily: "Poppins-Bold",
            fontSize: 16,
            fontWeight: "bold",
            color: colors.white,
            opacity: 1,
        },
    discountItemWrapper: {
        width: 300,
        height: 160,
        backgroundColor: colors.darkBlue,
        marginRight: 10,
        paddingVertical: "6%",
        borderRadius: 8,
    },
    bottomBar: {
        height: 26,
        backgroundColor: colors.lightGrey,
        borderBottomEndRadius: 8,
        borderBottomLeftRadius: 8,

    },
    bottomBarText: {
        paddingRight: '2%',
        textAlign:"right",
        fontFamily: "Poppins-Light",
        fontSize: 14,
        fontWeight: "500",
        color: colors.lightWhite,
    }

});
