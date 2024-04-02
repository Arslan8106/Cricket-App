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
import {connect} from "react-redux";
import Toast from "react-native-toast-message";
import colors from "../../assets/colors/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CreatePlayers = (props) => {
    const [players, setPlayers] = useState([{name: '', contact_number: '', email: ''}]);
    const API_BASE_URL = "http://10.0.2.2:3000/api/v1";

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
        setPlayers([...players, {name: '', contact_number: '', email: ''}]);
    };

    const handleSave = () => {
        axios.post(`${API_BASE_URL}/create_players`, {players: players, user: props.user["user"]})
            .then(response => {
                Toast.show({type: "success", text1: "Players added Successfully"})
                console.log('Data saved successfully:', response.data);
                setPlayers([''])
            })
            .catch(error => {
                console.error('Error saving data:', error);
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <Header title={"Add Players"}/>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <View style={styles.mainWrapper}>
                    <Text style={styles.mainHeading}>Create Player</Text>
                    {players.map((player, index) => (
                        <View key={index}>
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
                                    <Text style={styles.label}>Contact Number:</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Contact Number"
                                        value={player.contact_number}
                                        onChangeText={(text) => handleChange(index, 'contact_number', text)}
                                        keyboardType="phone-pad"
                                    />
                                    <Text style={styles.label}>Email:</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Email"
                                        value={player.email}
                                        onChangeText={(text) => handleChange(index, 'email', text)}
                                        keyboardType="email-address"
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
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
        user: state.user,
    };
};
const mapDispatchToProps = {
    loginSuccess,
    loginFailure
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatePlayers);
