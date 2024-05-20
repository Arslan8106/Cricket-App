import { Pressable, Text, View } from "react-native";
import styles from "../assets/styles/StartMatchScreenStyle";
import { useEffect, useState } from "react";
import NewPlayerSelectModal from "../modal/NewPlayerSelectModal";
import SelectExtrasScore from "../modal/SelectExtrasScore";
import _ from "lodash";
// import ByesScore from "../modal/ByesScore";

const Buttons = (props) => {
    const [extraScoreModal, setExtraScoreModal] = useState(false);
    // const [byesScoreModal, setByesScoreModal] = useState(false);
    const [selectScore, setSelectScore] = useState(null);
    // const [selectByesScore, setByesSelectScore] = useState(null);
    // const [scoreDetails, setScoreDetails] = useState({ runs: 0, type: "" });
    // const [scoreByesDetails, setScoreByesDetails] = useState({ runs: 0, type: "" });

    const changeStrike = (runs) => {
        props.setUndoScore(runs);
        props.addScore(runs);
        props.setUndo(false);
        props.setStartScore(true);
    };

    const remainStrike = (runs) => {
        props.setUndoScore(runs);
        props.addScore(runs);
        props.setUndo(false);
        props.setStartScore(true);
    };

    const wicketFun = () => {
        props.setNewPlayer(true);
        props.wicketsUpdater(1);
    };

    const retireBatsman = () => {
        props.setNewPlayer(true);
        props.retire();
    };

    const wideNoBallScoreUpdater = (runs, type) => {
        setScoreDetails({ runs, type });
        setExtraScoreModal(true);
        props.setUndoWideNoBall(true);

    };
    // const byesScoreUpdater = (runs, type) => {
    //     setScoreByesDetails({ runs, type });
    //     setByesScoreModal(true);
    // };
    const undoFunction = () => {
        props.setUndo(true)
    }

    useEffect(() => {
        if (!_.isNull(selectScore) && extraScoreModal) {
            const score = scoreDetails.runs + selectScore;
            props.wideNoBallScoreUpdater(score, scoreDetails.type);
            props.setUndoScore(score);
            props.setUndo(false);
            setExtraScoreModal(false);
        }
    }, [selectScore, extraScoreModal]);
    //
    // useEffect(() => {
    //     if (!_.isNull(selectByesScore) && byesScoreModal) {
    //         const score = scoreByesDetails.runs + selectByesScore;
    //         props.byesScoreUpdater(score, scoreByesDetails.type);
    //         props.setByesScoreData(score)
    //         props.setUndoScore(score);
    //         props.setUndo(false);
    //         setByesScoreModal(false);
    //     }
    // }, [scoreByesDetails, byesScoreModal]);

    return (
        <>
            <View style={styles.lowerContainer}>
                <Pressable onPress={() => remainStrike(0)}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.runsText}>0</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => changeStrike(1)}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.runsText}>1 </Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => remainStrike(2)}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.runsText}>2 </Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => wideNoBallScoreUpdater(1, "WD")}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.rtdRunsText}>Wide </Text>
                    </View>
                </Pressable>


                {/*<Pressable onPress={() => byesScoreUpdater(0, "B")}>*/}
                {/*    <View style={styles.runsButtonWrapper}>*/}
                {/*        <Text style={styles.runsText}>Byes</Text>*/}
                {/*    </View>*/}
                {/*</Pressable>*/}

                {/*<Pressable onPress={() => byesScoreUpdater(0, "LB")}>*/}
                {/*    <View style={styles.runsButtonWrapper}>*/}
                {/*        <Text style={styles.runsText}>Leg Byes</Text>*/}
                {/*    </View>*/}
                {/*</Pressable>*/}
            </View>
            <View style={styles.lowerContainer}>
                <Pressable onPress={() => changeStrike(3)}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.runsText}>3</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => remainStrike(4)}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.runsText}>4</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => changeStrike(5)}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.runsText}>5</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => undoFunction()}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.undoRunsText}>Undo</Text>
                    </View>
                </Pressable>

            </View>
            <View style={styles.lowerContainer}>
                <Pressable onPress={() => remainStrike(6)}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.sixRunsText}>6</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => wideNoBallScoreUpdater(1, "NB")}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.undoRunsText}>N</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => wicketFun()}>
                    <View style={styles.runsWrapper}>
                        <Text style={styles.rtdRunsText}>W</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => retireBatsman()}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.rtrRunsText}>Retire</Text>
                    </View>
                </Pressable>

            </View>
            {props.newPlayer && !props.finishFirstInnings &&
                <NewPlayerSelectModal
                    setNewPlayer={props.setNewPlayer}
                    players={props.players}
                    changeStriker={props.changeStriker}
                    setStrikerBatsman={props.setStrikerBatsman}
                    setNonStrikerBatsman={props.setNonStrikerBatsman}
                    setSelectedPlayers={props.setSelectedPlayers}
                />
            }
            {props.newPlayer && props.finishFirstInnings && props.startSecondInnings &&
                <NewPlayerSelectModal
                    setNewPlayer={props.setNewPlayer}
                    players={props.players}
                    changeStriker={props.changeStriker}
                    setStrikerBatsman={props.setStrikerBatsman}
                    setNonStrikerBatsman={props.setNonStrikerBatsman}
                    setSelectedPlayers={props.setSelectedPlayers}
                />
            }
            {extraScoreModal &&
                <SelectExtrasScore
                    setSelectScore={setSelectScore}
                    extraScoreModal={extraScoreModal}
                    selectScore={selectScore}
                    setExtraScoreModal={setExtraScoreModal}
                />
            }
            {/*{byesScoreModal &&*/}
            {/*    <ByesScore*/}
            {/*        setByesScoreModal={setByesScoreModal}*/}
            {/*        byesScoreModal={byesScoreModal}*/}
            {/*        selectByesScore={selectByesScore}*/}
            {/*        setByesSelectScore={setByesSelectScore}*/}
            {/*    />*/}
            {/*}*/}
        </>
    );
};

export default Buttons;
