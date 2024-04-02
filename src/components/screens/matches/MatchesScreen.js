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

const MatchesScreen = (props) => {
    const [createMatchModalVisible, setCreateMatchModalVisible] = useState(false)
    const [isLoad, setIsLoad] = useState(false)
    const [fetchTeams, setFetchTeams] = useState('')
    const [matchesData, setMatchesData] = useState('')
    const [refreshing, setRefreshing] = useState(false);
    const API_BASE_URL = "http://10.0.2.2:3000/api/v1";

    const handlePress = () => {
        setCreateMatchModalVisible(true)
    }

    const loadMatches = () => {
        axios.get(`${API_BASE_URL}/matches`)
            .then(response => {
                setMatchesData(response.data.matchesData);
                setFetchTeams(response.data.teams_data);
                setIsLoad(true);
                console.log('Data fetched successfully:', response.data.teams_data);
            }).catch(err => Toast.show({
            type: "error",
            text1: (err.response && err.response.data.error) || err.message
        }));
    };

    const onRefresh = () => {
        loadMatches()
    }

    useEffect(() => {
        loadMatches()
    }, []);

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
                    {matchesData.map(item => (
                        <UpcomingMatchesBanner
                            item={item}
                            key={item.id}
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

            <TouchableOpacity onPress={handlePress}>
                <View style={styles.createMatchButtonWrapper}>
                    <MaterialCommunityIcons name="plus" size={30} color={colors.primary}/>
                    <Text style={styles.createMatchText}>Create Match</Text>
                </View>
            </TouchableOpacity>
            {createMatchModalVisible && <CreateMatchModal createMatchModalVisible={createMatchModalVisible}
                                                              setCreateMatchModalVisible={setCreateMatchModalVisible}/>}
        </SafeAreaView>
    )
}
export default MatchesScreen;
