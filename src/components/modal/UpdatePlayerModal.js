import {
    Keyboard,
    KeyboardAvoidingView,
    Modal,
    Text, TextInput, TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import styles from "../assets/styles/UpdatePlayerModalStyle";
import {useEffect, useState} from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import {Dropdown} from "react-native-element-dropdown";
import axios from "axios";
import Toast from "react-native-toast-message";

const UpdatePlayerModal = (props) => {
    const player = props.activePlayer
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [modalHeight, setModalHeight] = useState(400);
    const [name, updateName] = useState('');
    const [age, updateAge] = useState('');
    const [email, updateEmail] = useState('');
    const [playerType, updatePlayerType] = useState('');
    const [isUpdate, setIsUpdate] = useState(false)
    const API_BASE_URL = "http://10.0.2.2:3000/api/v1";


    useEffect(() => {
        updateName(player.username);
        updateAge(player.age);
        updateEmail(player.email);
        updatePlayerType(player.player_type)
    }, [player, isUpdate]);
    const closeSuccessModal = () => {
        props.setUpdateModalVisible(false);
        {
            Keyboard.dismiss
        }
    };
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setIsKeyboardOpen(true);
            setModalHeight(400);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyboardOpen(false);
            setModalHeight(400);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [isKeyboardOpen]);
    const data = [
        { label: 'Batsman', value: 'Batsman' },
        { label: 'Bowler', value: 'Bowler' },
        { label: 'AllRounder', value: 'AllRounder' },
    ];
    const updatePlayer = () => {
        axios.put(`${API_BASE_URL}/users/${player.id}`, {user: {username: name, age: age, player_type: playerType, email: email}})
            .then(response => {
                setIsUpdate(true)
                Toast.show({ type: "success", text1: "Player Updated Successfully" })
                closeSuccessModal()
            })
            .catch(err => {
                Toast.show({
                    type: "error",
                    text1: (err.response && err.response.data.error) || err.message
                });
            });
    }
    return(
        <Modal
            visible={props.updateModalVisisble}
            transparent={true}
            animationType="slide"
            onRequestClose={closeSuccessModal}
        >
            <TouchableWithoutFeedback onPress={closeSuccessModal}>
                <View style={styles.updatePlayerModalContainer}>
                    <KeyboardAvoidingView
                        style={{
                            width: '80%',
                            height: modalHeight,
                            backgroundColor: 'white',
                            padding: 20,
                            borderRadius: 10
                        }}
                    >
                        <View style={styles.mainInnerWrapper}>
                            <Text style={styles.updatePlayerMainText}>Edit {props.activePlayer.username}</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={(name) => updateName(name)}
                        />
                        <TextInput
                            style={styles.input}
                            value={age}
                            onChangeText={(age) => updateAge(age)}
                        />
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={(email) => updateEmail(email)}
                        />
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
                            placeholder="Team 1"
                            value={playerType}
                            onChange={item => {
                                updatePlayerType(item.value);
                            }}
                            renderLeftIcon={() => (
                                <AntDesign style={styles.icon} color="black" name="Safety"
                                           size={20}/>
                            )}
                        />
                        <TouchableOpacity onPress={updatePlayer}>
                            <Text style={styles.updatePlayerButton}>Update</Text>
                        </TouchableOpacity>

                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
export default UpdatePlayerModal
