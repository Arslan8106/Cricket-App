import {Image, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import styles from "../../components/assets/styles/MatchesBannerStyle";
import axios from "axios";
import Toast from "react-native-toast-message";

const MatchesBanner = (props) => {

    const item = props.item;
    return (
            <View style={[styles.discountItemWrapper]}>
                <View style={styles.mainCardWrapper}>
                    <Text style={styles.mainMatchHeading}>UOE Sports Gala {item.match_no}th match</Text>
                    <View style={styles.teamAStylingWrapper}>
                        <Text style={styles.teamNames}>{item.team1_name}</Text>
                        <Text
                            style={styles.teamStats}>{item.team1_score}-{item.team1_wickets} ({item.team1_overs})</Text>
                    </View>
                    <View style={styles.teamBStylingWrapper}>
                        <Text style={styles.teamNames}>{item.team2_name}</Text>
                        <Text style={styles.teamStats}>{item.team2_score}-{item.team2_wickets} ({item.team2_overs})</Text>
                    </View>
                    <Text style={styles.mainMatchHeading}>{item.status}</Text>

                </View>
                <View style={styles.bottomBar}>
                    <Text style={styles.bottomBarText}>Matches</Text>
                </View>
            </View>
    )

};
export default MatchesBanner;
