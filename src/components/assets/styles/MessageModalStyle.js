
import colors from "../colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    successModalContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    successModalContent: {
        width: "80%",
        height: "65%",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
    },
    mainInnerWrapper: {
        alignItems: "center",
        opacity: 1,
    },
    congrulationsBookingText: {
        paddingVertical: '5%',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 21,
        color: colors.midLightBlack,
        opacity: 1,
    },
    bookingSuccessfulText: {
        textAlign: "center",
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
