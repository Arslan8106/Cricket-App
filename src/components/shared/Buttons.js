import {Pressable, Text, View} from "react-native";
import styles from "../assets/styles/StartMatchScreenStyle";
import {useEffect, useState} from "react";
import NewPlayerSelectModal from "../modal/NewPlayerSelectModal";

const Buttons = (props) => {

    const changeStrike = (runs) => {
        props.setUndoScore(runs);
        props.addScore(runs);
        props.setUndo(false);
    };

    const remainStrike = (runs) => {
        props.setUndoScore(runs);
        props.addScore(runs);
        props.setUndo(false);

    };

    const wicketFun = () => {
        props.setNewPlayer(true)
        props.wicketsUpdater(1)
    }
    const retireBatsman = () => {
        props.setNewPlayer(true)
        props.retire()
    }

    const wideNoBallScoreUpdater = (runs, type) => {
        props.wideNoBallScoreUpdater(runs, type)
        props.setUndoScore(runs);
        props.setUndo(false);
    }

    return (
        <>
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
                <NewPlayerSelectModal setNewPlayer={props.setNewPlayer}
                                      players={props.players} changeStriker={props.changeStriker}
                                      setStrikerBatsman={props.setStrikerBatsman} setNonStrikerBatsman={props.setNonStrikerBatsman}/>}
        </>
    )
}
export default Buttons
