import {StyleSheet} from "react-native";
import colors from "../colors/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightWhite,
    },
    mainHeading: {
        textAlign: "left",
        fontWeight: "700",
        fontSize: 25,
        letterSpacing: 0,
        color: colors.black,
        marginVertical: "3%"
    },
    mainWrapper: {
        paddingHorizontal: "4%"
    },
    newsHeading: {
        textAlign: "left",
        fontWeight: "700",
        fontSize: 27,
        letterSpacing: 0,
        color: colors.black,
        paddingHorizontal: '1%',
        marginVertical: "3%",
        textTransform:"uppercase"
    },
    newsTextHeading: {
        textAlign: "center",
        fontWeight: "700",
        fontSize: 20,
        letterSpacing: 0,
        color: colors.black,
        paddingHorizontal: '1%',
        marginVertical: "3%",
        textTransform: "capitalize"
    },
    newsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    newsWrapper: {
        paddingVertical: "2%",
        paddingHorizontal: "2%",
        flexDirection: "column",
        backgroundColor: colors.white
    },
    bullet: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'black',
        marginRight: 8,
    },
    secondText: {
        paddingTop: '1.5%',
        color: colors.black,
        fontSize: 14,
    },
    text: {
        color: colors.black,
        fontSize: 14,
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
        alignSelf: "flex-end",
        marginTop: "4%",
        borderRadius: 50,
        backgroundColor: colors.primary,
        padding: 10,
        width: '46%',
        flexDirection: "row",
        alignItems: "center"
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
        alignItems: "center",
    },
    sendMessageButtonText: {
        color: colors.white,
        fontSize: 15,
        alignItems: "center",
        paddingLeft: '3%'
    }
});
