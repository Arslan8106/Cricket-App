import {Image, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import styles from "../../components/assets/styles/MatchesBannerStyle";
import axios from "axios";
import Toast from "react-native-toast-message";
// import { imageUrl } from "../api/Actions";

const MatchesBanner = (props) => {

    const item = props.item;
    const team1 = props.team1
    const team2 = props.team2
    const team1Stats = props.team1Stats
    const team2Stats = props.team2Stats


    // const start_date = moment(item.discount_start_date).format("DD MMMM");
    // const end_date = moment(item.discount_end_date).format("DD MMMM");
    // const percentage = ((item.same_week_price - item.next_week_price) / item.same_week_price) * 100;
    return (
        team1Stats && team2Stats && (
            <View style={[styles.discountItemWrapper]}>
                <View style={styles.mainCardWrapper}>
                    <Text style={styles.mainMatchHeading}>UOE Sports Gala {item.match_no}th match</Text>
                    <View style={styles.teamAStylingWrapper}>
                        <Text style={styles.teamNames}>{team1.name}</Text>
                        <Text
                            style={styles.teamStats}>{team1Stats.team_score}-{team1Stats.wickets} ({team1Stats.overs})</Text>
                    </View>
                    <View style={styles.teamBStylingWrapper}>
                        <Text style={styles.teamNames}>{team2.name}</Text>
                        <Text style={styles.teamStats}>{team2Stats.team_score}-{team2Stats.wickets} ({team2Stats.overs})</Text>
                    </View>
                    <Text style={styles.mainMatchHeading}>{item.status}</Text>

                </View>
                <View style={styles.bottomBar}>
                    <Text style={styles.bottomBarText}>Matches</Text>
                </View>
            </View>
        ));
};
export default MatchesBanner;
