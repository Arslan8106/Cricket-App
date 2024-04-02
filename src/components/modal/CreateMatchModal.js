import {
    Modal,
    TouchableWithoutFeedback,
    Button,
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Keyboard, KeyboardAvoidingView
} from "react-native";
import styles from "../../components/assets/styles/CreateMatchModalStyle";
import colors from "../assets/colors/colors";
import {useEffect, useState} from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AntDesign from "@expo/vector-icons/AntDesign";
import {Dropdown} from "react-native-element-dropdown";
import axios from "axios";
import Toast from "react-native-toast-message";


const CreateMatchModal = (props) => {
    const [venue, setVenue] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [overs, setOvers] = useState('')
    const [matchNo, setMatchNo] = useState('')
    const [team1, setTeam1] = useState('')
    const [team2, setTeam2] = useState('')
    const [fetchTeams, setFetchTeams] = useState('')
    const [isLoad, setIsLoad] = useState(false)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [modalHeight, setModalHeight] = useState(590);
    const API_BASE_URL = "http://10.0.2.2:3000/api/v1";

    useEffect(() => {
        loadTeams()
    }, []);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setIsKeyboardOpen(true);
            setModalHeight(480);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyboardOpen(false);
            setModalHeight(590);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [isKeyboardOpen]);
    const loadTeams = () => {
        axios.get(`${API_BASE_URL}/matches`)
            .then(response => {
                setFetchTeams(response.data.teams);
                setIsLoad(true);
                console.log('Data fetched successfully:', response.data.teams);
            }).catch(err => Toast.show({
            type: "error",
            text1: (err.response && err.response.data.error) || err.message
        }));
    };

    const onConfirm = () => {
        axios.post(`${API_BASE_URL}/matches`,
            {
                venue: venue,
                match_time: time,
                match_date: date,
                overs: overs,
                match_no: matchNo,
                team1_id: team1,
                team2_id: team2
            })
            .then(response => {
                Toast.show({type: "success", text1: "Message sent Successfully"})
                setVenue('');
                setDate('')
                setTime('')
                setOvers('')
                setMatchNo('')
                setTeam1('')
                setTeam2('')
                props.setCreateMatchModalVisible(false);
                props.setIsPressed(false)
                console.log('Data saved successfully:', response.data.team);
            }).catch(err => Toast.show({
            type: "error",
            text1: (err.response && err.response.data.error) || err.message
        }));

    };
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDate(date.toLocaleDateString())
        hideDatePicker();
    };
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleTimeConfirm = (time) => {
        console.warn("A date has been picked: ", time);
        setTime(time.toLocaleTimeString())
        hideTimePicker();
    };
    const closeModal = () => {
        props.setCreateMatchModalVisible(false);
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                transparent
                animationType="slide"
                visible={true}
                onRequestClose={() => {
                    closeModal();
                }}>

                <TouchableWithoutFeedback onPress={() => closeModal()}>
                    <View style={styles.matchModalContainer}>

                        <TouchableWithoutFeedback onPress={() => {
                        }}>
                            <View style={styles.bookingModalContent}>
                                <KeyboardAvoidingView
                                    style={{
                                        height: modalHeight,
                                        backgroundColor: 'white',
                                        borderRadius: 10
                                    }}
                                >
                                    <ScrollView contentInsetAdjustmentBehavior="automatic">
                                        <Text style={styles.mainLabel}>Enter Match Details</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Match No."
                                            value={matchNo}
                                            keyboardType='numeric'
                                            onChangeText={(matchNo) => setMatchNo(matchNo)}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Venue"
                                            value={venue}
                                            onChangeText={(venue) => setVenue(venue)}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Overs"
                                            value={overs}
                                            keyboardType='numeric'
                                            onChangeText={(overs) => setOvers(overs)}
                                        />
                                        <View
                                            style={{
                                                borderBottomColor: colors.lightGrey,
                                                borderBottomWidth: StyleSheet.hairlineWidth,
                                                paddingTop: "5%",
                                                marginBottom: "2%",
                                            }}
                                        />
                                        <View style={styles.teamSelectionWrapper}>
                                            <Text style={styles.selectTeamLabel}>Select Teams</Text>
                                            <View style={styles.opponentWrapper}>
                                                {isLoad && (<Dropdown
                                                    style={styles.dropdown}
                                                    placeholderStyle={styles.placeholderStyle}
                                                    selectedTextStyle={styles.selectedTextStyle}
                                                    inputSearchStyle={styles.inputSearchStyle}
                                                    iconStyle={styles.iconStyle}
                                                    data={fetchTeams}
                                                    maxHeight={300}
                                                    labelField="label"
                                                    valueField="value"
                                                    placeholder="Team 1"
                                                    value={team1}
                                                    onChange={item => {
                                                        setTeam1(item.value);
                                                    }}
                                                    renderLeftIcon={() => (
                                                        <AntDesign style={styles.icon} color="black" name="Safety"
                                                                   size={20}/>
                                                    )}
                                                />)}
                                                <Text>Vs</Text>
                                                {isLoad && (<Dropdown
                                                    style={styles.dropdown}
                                                    placeholderStyle={styles.placeholderStyle}
                                                    selectedTextStyle={styles.selectedTextStyle}
                                                    inputSearchStyle={styles.inputSearchStyle}
                                                    iconStyle={styles.iconStyle}
                                                    data={fetchTeams}
                                                    maxHeight={300}
                                                    labelField="label"
                                                    valueField="value"
                                                    placeholder="Team 2"
                                                    value={team2}
                                                    onChange={item => {
                                                        setTeam2(item.value);
                                                    }}
                                                    renderLeftIcon={() => (
                                                        <AntDesign style={styles.icon} color="black" name="Safety"
                                                                   size={20}/>
                                                    )}
                                                />)}
                                            </View>
                                        </View>
                                        <Text style={styles.dateTimeStyle}>{date}</Text>
                                        <Button title="Select Date" onPress={showDatePicker} color={colors.darkBlue}/>
                                        <DateTimePickerModal
                                            isVisible={isDatePickerVisible}
                                            mode="date"
                                            onConfirm={handleConfirm}
                                            onCancel={hideDatePicker}
                                        />
                                        <Text style={styles.dateTimeStyle}>{time}</Text>
                                        <Button title="Select Time" onPress={showTimePicker} color={colors.darkBlue}/>
                                        <DateTimePickerModal
                                            isVisible={isTimePickerVisible}
                                            mode="time"
                                            onConfirm={handleTimeConfirm}
                                            onCancel={hideTimePicker}
                                        />
                                        <View
                                            style={{
                                                borderBottomColor: colors.lightGrey,
                                                borderBottomWidth: StyleSheet.hairlineWidth,
                                                paddingTop: "5%",
                                                marginBottom: "5%",
                                            }}
                                        />
                                        <TouchableWithoutFeedback onPress={onConfirm}>
                                        <View style={styles.createMatchWrapper}>
                                            <Text style={styles.createMatchText}>
                                                Create Match
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    </ScrollView>

                                </KeyboardAvoidingView>
                            </View>
                        </TouchableWithoutFeedback>

                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}
export default CreateMatchModal;
