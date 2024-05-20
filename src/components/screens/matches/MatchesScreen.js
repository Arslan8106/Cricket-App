import {
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import styles from "../../assets/styles/MatchesScreenStyle";
import Header from "../../shared/Header";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../assets/colors/colors";
import {useEffect, useState} from "react";
import CreateMatchModal from "../../modal/CreateMatchModal";
import UpcomingMatchesBanner from "../../cards/UpcomingMatchesBanner";
import axios from "axios";
import Toast from "react-native-toast-message";
import {connect} from "react-redux";

const MatchesScreen = (props) => {
    const [createMatchModalVisible, setCreateMatchModalVisible] = useState(false)
    const [isLoad, setIsLoad] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)
    const [fetchTeams, setFetchTeams] = useState('')
    const [matchesData, setMatchesData] = useState('')
    const [refreshing, setRefreshing] = useState(false);
    const API_BASE_URL = "http://10.0.2.2:3000/api/v1";
    const user = props.user["user"]["user"]["user"]["role"] === "admin"

    const handlePress = () => {
        setCreateMatchModalVisible(true)
    }
    useEffect(() => {
        loadMatches()
    }, [createMatchModalVisible]);

    const loadMatches = () => {
        axios.get(`${API_BASE_URL}/matches`)
            .then(response => {
                setMatchesData(response.data.matchesData);
                setFetchTeams(response.data.teams_data);
                setIsLoad(true);
                setIsDeleted(false);
            }).catch(err => Toast.show({
            type: "error",
            text1: (err.response && err.response.data.error) || err.message
        }));
    };
    const deleteMatch = (item) => {
        axios.delete(`${API_BASE_URL}/matches/${item}`)
            .then(response => {
                if (response.data.success) {
                    setIsDeleted(true);
                    Toast.show({type: "success", text1: "Match Deleted Successfully"})
                }
            }).catch(err => Toast.show({
            type: "error",
            text1: (err.response && err.response.data.error) || err.message
        }));
    }

    const onRefresh = () => {
        loadMatches()
    }

    useEffect(() => {
        loadMatches()
    }, []);
    useEffect(() => {
        loadMatches()
    }, [isDeleted]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <Header title={"Matches"}/>
            <Text style={styles.mainHeading}>Upcoming Matches</Text>
            <ScrollView contentInsetAdjustmentBehavior={"automatic"} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                {isLoad && (
                <View style={styles.mainWrapper}>
                    {matchesData && matchesData.map(item => (
                        <UpcomingMatchesBanner
                            item={item}
                            key={item.id}
                            deleteMatch={deleteMatch}
                            team1={[...fetchTeams].reverse().find(
                                fetch_team_1 => item.team1_id === fetch_team_1.id,
                            )}
                            team2={[...fetchTeams].reverse().find(
                                fetch_team_2 => item.team2_id === fetch_team_2.id,
                            )}
                        />
                        ))}
                </View>
                    )}
            </ScrollView>
            {user &&
            <TouchableOpacity onPress={handlePress}>
                <View style={styles.createMatchButtonWrapper}>
                    <MaterialCommunityIcons name="plus" size={30} color={colors.primary}/>
                    <Text style={styles.createMatchText}>Create Match</Text>
                </View>
            </TouchableOpacity>
            }
            {createMatchModalVisible && <CreateMatchModal createMatchModalVisible={createMatchModalVisible}
                                                              setCreateMatchModalVisible={setCreateMatchModalVisible}/>}
        </SafeAreaView>
    )
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated,
        user: state.user,
    };
};

export default connect(mapStateToProps)(MatchesScreen);
