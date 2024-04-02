import { Image, Text, View } from "react-native";
import React from "react";
import styles from "../../components/assets/styles/MatchesBannerStyle";
// import { imageUrl } from "../api/Actions";

const MatchesBanner = ({ item }, props) => {
  // const start_date = moment(item.discount_start_date).format("DD MMMM");
  // const end_date = moment(item.discount_end_date).format("DD MMMM");
  // const percentage = ((item.same_week_price - item.next_week_price) / item.same_week_price) * 100;
  return (
      <View style={[styles.discountItemWrapper]}>
        <View style={styles.mainCardWrapper}>
          <Text style={styles.mainMatchHeading}>{item.matchDetail}</Text>
          <View style={styles.teamAStylingWrapper}>
            <Text style={styles.teamNames}>{item.teamA.name}</Text>
            <Text style={styles.teamStats}>{item.teamA.score}-{item.teamA.wickets} ({item.teamA.overs})</Text>
          </View>
          <View style={styles.teamBStylingWrapper}>
            <Text style={styles.teamNames}>{item.teamB.name}</Text>
            <Text style={styles.teamStats}>{item.teamB.score}-{item.teamB.wickets} ({item.teamB.overs})</Text>
          </View>
          <Text style={styles.mainMatchHeading}>{item.description}</Text>

        </View>
          <View style={styles.bottomBar}>
              <Text style={styles.bottomBarText}>Matches</Text>
          </View>
      </View>
  );
};
export default MatchesBanner;
