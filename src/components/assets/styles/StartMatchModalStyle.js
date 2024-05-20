import colors from "../colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    startMatchModalContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    mainInnerWrapper: {
        flexDirection: "column",
        opacity: 1,
        alignItems: "center"
    },
    setupMatchWrapper: {
        paddingVertical: '1%',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 21,
        color: colors.midLightBlack,
        opacity: 1,
    },
    selectPlayerLabel: {
        fontSize: 14,
        paddingBottom: 5,
        color: colors.black,
        textAlign: "center"
    },
    battingTeamSelectionWrapper: {
        flexDirection: "column",
        justifyContent: "center"
    },
    dropdown: {
        width: "65%",
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginVertical: '2%'
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

    bookingSuccessfulText: {
        textAlign: "center",
        fontWeight: "normal",
        fontSize: 14,
        color: colors.midLightBlack,
        opacity: 1,
    },
    sendWhatsappMessageWrapper: {
        borderRadius: 10,
        backgroundColor: colors.primary,
        paddingHorizontal: '3%',
        width: '65%',
        flexDirection: "row",
        alignItems: "center",
        height: '40%',
    },
    input: {
        height: 65,
        width: '80%',
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: '5%',
        paddingHorizontal: 10,
    },
    subjectInput: {
        height: 35,
        width: '80%',
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: '5%',
        paddingHorizontal: 10,
    },
    sendMessageText: {
        color: colors.black,
        fontSize: 15,
        alignItems: "center",
    }
});


