import {
    Keyboard,
    KeyboardAvoidingView,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import styles from "../assets/styles/StartMatchModalStyle";
import {useEffect, useState} from "react";
import {Dropdown} from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import axios from "axios";
import Toast from "react-native-toast-message";
import _ from "lodash";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors/colors";
import {useNavigation} from "@react-navigation/native";

const StartMatchModal = (props) => {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [modalHeight, setModalHeight] = useState(480);
    const [selectTeams, setSelectTeams] = useState([]);
    const [items, setItems] = useState([]);
    const [battingTeam, setBattingTeam] = useState(null);
    const [bowlingTeam, setBowlingTeam] = useState(null);
    const [players, setPlayers] = useState('')
    const [bowlingTeamPlayers, setBowlingTeamPlayers] = useState('')
    const [striker, setStriker] = useState('')
    const [strikerBowler, setStrikerBowler] = useState('')
    const [nonStriker, setNonStriker] = useState('')
    const [match, setMatch] = useState(false)
    const navigation = useNavigation();
    const API_BASE_URL = "http://10.0.2.2:3000/api/v1";

    useEffect(() => {
        const transformedTeams = items.map((team, index) => ({
            label: team,
            value: team,
        }));
        setSelectTeams(transformedTeams);
    }, [items]);

    const appendItem = (props) => {
        setItems(prevItems => [...prevItems, props.team1, props.team2]);
    };
    useEffect(() => {
        appendItem(props);
    }, [props.team1, props.team2]);
    useEffect(() => {
        if (!_.isEmpty(battingTeam)){
            handleSelectBowlingTeam(items)
            fetchPlayersNames()
        }
    }, [battingTeam, bowlingTeam]);

    const closeSuccessModal = () => {
        props.setActiveMatch(false);
        {
            Keyboard.dismiss
        }
    };
    const fetchPlayersNames = () => {
        if (!_.isEmpty(battingTeam) && !_.isEmpty(bowlingTeam)) {
            axios.post(`${API_BASE_URL}/fetch_players_names`, {batting_team: battingTeam, bowling_team: bowlingTeam})
                .then(response => {
                    setPlayers(response.data.batting_team_players);
                    setBowlingTeamPlayers(response.data.bowling_team_players)
                })
                .catch(err => {
                    Toast.show({
                        type: "error",
                        text1: (err.response && err.response.data.error) || err.message
                    });
                });
        }
    };
    const handleSelectBowlingTeam = (items) => {
        const filteredTeams = items.filter((team) => team !== battingTeam);
        setBowlingTeam(filteredTeams[0])
    };
    const startMatch = () => {
        setMatch(true)
        props.setActiveMatch(false)
       navigation.navigate("StartMatchScreen", {matchDetails: props.matchDetails, matchOvers: props.overs, bowlingTeam: bowlingTeam, striker: striker, nonStriker: nonStriker, battingTeam: battingTeam, players: players, bowlingTeamPlayers: bowlingTeamPlayers, strikerBowler: strikerBowler });
    }

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setIsKeyboardOpen(true);
            setModalHeight(280);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyboardOpen(false);
            setModalHeight(480);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [isKeyboardOpen]);
    return (
        <Modal
            visible={true}
            transparent={true}
            animationType="slide"
            onRequestClose={closeSuccessModal}
        >
                <View style={styles.startMatchModalContainer}>
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
                            <Text style={styles.setupMatchWrapper}>Setup Match For Batting Team</Text>
                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={selectTeams}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="Select Batting Team"
                                value={battingTeam}
                                onChange={item => {
                                    setBattingTeam(item.value);
                                }}
                                renderLeftIcon={() => (
                                    <AntDesign style={styles.icon} color="black" name="Safety" size={20}/>
                                )}
                            />
                            {players && (
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={players}
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Select Stricker"
                                    value={striker}
                                    onChange={item => {
                                        setStriker(item.value);
                                    }}
                                    renderLeftIcon={() => (
                                        <AntDesign style={styles.icon} color="black" name="Safety" size={20}/>
                                    )}
                                />)}
                            {players && (
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={players}
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Select Non Stricker"
                                    value={nonStriker}
                                    onChange={item => {
                                        setNonStriker(item.value);
                                    }}
                                    renderLeftIcon={() => (
                                        <AntDesign style={styles.icon} color="black" name="Safety" size={20}/>
                                    )}
                                />
                            )}
                            {bowlingTeamPlayers && (
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={bowlingTeamPlayers}
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Select Strike Bowler"
                                    value={strikerBowler}
                                    onChange={item => {
                                        setStrikerBowler(item.value);
                                    }}
                                    renderLeftIcon={() => (
                                        <AntDesign style={styles.icon} color="black" name="Safety" size={20}/>
                                    )}
                                />
                            )}
                            {players && striker && nonStriker && strikerBowler &&(
                                <TouchableOpacity onPress={startMatch}>
                                    <MaterialCommunityIcons name="arrow-right-circle" size={95} color={colors.primary}
                                                            style={{paddingTop: 10}}/>
                                </TouchableOpacity>
                            )}
                        </View>
                    </KeyboardAvoidingView>
                </View>
        </Modal>)

}
export default StartMatchModal;
