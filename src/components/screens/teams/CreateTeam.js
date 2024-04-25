import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
    Button, RefreshControl,
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
import Toast from "react-native-toast-message";
import {loginFailure, loginSuccess} from "../../../redux/action";
import {connect} from "react-redux";
import _ from "lodash";
import colors from "../../assets/colors/colors";
import Players from "./Players";


const CreateTeam = (props) => {
    const [teamName, setTeamName] = useState('')
    const [captainName, setCaptainName] = useState('')
    const [team, setTeam] = useState('')
    const [players, setPlayers] = useState('')
    const [isLoad, setIsLoad] = useState(false)
    const [isNotLoad, setIsNotLoad] = useState(false)
    const [refreshing, setRefreshing] = useState(false);
    const API_BASE_URL = "http://10.0.2.2:3000/api/v1";

    useEffect(() => {
        fetchTeam()
    }, []);

    const fetchTeam = () => {
        axios.post(`${API_BASE_URL}/fetch_team`, props.user["user"]).then(response => {
            console.log('Data', response.data);
            setTeam(response.data.team)
            setPlayers(response.data.players)
            setIsLoad(true)
        }).catch(error => {
            setTeam('');
            setIsNotLoad(true);
        });
    }
    const handleSave = () => {
        axios.post(`${API_BASE_URL}/teams`,
            {team: {name: teamName, captain: captainName, user: props.user["user"]}})
            .then(response => {
                Toast.show({type: "success", text1: "Team created Successfully"})
                setCaptainName('');
                setTeamName('');
                setTeam(response.data.team)
                setIsLoad(true)
                console.log('Data saved successfully:', response.data.team);
            }).catch(err => Toast.show({
            type: "error",
            text1: (err.response && err.response.data.error) || err.message
        }));
    };
    const onRefresh = () => {
        fetchTeam()
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <Header title={"Team"}/>
            <ScrollView contentInsetAdjustmentBehavior={"automatic"} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <View style={styles.mainWrapper}>
                    {isNotLoad && _.isEmpty(team) && (
                        <View>
                            <Text style={styles.mainHeading}>Create Team</Text>
                            <View>
                                <Text style={styles.label}>Team Name:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter Team Name"
                                    value={teamName}
                                    onChangeText={(teamName) => setTeamName(teamName)}
                                />
                                <Text style={styles.label}>Captain Name:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter Captain Name"
                                    value={captainName}
                                    onChangeText={(captainName) => setCaptainName(captainName)}
                                />
                            </View>
                            <TouchableOpacity onPress={handleSave}>
                                <Text style={styles.saveButton}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    {isLoad && !isNotLoad && !_.isEmpty(team) && (
                        <>
                            <Text style={styles.mainHeading}>Your Team</Text>

                            <View style={styles.yourTeamWrapper}>
                                <View style={styles.teamWrapper}>
                                    <Text style={styles.captainNameText}>Team Name:</Text>
                                    <Text style={styles.captainNameText}>{team.name}</Text>
                                </View>
                                <View style={styles.teamWrapper}>
                                    <Text style={styles.captainNameText}>Captain Name:</Text>
                                    <Text style={styles.captainNameText}>{team.captain}</Text>
                                </View>

                            </View>
                            <View
                                style={{
                                    borderBottomColor: colors.darkBlue,
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                    paddingVertical: "2%",
                                    width: "80%",
                                    opacity: 1,
                                    alignSelf: "center"
                                }}
                            />
                            <Players players={players}/>
                        </>
                    )}
                </View>
            </ScrollView>

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
export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam);

