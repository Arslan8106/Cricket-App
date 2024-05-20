import {Modal, Text, TouchableOpacity, View} from "react-native";
import styles from "../assets/styles/NewPlayerSelectStyle";
import {Dropdown} from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import {useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors/colors";
import _ from "lodash";
import Toast from "react-native-toast-message";

const NewPlayerSelectModal = (props) => {
    const [striker, setStriker] = useState(null);
    const [nonStriker, setNonStriker] = useState(null);
    const players = props.players;
    const closeModal = () => {
        props.setNewPlayer(false);
    };

    const batsmanSelect = () => {
        if (props.changeStriker) {
            props.setStrikerBatsman(striker);
        } else if (!props.changeStriker) {
            props.setNonStrikerBatsman(striker);
        }
        {
            _.isEmpty(striker) ? Toast.show({type: "error", text1: "Please select batsman"}) : closeModal()
        }
    }
    const inningsBatsmanSelect = () => {
        props.setStrikerBatsman(striker);
        props.setNonStrikerBatsman(nonStriker);
        props.setSecondInningsStriker(true);
        {
            _.isEmpty(striker) ? Toast.show({type: "error", text1: "Please select batsman"}) : closeModal()
        }
    }
    return (
        <Modal
            visible={true}
            transparent={true}
            animationType="fade"
            onRequestClose={() => {
                batsmanSelect();
            }}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                <View
                    style={{
                        backgroundColor: 'white',
                        borderRadius: 10,
                        padding: 20,
                        width: "80%",
                        height: "40%",
                        alignItems: 'center',
                    }}>
                    <Text style={styles.setupMatchWrapper}>Select Batsman</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={players}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Stricker"
                        value={striker}
                        onChange={item => {
                            setStriker(item.value);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign style={styles.icon} color="black" name="Safety" size={20}/>
                        )}
                    />
                    {props.startSecondInnings &&
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={players}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder="Select Non Stricker"
                            value={nonStriker}
                            onChange={item => {
                                setNonStriker(item.value);
                            }}
                            renderLeftIcon={() => (
                                <AntDesign style={styles.icon} color="black" name="Safety" size={20}/>
                            )}
                        />
                    }
                    {striker && props.startSecondInnings && nonStriker &&(
                        <TouchableOpacity onPress={props.startSecondInnings ? inningsBatsmanSelect : batsmanSelect}>
                            <MaterialCommunityIcons name="arrow-right-circle" size={95} color={colors.primary}
                                                    style={{paddingTop: 10}}/>
                        </TouchableOpacity>
                    )}
                    {striker && !props.startSecondInnings &&(
                        <TouchableOpacity onPress={props.startSecondInnings ? inningsBatsmanSelect : batsmanSelect}>
                            <MaterialCommunityIcons name="arrow-right-circle" size={95} color={colors.primary}
                                                    style={{paddingTop: 10}}/>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </Modal>
    )
}
export default NewPlayerSelectModal
