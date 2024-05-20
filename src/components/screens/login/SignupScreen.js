import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import colors from "../../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Toast from "react-native-toast-message";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from "../../assets/styles/SignupScreenStyle"
import {loginSuccess} from "../../../redux/action";
import {useDispatch} from "react-redux";
const SignupScreen = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(null);
    const navigation = useNavigation();
    const API_BASE_URL = "http://10.0.2.2:3000/api/v1";
    const dispatch = useDispatch();

    const Signup = () => {
        axios.post(`${API_BASE_URL}/users`, {
            user: { email: email, password: password, username: name, role: role}
        }).then((response) => {
            if (response && response.data) {
                dispatch(loginSuccess(response.data.user));
                navigation.navigate("HomeScreen", response.data);
                Toast.show({ type: "success", text1: "Welcome" })
            }
        }).catch(err => Toast.show({ type: "error", text1: (err.response && err.response.data.error) || err.message }));
    };

    const signIn = () => {
        navigation.navigate("LoginScreen");
    }
    const data = [
        { label: 'Admin', value: 'admin' },
        { label: 'Captain', value: 'captain' },
    ];

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/images/signup-logo.png")} />
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
                <Text style={styles.signInStyle}>Create account</Text>
                <View style={styles.inputView}>
                    <TextInput
                        label="Name"
                        value={name}
                        onChangeText={(name) => setName(name)}
                        placeholder="Name"
                        placeholderTextColor="white"
                        style={styles.innerTextInput}
                    />
                </View>
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
                        label="password"
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        placeholder="Password"
                        placeholderTextColor="white"
                        style={styles.innerTextInput}
                        secureTextEntry={true}
                    />
                </View>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select role"
                    value={role}
                    onChange={item => {
                        setRole(item.value);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                    )}
                />
                <View style={styles.forgotLinksWrapper}>
                        <Text style={styles.rememberMeButton}>Password must by 6 characters</Text>
                </View>
                <TouchableOpacity onPress={Signup} style={styles.emailSendButton}>
                    <Text style={styles.emailSendButtonText}>Next</Text>
                </TouchableOpacity>
                <View style={styles.notAccountWrapper}>
                    <TouchableOpacity>
                        <Text style={styles.notAccountButton}>Already have account?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={signIn}>
                        <Text style={styles.signUpButton}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
        ;
}
export default SignupScreen;
