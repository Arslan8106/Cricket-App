import React from 'react';
import { Modal, View, Text, Button } from 'react-native';

const ConfirmationModal = ({ isVisible, onCancel, onConfirm }) => {
    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={onCancel}>
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
                        alignItems: 'center',
                    }}>
                    <Text style={{ marginBottom: 10 }}>Are you sure you want to exit?</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Button title="Cancel" onPress={onCancel} color="red" />
                        <Button title="Confirm" onPress={onConfirm} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ConfirmationModal;
