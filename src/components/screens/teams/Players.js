import styles from "../../assets/styles/PlayersStyle";
import {Image, ScrollView, Text, View} from "react-native";

const Players = (props) => {
    const players = props.players;
    return (
        <View>
            <Text style={styles.mainHeading}>Players</Text>
            {players.map(player => (
                <View style={styles.playerWrapper}>
                    <Image style={styles.playerProfieImage} source={require("../../assets/images/playerProfile.png")} />
                    <View style={styles.innerPlayerInfoWrapper}>
                    <Text style={styles.playerNameText}>{player.username}</Text>
                    <Text style={styles.departmentNameText}>{player.department}</Text>
                    </View>
                </View>
            ))}
        </View>
    )
}
export default Players;
