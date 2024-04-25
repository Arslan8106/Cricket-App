import {Modal, Text, TouchableOpacity, View} from "react-native";
import styles from "../assets/styles/NewPlayerSelectStyle";
import {Dropdown} from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import {useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors/colors";
import _ from "lodash";
import Toast from "react-native-toast-message";

const ChangeBowlerModal = (props) => {
    const [bowler, setBowler] = useState(null);
    const players = props.bowlingTeamPlayers;
    const closeModal = () => {
        props.setChangeBowler(false);
    };
    const bowlerSelect = () => {
        props.setBowler(bowler);
        {
            _.isEmpty(bowler) ? Toast.show({type: "error", text1: "Please select a bowler"}) : closeModal()
        }
    }
    return (
        <Modal
            visible={true}
            transparent={true}
            animationType="fade"
            onRequestClose={() => {
                bowlerSelect();
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
                        height: "30%",
                        alignItems: 'center',
                    }}>
                    <Text style={styles.setupMatchWrapperHeading}>{props.heading}</Text>
                    <Text style={styles.setupMatchWrapper}>{props.text}</Text>
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
                        placeholder="Select Bowler"
                        value={bowler}
                        onChange={item => {
                            setBowler(item.value);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign style={styles.icon} color="black" name="Safety" size={20}/>
                        )}
                    />
                    {bowler && (
                        <TouchableOpacity onPress={bowlerSelect}>
                            <MaterialCommunityIcons name="arrow-right-circle" size={95} color={colors.primary}
                                                    style={{paddingTop: 10}}/>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </Modal>
    )
}
export default ChangeBowlerModal
