import { Pressable, Text, View } from "react-native";
import styles from "../assets/styles/StartMatchScreenStyle";
import { useEffect, useState } from "react";
import NewPlayerSelectModal from "../modal/NewPlayerSelectModal";
import SelectExtrasScore from "../modal/SelectExtrasScore";
import _ from "lodash";

const Buttons = (props) => {
    const [extraScoreModal, setExtraScoreModal] = useState(false);
    const [selectScore, setSelectScore] = useState(null);
    const [scoreDetails, setScoreDetails] = useState({ runs: 0, type: "" });

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
    };

    useEffect(() => {
        if (!_.isNull(selectScore) && extraScoreModal) {
            const score = scoreDetails.runs + selectScore;
            props.wideNoBallScoreUpdater(score, scoreDetails.type);
            props.setUndoScore(score);
            props.setUndo(false);
            setExtraScoreModal(false);
        }
    }, [selectScore, extraScoreModal]);

    return (
        <>
            <View style={styles.lowerContainer}>
                <Pressable onPress={() => remainStrike(0)}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.runsText}>0</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => remainStrike(0)}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.runsText}>Byes</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => remainStrike(0)}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.runsText}>Leg Byes</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.lowerContainer}>
                <Pressable onPress={() => changeStrike(1)}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.runsText}>1</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => remainStrike(2)}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.runsText}>2</Text>
                    </View>
                </Pressable>
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
                <Pressable onPress={() => remainStrike(6)}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.runsText}>6</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.secondLowerContainer}>
                <Pressable onPress={() => wideNoBallScoreUpdater(1, "WD")}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.runsText}>Wide</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => wideNoBallScoreUpdater(1, "NB")}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.runsText}>No Ball</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => wicketFun()}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.runsText}>WKT</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => props.setUndo(true)}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.runsText}>Undo</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => retireBatsman()}>
                    <View style={styles.runsButtonWrapper}>
                        <Text style={styles.runsText}>Retire</Text>
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
        </>
    );
};

export default Buttons;
