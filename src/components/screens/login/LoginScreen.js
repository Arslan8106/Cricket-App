import {StatusBar} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity, Pressable,
} from "react-native";
import colors from "../../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Toast from "react-native-toast-message";
import {loginSuccess} from "../../../redux/action";
import {connect, useDispatch} from "react-redux";


const LoginScreen = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const API_BASE_URL = "http://10.0.2.2:3000/api/v1";
    const dispatch = useDispatch();

    const Login = () => {
        axios.post(`${API_BASE_URL}/users/sign_in`, {
          user: { email: email, password: password}
        }).then((response) => {
            if (response && response.data) {
                dispatch(loginSuccess(response.data.user));
                navigation.navigate("HomeScreen", response.data);
                Toast.show({ type: "success", text1: "Welcome" })
            }
        }).catch(err => Toast.show({ type: "error", text1: (err.response && err.response.data.error) || err.message }));
    };


    const signUp = () => {
        navigation.navigate("SignupScreen");
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/images/logo.png")} />
            <View style={styles.mainWrapper}>
                <View
                    style={{
                        borderBottomColor: colors.white,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginBottom: "2%",
                        width: "20%",
                        opacity: 1,
                    }}
                />
                <Text style={styles.signInStyle}>Sign In</Text>
                <View style={styles.inputView}>
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        placeholder="Email"
                        placeholderTextColor="white"
                        style={styles.innerTextInput}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        placeholder="Password"
                        placeholderTextColor="white"
                        style={styles.innerTextInput}
                        secureTextEntry={true}

                    />
                </View>
                <View style={styles.forgotLinksWrapper}>
                    <TouchableOpacity>
                        <Text style={styles.rememberMeButton}>Remember Me?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.forgot_button}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={Login} style={styles.emailSendButton}>
                    <Text style={styles.emailSendButtonText}>Next</Text>
                </TouchableOpacity>
                <View style={styles.notAccountWrapper}>
                    <TouchableOpacity>
                        <Text style={styles.notAccountButton}>Don't have account?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={signUp}>
                        <Text style={styles.signUpButton}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBlue,
        justifyContent: "flex-end",
    },
    mainWrapper: {
        height: "60%",
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
        width: 200,
        height: 180,
        marginVertical: 100,
        marginLeft: 100,
    },
    signInStyle: {
        textAlign: "center",
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
        color: colors.white,
    },
    forgotLinksWrapper: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    rememberMeButton: {
        paddingVertical: "4%",
        color: colors.lightGrey,
        paddingHorizontal: "12%"
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
        fontWeight: "500",
        fontSize: 16,
    },
    notAccountButton: {
        paddingVertical: "4%",
        color: colors.lightGrey,
        fontWeight: "500",
        fontSize: 15,
    },
});

export default LoginScreen;
