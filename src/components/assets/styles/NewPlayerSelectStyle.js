
import colors from "../colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    setupMatchWrapperHeading: {
        paddingVertical: '1%',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 22,
        color: colors.midLightBlack,
        opacity: 1,
    },
})
