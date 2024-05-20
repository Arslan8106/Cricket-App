import styles from "../../assets/styles/PlayersStyle";
import {Image, Pressable, Text, View} from "react-native";
import UpdatePlayerModal from "../../modal/UpdatePlayerModal";
import {useState} from "react";
import _ from "lodash";

const Players = (props) => {
    const players = props.players;
    const [activePlayer, setActivePlayer] = useState(null);
    const [updateModalVisible, setUpdateModalVisible] = useState(false);
    const setPlayer = (player) => {
        setActivePlayer(player);
        setUpdateModalVisible(true);
    };
    return (
        <View>
            <Text style={styles.mainHeading}>Players</Text>
            {players && players.map(player => (
                <Pressable onPress={() => {
                    !_.isEmpty(player) ? setPlayer(player) : ''
                }}>
                <View style={styles.playerWrapper}>
                    {player.player_type === "Bowler" ? (
                    <Image style={styles.playerProfieImage} source={require("../../assets/images/bowler.png")} />
                    ): (
                        <Image style={styles.playerProfieImage} source={require("../../assets/images/playerProfile.png")} />

                    )
                    }
                    <View style={styles.innerPlayerInfoWrapper}>
                    <Text style={styles.playerNameText}>{player.username}</Text>
                    <Text style={styles.departmentNameText}>{player.player_type}</Text>
                    </View>
                </View>
                </Pressable>

            ))}
            {activePlayer &&
            <UpdatePlayerModal activePlayer={activePlayer} updateModalVisisble={updateModalVisible} setUpdateModalVisible={setUpdateModalVisible}/>
            }

        </View>
    )
}
export default Players;
