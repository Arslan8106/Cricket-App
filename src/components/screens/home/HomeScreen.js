import {
    Button,
    SafeAreaView,
    StatusBar,
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    TextInput
} from "react-native";
import {logout} from "../../../redux/action";
import {connect} from "react-redux";
import Header from "../../shared/Header";
import colors from "../../assets/colors/colors";
import matchesData from "../../assets/data/matchesData";
import MatchesBanner from "../../cards/MatchesBanner";
import {useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../../assets/styles/HomeScreenStyle"
import axios from "axios";
import Toast from "react-native-toast-message";
import MessageModal from "../../modal/MessageModal";

const HomeScreen = (props) => {
    const [isPressed, setIsPressed] = useState(false);

    const openMessageModal = () => {
        setIsPressed(true)
    }

    const handlePress = () => {
        props.navigation.navigate("CreateTeam")
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <Header title={"Home"}/>
            <View style={styles.mainWrapper}>
                <Text style={styles.mainHeading}>Matches</Text>
                <FlatList
                    data={matchesData}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    renderItem={({item}) =>
                        <TouchableOpacity onPress={() => props.navigation.navigate("MatchesScreen")}>
                            <MatchesBanner item={item}/>
                        </TouchableOpacity>
                    }
                />
                <View
                    style={{
                        borderBottomColor: colors.lightGrey,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        paddingTop: "5%",
                        marginBottom: "2%",
                    }}
                />
                <Text style={styles.newsHeading}>News </Text>
                <View style={styles.newsWrapper}>
                    <Text style={styles.newsTextHeading}>Rules for creating matches</Text>
                    <View style={styles.newsContainer}>
                        <View style={styles.bullet}/>
                        <Text style={styles.text}>First of all sports coordinator will create team.</Text>
                    </View>
                    <View style={styles.newsContainer}>
                        <View style={styles.bullet}/>
                        <Text style={styles.secondText}>After creation of team, captain will add players.</Text>
                    </View>
                    <View style={styles.newsContainer}>
                        <View style={styles.bullet}/>
                        <Text style={styles.secondText}>Captain will send any message to players.</Text>
                    </View>
                    <View style={styles.newsContainer}>
                        <View style={styles.bullet}/>
                        <Text style={styles.secondText}>Admin can create matches based on available teams.</Text>
                    </View>
                    <View style={styles.newsContainer}>
                        <View style={styles.bullet}/>
                        <Text style={styles.secondText}>Overs selection and teams selection shouldn't be fixed.</Text>
                    </View>
                    <View style={styles.newsContainer}>
                        <View style={styles.bullet}/>
                        <Text style={styles.secondText}>Admin can set as many overs as he can in match.</Text>
                    </View>
                    {/*<View style={styles.signOutWrapper}>*/}
                    {/*    <Text onPress={() => props.logout()} style={styles.createTeamText}>Sign out</Text>*/}
                    {/*</View>*/}
                    {/*<TouchableOpacity onPress={handlePress}>*/}
                    {/*    <View style={styles.createTeamWrapper}>*/}
                    {/*        <MaterialCommunityIcons name="plus" size={30} color={colors.primary}/>*/}
                    {/*        <Text style={styles.createTeamText}>Create Team</Text>*/}
                    {/*    </View>*/}
                    {/*</TouchableOpacity>*/}
                </View>
                <TouchableOpacity onPress={openMessageModal}>
                    <View style={styles.sendWhatsappMessageWrapper}>
                        <MaterialCommunityIcons name="email" size={35} color={colors.white}/>
                        <Text style={styles.sendMessageButtonText}>Send Message</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {isPressed &&
                <MessageModal isPressed={isPressed} setIsPressed={setIsPressed}/>
            }
        </SafeAreaView>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated,
        user: state.user,
    };
};

const mapDispatchToProps = {
    logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
