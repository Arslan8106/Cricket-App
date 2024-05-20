import {Text, View} from "react-native";
import styles from "../../assets/styles/MatchInfoScreenStyle";
import * as React from "react";

const MatchInfoScreen = (props) => {
    const matchDetails = props.matchDetails
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
        <View style={styles.container}>
            <View style={styles.mainHeadingWrapper}>
                <Text style={styles.mainHeading}>Match Info</Text>
            </View>
            <View style={styles.matchDetailsWrapper}>
                <View style={styles.matchDetailsInnerFirstWrapper}>
                    <Text style={styles.detailsHeadingText}>Toss</Text>
                    <Text style={styles.detailsHeadingText}>Venue</Text>
                    <Text style={styles.detailsHeadingText}>Overs</Text>
                    <Text style={styles.detailsHeadingText}>Date</Text>
                    <Text style={styles.detailsHeadingText}>Teams</Text>
                </View>
                <View style={styles.matchDetailsInnerSecondWrapper}>
                    <Text sstyle={styles.matchDetailsText}>{props.battingTeam} opt to bat</Text>
                    <Text style={styles.matchDetailsText}>{matchDetails.venue}</Text>
                    <Text style={styles.matchDetailsText}>{matchDetails.overs}</Text>
                    <Text style={styles.matchDetailsText}>{formatDate(matchDetails.match_date)}, {fetchCurrentTime(matchDetails.match_time)}</Text>
                    <Text style={styles.matchDetailsText}>{props.battingTeam} Vs {props.bowlingTeam}</Text>
                </View>
            </View>

            <View style={styles.mainHeadingWrapper}>
                <Text style={styles.mainHeading}>Players Info</Text>
            </View>
            <View style={styles.matchDetailsWrapper}>
                <View style={styles.matchDetailsInnerFirstWrapper}>
                    <Text style={styles.detailsHeadingText}>Team 1</Text>
                    {props.players.map((player, index) => (
                        <Text key={index} style={styles.matchDetailsText}>{player.label}</Text>
                    ))}
                </View>
                <View style={styles.verticalLine}></View>
                <View style={styles.matchDetailsInnerSecondWrapper}>
                    <Text style={styles.detailsHeadingText}>Team 2</Text>
                    {props.bowlingTeamPlayers.map((player, index) => (
                        <Text key={index} style={styles.matchDetailsText}>{player.label}</Text>
                    ))}
                </View>
            </View>

        </View>

    )
}
export default MatchInfoScreen;
