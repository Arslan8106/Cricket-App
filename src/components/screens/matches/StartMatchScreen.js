import {BackHandler, SafeAreaView, StatusBar, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {useIsFocused, useNavigation, useRoute} from "@react-navigation/native";
import styles from "../../assets/styles/StartMatchScreenStyle";
import Header from "../../shared/Header";
import Buttons from "../../shared/Buttons";
import colors from "../../assets/colors/colors";
import ConfirmationModal from "../../modal/ConfirmationModal";
import {useEffect, useState} from "react";
import {SceneMap, TabView} from "react-native-tab-view";
import * as React from 'react';
import ChangeBowlerModal from "../../modal/ChangeBowlerModal";
import Toast from "react-native-toast-message";
import MatchInfoScreen from "./MatchInfoScreen";
import axios from "axios";
import NewPlayerSelectModal from "../../modal/NewPlayerSelectModal";
import _ from "lodash";

const StartMatchScreen = (props) => {
    const route = useRoute();
    const {striker} = route.params;
    const {strikerBowler} = route.params;
    const {nonStriker} = route.params;
    const {battingTeam} = route.params;
    const {bowlingTeam} = route.params;
    const {bowlingTeamPlayers} = route.params;
    const {players} = route.params;
    console.log("HHH",players)

    const {matchOvers} = route.params;
    const {matchDetails} = route.params;
    const [batting, setBatting] = useState(battingTeam);
    const [bowling, setBowling] = useState(bowlingTeam);
    const [zeroScore, setZero] = useState(false);
    const [battingPlayers, setBattingPlayers] = useState(players);
    const [bowlingPlayers, setBowlingPlayers] = useState(bowlingTeamPlayers);
    const [firstInningsData, setFirstInningsData] = useState(null);
    const [firstInningsScore, setFirstInningsScore] = useState(null)
    const [finishFirstInnings, setFinishFirstInnings] = useState(false);
    const [finishSecondInnings, setFinishSecondInnings] = useState(false);
    const [startSecondInnings, setStartSecondInnings] = useState(false)
    const [secondInningsStriker, setSecondInningsStriker] = useState(false)
    const [newPlayer, setNewPlayer] = useState(false);
    const [undoScore, setUndoScore] = useState(0);
    const [startScore, setStartScore] = useState(false);
    const [undo, setUndo] = useState(false);
    const [teamScore, setTeamScore] = useState(0);
    const [changeBowler, setChangeBowler] = useState(false);
    const [bowler, setBowler] = useState(strikerBowler);
    const [strikerScore, setStrikerScore] = useState(0);
    const [changeStriker, setChangeStriker] = useState(true);
    const [changeNonStriker, setChangeNonStriker] = useState(false);
    const [strikerBatsman, setStrikerBatsman] = useState(striker);
    const [nonStrikerBatsman, setNonStrikerBatsman] = useState(nonStriker);
    const [strikerBalls, setStrikerBalls] = useState(0);
    const [nonStrikerBalls, setNonStrikerBalls] = useState(0);
    const [nonStrikerScore, setNonStrikerScore] = useState(0);
    const [wickets, setWickets] = useState(0);
    const [bowlerWicket, setBowlerWicket] = useState(0)
    const [overs, setOvers] = useState(0);
    const [oversScore, setOversScore] = useState([]);
    const [balls, setBalls] = useState(0);
    const [wideNoBall, setWideNoBall] = useState(false);
    const [partnership, setPartnership] = useState(0);
    const [partnershipScore, setPartnershipScore] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const API_BASE_URL = "http://10.0.2.2:3000/api/v1";
    const [routes] = React.useState([
        {key: 'first', title: 'Live'},
        {key: 'second', title: 'Info'},
        // {key: 'third', title: 'Info'},
    ]);
    const isFocused = useIsFocused();
    const navigation = useNavigation();

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            if (isFocused) {
                setIsVisible(true);
                return true;
            }
            return false;
        });

        return () => backHandler.remove();
    }, [isFocused]);

    const handleCancel = () => {
        setIsVisible(false);
    };

    const handleConfirm = () => {
        navigation.goBack();
    };

    const resetStates = () => {
        setBatting(bowlingTeam);
        setBowling(batting);
        setNewPlayer(false);
        setUndoScore(0);
        setUndo(false);
        setTeamScore(0);
        setChangeBowler(true);
        setBowler(strikerBowler);
        setStrikerScore(0);
        setChangeStriker(true);
        setChangeNonStriker(false);
        setStrikerBatsman(striker);
        setNonStrikerBatsman(nonStriker);
        setStrikerBalls(0);
        setNonStrikerBalls(0);
        setNonStrikerScore(0);
        setWickets(0);
        setBowlerWicket(0)
        setOvers(0);
        setOversScore([]);
        setBalls(0);
        setWideNoBall(false);
        setPartnership(0);
        setPartnershipScore(0);
        setFinishFirstInnings(true);
        setFirstInningsScore(firstInningsData.team1_score)
        setStartSecondInnings(true);
        setBattingPlayers(bowlingTeamPlayers);
        setBowlingPlayers(players);
        setZero(false);
        setStartScore(false);
    }

    const wicketsUpdater = () => {
        setWickets(wickets + 1)
        setBowlerWicket(bowlerWicket + 1)
        // setBalls(balls => balls + 1);
        setPartnership(0)
        setPartnershipScore(teamScore)
        addOver("W");
        if (changeStriker) {
            setStrikerScore(0);
            setStrikerBalls(0);
        } else if (changeNonStriker) {
            setNonStrikerScore(0);
            setNonStrikerBalls(0);
        }
        if (balls === 5) {
            setOvers(overs => overs + 1);
            setBalls(0);
        }
    }
    const retire = () => {
        setPartnership(0)
        setPartnershipScore(teamScore)
        if (changeStriker) {
            setStrikerScore(0);
            setStrikerBalls(0);
        } else if (changeNonStriker) {
            setNonStrikerScore(0);
            setNonStrikerBalls(0);
        }
    }
    const wideNoBallScoreUpdater = (score, type) => {
        setTeamScore(teamScore + score);
        addOver(type);
        setWideNoBall(true);
    }

    useEffect(() => {
        setWideNoBall(false)
        setPartnership(teamScore - partnershipScore)
        if (teamScore >= 0 && !wideNoBall && startScore) {
            setBalls(balls => balls + 1);
            if (balls === 5) {
                setOvers(overs => overs + 1);
                setBalls(0);
                setChangeBowler(true);
                setBowlerWicket(0);
                if (changeStriker) {
                    setChangeNonStriker(true)
                    setChangeStriker(false);
                } else if (changeNonStriker) {
                    setChangeStriker(true);
                    setChangeNonStriker(false)
                }
            }
        }
    }, [teamScore, strikerBalls, nonStrikerBalls, wickets]);

    useEffect(() => {
        if (undoScore > 0) {
            setTeamScore(teamScore - undoScore);
            if (changeStriker) {
                setStrikerScore(strikerScore - undoScore);
                setStrikerBalls(strikerBalls - 1);
            } else if (changeNonStriker) {
                setNonStrikerScore(nonStrikerScore - undoScore);
                setNonStrikerBalls(nonStrikerBalls - 1);
            }
        }
    }, [undo]);
    useEffect(() => {
        if (overs === matchOvers || wickets === 10 || (teamScore > firstInningsScore && (firstInningsScore > 0))) {
            setChangeBowler(false);
            setNewPlayer(false);
            Toast.show({type: "success", text1: "Innings Finished"})
            if (!startSecondInnings && !finishFirstInnings) {
                finishInning()
            }
            if (startSecondInnings && finishFirstInnings && !finishSecondInnings) {
                setFinishSecondInnings(true);
                finishInning()
            }
        }
    }, [overs, teamScore]);
    useEffect(() => {
        if (finishFirstInnings) {
            resetStates()
        }
    }, [finishFirstInnings]);

    useEffect(() => {
        if (finishSecondInnings) {
            if (teamScore > firstInningsScore) {
                const wicketsRemain = `${bowlingTeam} won by ${10 - wickets} wickets`;
                !_.isEmpty(wicketsRemain)
                {
                    updateMatchStatus(wicketsRemain);
                }
            } else if (teamScore < firstInningsScore) {
                const scoreRemain = `${battingTeam} won by ${firstInningsScore - teamScore} runs`;
                !_.isEmpty(scoreRemain)
                {
                    updateMatchStatus(scoreRemain);
                }
            }
        }
    }, [finishSecondInnings]);

    const updateMatchStatus = (status) => {
        axios.put(`${API_BASE_URL}/matches/${matchDetails.id}`,
            {match: {id: matchDetails.id, completed: true, status: status}})
            .then(response => {
                Toast.show({type: "success", text1: "Match Completed"})
                navigation.navigate("HomeScreen");
            }).catch(err => Toast.show({
            type: "error",
            text1: (err.response && err.response.data.error) || err.message
        }));
    };

    const finishInning = () => {
        if (!startSecondInnings && !finishFirstInnings) {
            console.log("teamname", batting)
            axios.put(`${API_BASE_URL}/matches/${matchDetails.id}`,
                {
                    match: {
                        id: matchDetails.id,
                        team1_score: teamScore,
                        team1_overs: matchOvers,
                        team1_wickets: wickets,
                        team1_name: batting
                    }
                })
                .then(response => {
                    setFirstInningsData(response.data.match)
                    Toast.show({type: "success", text1: "Innings Data Saved Successfully"})
                    setFinishFirstInnings(true);
                }).catch(err => Toast.show({
                type: "error",
                text1: (err.response && err.response.data.error) || err.message
            }));
        }
        if (startSecondInnings && finishFirstInnings && !finishSecondInnings) {
            axios.put(`${API_BASE_URL}/matches/${matchDetails.id}`,
                {
                    match: {
                        id: matchDetails.id,
                        team2_score: teamScore,
                        team2_overs: matchOvers,
                        team2_wickets: wickets,
                        team2_name: batting
                    }
                })
                .then(response => {
                    // setFirstInningsData(response.data.first_innings_stats)
                    Toast.show({type: "success", text1: "Innings Data Saved Successfully"})
                    setFinishSecondInnings(true);
                }).catch(err => Toast.show({
                type: "error",
                text1: (err.response && err.response.data.error) || err.message
            }));
        }
    };

    const addScore = (score) => {
        if (score === 0) {
            setZero(true);
        }
        addOver(score);
        if ((score === 1 || score === 3) && (changeStriker && !changeNonStriker)) {
            setTeamScore(teamScore + score);
            setStrikerScore(strikerScore + score);
            setStrikerBalls(strikerBalls + 1);
            setChangeStriker(false);
            setChangeNonStriker(true);
        } else if ((score === 1 || score === 3) && (changeNonStriker && !changeStriker)) {
            setTeamScore(teamScore + score);
            setNonStrikerScore(nonStrikerScore + score);
            setNonStrikerBalls(nonStrikerBalls + 1);
            setChangeStriker(true);
            setChangeNonStriker(false);
        } else if ((score !== 1 || score !== 3 ) && (changeStriker && !changeNonStriker)) {
            setTeamScore(teamScore + score);
            setStrikerScore(strikerScore + score);
            setStrikerBalls(strikerBalls + 1);
            setChangeStriker(true);
        } else if ((score !== 1 || score !== 3) && (changeNonStriker && !changeStriker)) {
            setTeamScore(teamScore + score);
            setNonStrikerScore(nonStrikerScore + score);
            setNonStrikerBalls(nonStrikerBalls + 1);
            setChangeNonStriker(true);
        }
    };
    const addOver = (score) => {
        const lastOverIndex = oversScore.length - 1;
        const lastOver = oversScore[lastOverIndex];
        const nbCount = lastOver ? lastOver.balls.filter(score => score === "NB").length : 0;
        const wdCount = lastOver ? lastOver.balls.filter(score => score === "WD").length : 0;
        const totalCount = nbCount + wdCount
        if (!lastOver || (totalCount > 0 ? (lastOver.balls.length === 6 + totalCount) : lastOver.balls.length === 6)) {
            const newOver = {balls: [score]};
            setOversScore(prevOvers => [...prevOvers, newOver]);
        } else {
            const updatedOvers = [...oversScore];
            updatedOvers[lastOverIndex].balls.push(score);
            setOversScore(updatedOvers);
        }
    };

    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
                display: "none"
            }
        });
        return () => navigation.getParent()?.setOptions({
            tabBarStyle: {
                backgroundColor: colors.darkBlue,
                display: "flex",
                height: 70,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }
        });
    }, [navigation]);
    const FirstRoute = () => (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.mainHeading}>{batting}</Text>
                <Text style={styles.teamScoreHeading}>{teamScore} - {wickets} ({overs}.{balls})</Text>
                {!finishFirstInnings ?
                    <Text style={styles.teamNewsHeading}>{batting} opt to bat</Text>
                    : <Text style={styles.teamNewsHeading}>{batting} needs {firstInningsScore - teamScore} runs to
                        win</Text>
                }
            </View>
            <View style={styles.innerSecondContainer}>
                <View
                    style={{
                        borderBottomColor: colors.greyBlack,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginBottom: "2%",
                        width: "100%",
                        opacity: 1,
                    }}
                />
                <Text style={styles.partnershipHeading}>P'SHIP ({partnership})</Text>
                <View
                    style={{
                        borderBottomColor: colors.greyBlack,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginBottom: "2%",
                        width: "100%",
                        opacity: 1,
                    }}
                />
                <View style={styles.batterNewsWrapper}>
                    <Text style={styles.batterNameHeadingTextWrapper}>Batter</Text>
                    <Text style={styles.batterNewsTextWrapper}>R</Text>
                    <Text style={styles.batterNewsTextWrapper}>B</Text>
                    <Text style={styles.batterNewsTextWrapper}>SR</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: colors.greyBlack,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginBottom: "2%",
                        width: "100%",
                        opacity: 1,
                    }}
                />
                <View style={styles.batterNewsWrapper}>
                    <Text
                        style={styles.batterNameTextWrapper}>{changeStriker ? `${strikerBatsman}*` : strikerBatsman}</Text>
                    <Text style={styles.batterNewsTextWrapper}>{strikerScore}</Text>
                    <Text style={styles.batterNewsTextWrapper}>{strikerBalls}</Text>
                    <Text
                        style={styles.batterNewsTextWrapper}>{strikerScore > 0 ? ((strikerScore / strikerBalls) * 100).toFixed(2) : 0}</Text>
                </View>
                <View style={styles.batterNewsWrapper}>
                    <Text
                        style={styles.batterNameTextWrapper}>{changeNonStriker ? `${nonStrikerBatsman}*` : nonStrikerBatsman}</Text>
                    <Text style={styles.batterNewsTextWrapper}>{nonStrikerScore}</Text>
                    <Text style={styles.batterNewsTextWrapper}>{nonStrikerBalls}</Text>
                    <Text
                        style={styles.batterNewsTextWrapper}>{nonStrikerScore > 0 ? ((nonStrikerScore / nonStrikerBalls) * 100).toFixed(2) : 0}</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: colors.greyBlack,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginBottom: "2%",
                        width: "100%",
                        opacity: 1,
                    }}
                />
                <View style={styles.batterNewsWrapper}>
                    <Text style={styles.batterNameHeadingTextWrapper}>Bowler</Text>
                    <Text style={styles.batterNewsTextWrapper}>O</Text>
                    <Text style={styles.batterNewsTextWrapper}>R</Text>
                    <Text style={styles.batterNewsTextWrapper}>W</Text>
                </View>
                <View style={styles.batterNewsWrapper}>
                    <Text style={styles.batterNameTextWrapper}>{bowler}</Text>
                    {oversScore.length > 0 && (
                        <>
                            <Text style={styles.batterNewsTextWrapper}>1</Text>
                            <Text style={styles.batterNewsTextWrapper}>
                                {oversScore[oversScore.length - 1].balls
                                    .filter(score => typeof score === 'number' || score === 'NB' || score === 'WD')
                                    .reduce((acc, score) => acc + (typeof score === 'number' ? score : 1), 0)}
                            </Text>

                            <Text style={styles.batterNewsTextWrapper}>{bowlerWicket}</Text>
                        </>
                    )}
                </View>
                <View
                    style={{
                        borderBottomColor: colors.greyBlack,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: "100%",
                        opacity: 1,
                    }}
                />
                <View style={styles.overStatsWrapper}>
                    {oversScore.map((over, index) => (
                        <View key={index} style={styles.oversContainer}>
                            <Text style={styles.overTextWrapper}>Over {index + 1}</Text>
                            <View style={styles.overRunsWrapper}>
                                <Text
                                    style={styles.overNewsTextWrapper}>{over.balls.join(' ')}{' '}
                                    ({over.balls.filter(score => typeof score === 'number' || score === 'NB' || score === 'WD')
                                        .reduce((acc, score) => acc + (typeof score === 'number' ? score : 1), 0)})
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
            <Buttons wicketsUpdater={wicketsUpdater} retire={retire} finishFirstInnings={finishFirstInnings}
                     wideNoBallScoreUpdater={wideNoBallScoreUpdater}
                     setChangeStriker={setChangeStriker} setChangeNonStriker={setChangeStriker} addScore={addScore}
                     changeStriker={changeStriker} changeNonStriker={changeNonStriker} setUndo={setUndo}
                     undoScore={undoScore} setUndoScore={setUndoScore} setStartScore={setStartScore}
                     setNewPlayer={setNewPlayer} newPlayer={newPlayer} players={players}
                     setStrikerBatsman={setStrikerBatsman} setNonStrikerBatsman={setNonStrikerBatsman}/>
            {changeBowler && !finishFirstInnings &&
                <ChangeBowlerModal bowlingTeamPlayers={bowlingTeamPlayers} setBowler={setBowler}
                                   setChangeBowler={setChangeBowler} text={"Select Bowler"} heading={"First Innings"}/>}
            {changeBowler && startSecondInnings && !finishSecondInnings &&
                <ChangeBowlerModal bowlingTeamPlayers={bowlingPlayers} setBowler={setBowler}
                                   setChangeBowler={setChangeBowler} text={"Select Striker Bowler"}
                                   heading={"Second Innings"}/>}
            {startSecondInnings && !secondInningsStriker &&
                <NewPlayerSelectModal setSecondInningsStriker={setSecondInningsStriker} secondInningsStriker={secondInningsStriker}
                                      startSecondInnings={startSecondInnings} players={battingPlayers}
                                      setStrikerBatsman={setStrikerBatsman} setNonStrikerBatsman={setNonStrikerBatsman}
                                      setNewPlayer={setNewPlayer}/>}
            <ConfirmationModal
                isVisible={isVisible}
                onCancel={handleCancel}
                onConfirm={handleConfirm}
            />
        </SafeAreaView>
    );

    const SecondRoute = () => (
        <>
            <MatchInfoScreen matchDetails={matchDetails} battingTeam={battingTeam} players={players}
                             bowlingTeam={bowlingTeam} bowlingTeamPlayers={bowlingTeamPlayers}/>
            <ConfirmationModal
                isVisible={isVisible}
                onCancel={handleCancel}
                onConfirm={handleConfirm}
            />
        </>
    );

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });


    return (
        <>
            <StatusBar/>
            <Header title={`${battingTeam} vs ${bowlingTeam}`}/>
            <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width: layout.width}}
            />
        </>
    )
}
export default StartMatchScreen;
