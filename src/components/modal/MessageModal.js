import {
    Modal,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from 'react-native';
import styles from "../assets/styles/MessageModalStyle";
import axios from "axios";
import Toast from "react-native-toast-message";
import {useEffect, useState} from "react";

const MessageModal = (props) => {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const API_BASE_URL = "http://10.0.2.2:3000/api/v1";
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [modalHeight, setModalHeight] = useState(280);
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setIsKeyboardOpen(true);
            setModalHeight(280);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyboardOpen(false);
            setModalHeight(280);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [isKeyboardOpen]);
    const sendMessage = () => {
        axios.post(`${API_BASE_URL}/send-email`,
            {message: email, subject: subject})
            .then(response => {
                Toast.show({type: "success", text1: "Message sent Successfully"})
                setEmail('');
                setSubject('')
                props.setIsPressed(false)
                console.log('Data saved successfully:', response.data.team);
            }).catch(err => Toast.show({
            type: "error",
            text1: (err.response && err.response.data.error) || err.message
        }));

    };
    const closeSuccessModal = () => {
        props.setIsPressed(false);
        {Keyboard.dismiss}
    };
    return (
        <Modal
            visible={true}
            transparent={true}
            animationType="slide"
            onRequestClose={closeSuccessModal}
        >
            <TouchableWithoutFeedback onPress={closeSuccessModal}>
                <View style={styles.successModalContainer}>
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
                            <Text style={styles.congrulationsBookingText}>Type message to send</Text>
                            <TextInput
                                style={styles.subjectInput}
                                placeholder="Enter Subject"
                                value={subject}
                                onChangeText={(subject) => setSubject(subject)}
                            />
                            <TextInput
                                style={styles.input}
                                multiline
                                numberOfLines={4}
                                placeholder="Enter message"
                                value={email}
                                onChangeText={(email) => setEmail(email)}
                            />
                            <TouchableOpacity onPress={sendMessage}>
                                <View style={styles.sendWhatsappMessageWrapper}>
                                    <Text style={styles.sendMessageText}>Send Message</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
export default MessageModal;
