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
    discountItemWrapper: {
        width: 380,
        height: 160,
        backgroundColor: colors.white,
        paddingVertical: "3%",
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
        borderWidth: 1,
        borderLeftColor: colors.darkBlue,
    },
    mainMatchHeading: {
        paddingLeft: 12,
        paddingRight: 2,
        fontFamily: "Poppins-Bold",
        fontSize: 14,
        fontWeight: "bold",
        color: colors.primary,
        opacity: 1,
        paddingVertical: '2%'
    },
    matchVenueHeading: {
        fontFamily: "Poppins-Bold",
        fontSize: 14,
        fontWeight: "bold",
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
    timeVenueWrapper: {
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
        color: colors.darkBlue,
        opacity: 1,
    },
    teamStats:
        {
            fontFamily: "Poppins-Bold",
            fontSize: 16,
            fontWeight: "bold",
            color: colors.darkBlue,
            opacity: 1,
        },

    bottomBar: {
        height: 26,
        backgroundColor: colors.darkBlue,
        borderBottomEndRadius: 8,
        borderBottomLeftRadius: 8,
        marginBottom: "5%",
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
