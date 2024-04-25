import {StyleSheet} from "react-native";
import colors from "../colors/colors";

export default StyleSheet.create({
    updatePlayerModalContainer: {
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
    updatePlayerMainText: {
        paddingVertical: '1%',
        textAlign: "center",
        fontFamily: "Poppins-Bold",
        fontWeight: "bold",
        fontSize: 21,
        color: colors.midLightBlack,
        opacity: 1,
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
    updatePlayerButton: {
        marginTop: "5%",
        paddingVertical: "2%",
        color: colors.white,
        paddingHorizontal: "1%",
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        fontSize: 23,
        backgroundColor: colors.darkBlue,
        borderRadius: 10,
        textAlign: "center",
    },
})
