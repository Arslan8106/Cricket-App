import { Modal, Text, TouchableOpacity, View } from "react-native";
import styles from "../assets/styles/NewPlayerSelectStyle";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors/colors";

const ByesScore = (props) => {
    const closeModal = () => {
        props.setByesScoreModal(false);
    };

    const data = [
        { label: "0", value: 0 },
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 },
        { label: "6", value: 6 },
    ];

    return (
        <Modal
            visible={props.byesScoreModal}
            transparent={true}
            animationType="fade"
            onRequestClose={closeModal}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
            >
                <View
                    style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        padding: 20,
                        width: "80%",
                        height: "40%",
                        alignItems: "center",
                    }}
                >
                    <Text style={styles.setupMatchWrapper}>Select Score</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Score"
                        value={props.selectByesScore}
                        onChange={(item) => {
                            props.setByesSelectScore(item.value);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={styles.icon}
                                color="black"
                                name="Safety"
                                size={20}
                            />
                        )}
                    />
                    <TouchableOpacity onPress={closeModal}>
                        <MaterialCommunityIcons
                            name="arrow-right-circle"
                            size={95}
                            color={colors.primary}
                            style={{ paddingTop: 10 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ByesScore;
