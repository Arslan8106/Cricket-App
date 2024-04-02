import { Text, View} from "react-native";
import React from "react";
import styles from "../../components/assets/styles/UpcomingMatchesBannerStyle";

const UpcomingMatchesBanner = ({item,team1, team2}, props) => {
    console.log(item.match_date)
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
        </View>
    );
};
export default UpcomingMatchesBanner;
