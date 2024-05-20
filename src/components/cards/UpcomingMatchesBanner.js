import {Pressable, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import styles from "../../components/assets/styles/UpcomingMatchesBannerStyle";
import _ from "lodash";
import StartMatchModal from "../modal/StartMatchModal";
import {connect} from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors/colors";

const UpcomingMatchesBanner = ({item,team1, team2, user, deleteMatch}) => {

    const [updateModalVisible, setUpdateModalVisible] = useState(false);
    const [activeMatch, setActiveMatch] = useState(null);
    const userCheck = user["user"]["user"]["user"]["role"] === "admin"

    let numberOfDays = 0;
    const startMatch = (match) => {
        setActiveMatch(match);
        setUpdateModalVisible(true);
    };
    const fetchCurrentTime = (timestampString) => {
        const timestamp = new Date(timestampString);
        const hours = timestamp.getUTCHours();
        const minutes = timestamp.getUTCMinutes();
        const amPm = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${formattedMinutes} ${amPm}`;
    };
    const formatDate = (dateString) => {
        const options = {weekday: 'short', day: '2-digit', month: 'short'};
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    };
    return (
        < View style={{flexDirection: "column"}}>
            {userCheck &&
            <TouchableOpacity onPress={() => deleteMatch(item.id)} style={styles.deleteMatchIcon}>
                <MaterialCommunityIcons name="close" color={colors.red} size={30}
                />
            </TouchableOpacity>
            }
            <Pressable onPress={() => {
                !_.isEmpty(item) ? startMatch(item) : ''
            }}>
            <View style={[styles.discountItemWrapper]}>
                <View style={styles.mainCardWrapper}>
                    <Text style={styles.mainMatchHeading}>
                        {item.match_no === 1 ? '1st Match' : item.match_no === 2 ? '2nd Match' : item.match_no === 3 ? '3rd Match' : `${item.match_no}th Match`} {''}
                        UOE Sports Tournament</Text>
                    <View style={styles.teamAStylingWrapper}>
                        <Text style={styles.teamNames}>{team1.name}</Text>
                        <Text
                            style={styles.teamStats}>0-0 ({item.overs})</Text>
                    </View>
                    <View style={styles.teamBStylingWrapper}>
                        <Text style={styles.teamNames}>{team2.name}</Text>
                        <Text
                            style={styles.teamStats}>0-0 ({item.overs})</Text>
                    </View>
                    <View style={styles.timeVenueWrapper}>
                        <Text
                            style={styles.mainMatchHeading}>{formatDate(item.match_date)}, {fetchCurrentTime(item.match_time)}</Text>
                        <Text style={styles.matchVenueHeading}>{item.venue}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomBar}>
                <Text style={styles.bottomBarText}>Matches</Text>
            </View>
            </Pressable>
            {activeMatch && userCheck &&
                <StartMatchModal setActiveMatch={setActiveMatch} activeMatch={activeMatch} team1={team1.name} team2={team2.name} overs={item.overs} matchDetails={item}/>
            }
        </View>
    );
};
const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated,
        user: state.user,
    };
};

export default connect(mapStateToProps)(UpcomingMatchesBanner);
