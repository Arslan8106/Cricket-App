import React, {useState} from 'react';
import axios from 'axios';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import styles from "../../assets/styles/CreateTeamStyle";
import Header from "../../shared/Header";
import {loginFailure, loginSuccess} from "../../../redux/action";
import {connect, useSelector} from "react-redux";
import Toast from "react-native-toast-message";
import colors from "../../assets/colors/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Dropdown} from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

const CreatePlayers = (props) => {
    const [players, setPlayers] = useState([{name: '', age: '', email: '', player_type: '', batting_style: ''}]);
    const API_BASE_URL = "http://10.0.2.2:3000/api/v1";
    const user = useSelector(state => state.user);

    const handleChange = (index, field, value) => {
        const updatedPlayers = [...players];
        updatedPlayers[index][field] = value;
        setPlayers(updatedPlayers);

    };
    const handleToggleField = (index) => {
        const updatedPlayers = [...players];
        updatedPlayers[index].isHidden = !updatedPlayers[index].isHidden;
        setPlayers(updatedPlayers);
    };

    const handleRemovePlayer = (index) => {
        const updatedPlayers = [...players];
        updatedPlayers.splice(index, 1);
        setPlayers(updatedPlayers);
    };

    const handleAddPlayer = () => {
        setPlayers([...players, {name: '', age: '', email: '', player_type: '', batting_style:''}]);
    };

    const handleSave = () => {
        axios.post(`${API_BASE_URL}/create_players`, {players: players, user: user})
            .then(response => {
                Toast.show({type: "success", text1: "Players added Successfully"})
                setPlayers([''])
            })
            .catch(error => {
            });
    };
    const data = [
        { label: 'Batsman', value: 'Batsman' },
        { label: 'Bowler', value: 'Bowler' },
        { label: 'AllRounder', value: 'AllRounder' },
    ];
    const styleData = [
        { label: 'Right Handed', value: 'Right Handed' },
        { label: 'Left Handed', value: 'Left Handed' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <Header title={"Add Players"}/>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <View style={styles.mainWrapper}>
                    <Text style={styles.mainHeading}>Create Player</Text>
                    {players.map((player, index) => (
                        <View key={index} style={styles.createPlayerWrapper}>
                            {!player.isHidden && (
                                <>
                                    <TouchableOpacity onPress={() => handleRemovePlayer(index)} style={styles.closeIcon}>
                                        <MaterialCommunityIcons name="close" color={colors.red} size={25}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.label}>Player {index + 1} Name:</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Name"
                                        value={player.name}
                                        onChangeText={(text) => handleChange(index, 'name', text)}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Age"
                                        value={player.age}
                                        onChangeText={(text) => handleChange(index, 'age', text)}
                                        keyboardType="phone-pad"
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Email"
                                        value={player.email}
                                        onChangeText={(text) => handleChange(index, 'email', text)}
                                        keyboardType="email-address"
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
                                        placeholder="Select Player Type"
                                        value={player.player_type}
                                        onChange={(text) => handleChange(index, 'player_type', text.value)}
                                        renderLeftIcon={() => (
                                            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                                        )}
                                    />
                                    <Dropdown
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={styleData}
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder="Select Style"
                                        value={player.batting_style}
                                        onChange={(text) => handleChange(index, 'batting_style', text.value)}
                                        renderLeftIcon={() => (
                                            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                                        )}
                                    />
                                </>
                            )}
                            {/*{players.length > 1 && players.length > index + 1 &&*/}
                            {/*    <View*/}
                            {/*        style={{*/}
                            {/*            borderBottomColor: colors.darkBlue,*/}
                            {/*            borderBottomWidth: StyleSheet.hairlineWidth,*/}
                            {/*            paddingVertical: "2%",*/}
                            {/*            marginBottom: "4%",*/}
                            {/*            width: "80%",*/}
                            {/*            opacity: 1,*/}
                            {/*            alignSelf: "center"*/}
                            {/*        }}*/}
                            {/*    />*/}
                            {/*}*/}
                        </View>

                    ))}

                </View>

            </ScrollView>
            <View style={styles.buttonsWrapper}>
                <TouchableOpacity onPress={handleAddPlayer}>
                    <Text style={styles.addMoreButton}>Add More</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSave}>
                    <Text style={styles.saveButton}>Save</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default CreatePlayers;
