import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity, Keyboard,
} from "react-native";
import colors from "../../assets/colors/colors";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.triangleTopLeft} />
            <View style={styles.triangleBottomRight} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    triangleTopLeft: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        borderTopWidth: 15,
        borderBottomWidth: 15,
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderTopColor: colors.primary,
        borderRightColor: "transparent",
        borderBottomColor: "transparent",
        borderLeftColor: colors.primary,
    },
    triangleBottomRight: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderLeftWidth: 85,
        borderBottomWidth: 40,
        borderLeftColor: "transparent",
        borderBottomColor: colors.primary,
    },

});

export default SplashScreen
