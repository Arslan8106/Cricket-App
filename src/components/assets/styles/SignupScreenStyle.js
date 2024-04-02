import {StyleSheet} from "react-native";
import colors from "../colors/colors";
import header from "./header";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBlue,
        justifyContent: "flex-end",
    },
    mainWrapper: {
        height: "68%",
        paddingTop: "5%",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: colors.darkGrey,
        paddingBottom: "10%"
    },
    image:{
        justifyContent: "center",
        width: 230,
        height: 180,
        marginVertical: "12%",
        marginHorizontal: "27%",
    },
    signInStyle: {
        textAlign: "center",
        fontFamily: "Poppins-Medium",
        fontWeight: "700",
        fontSize: 25,
        letterSpacing: 0,
        color: colors.white,
        marginVertical: "3%"
    },
    inputView: {
        paddingVertical: '4%',
        paddingHorizontal: "3%",
        backgroundColor: colors.darkBlue,
        borderRadius: 20,
        width: "80%",
        marginVertical: "3%",
    },
    TextInput: {
        color: colors.white,
    },
    innerTextInput: {
        fontFamily: "Poppins-Regular",
        color: colors.white,
    },
    forgotLinksWrapper: {
        flexDirection: "row",
    },
    rememberMeButton: {
        paddingBottom: "3%",
        paddingRight: "28%",
        color: colors.lightGrey,
    },
    forgot_button: {
        paddingVertical: "4%",
        color: colors.primary,
        paddingHorizontal: "12%"
    },
    loginText: {
        color: colors.white
    },
    emailSendWrapper: {
        flexDirection: "column",
        alignItems: "center",
    },
    emailSendButton: {
        backgroundColor: colors.primary,
        borderRadius: 15,
        opacity: 1,
        width: "75%",
        marginTop: "5%",
    },
    emailSendButtonText: {
        textAlign: "center",
        fontFamily: "Poppins-Bold",
        fontWeight: "900",
        fontSize: 22,
        letterSpacing: 0,
        color: colors.black,
        opacity: 1,
        marginHorizontal: "8%",
        paddingVertical: '5%'
    },
    notAccountWrapper: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    signUpButton: {
        paddingVertical: "4%",
        color: colors.primary,
        paddingHorizontal: "1%",
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        fontSize: 16,
    },
    notAccountButton: {
        paddingVertical: "4%",
        color: colors.lightGrey,
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        fontSize: 15,
    },
    dropdown: {
        width: "75%",
        margin: 16,
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
        color: colors.white
    },
    selectedTextStyle: {
        fontSize: 16,
        color: colors.white
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
