import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { X } from 'phosphor-react-native';

const StartSessionModal = ({ isVisible, onClose, onStart, cafeName }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Start Cafe Session?</Text>
                    <Text style={styles.description}>
                        Your friends on Caffiend will be able to see that you are studying at {cafeName}
                    </Text>
                    <TouchableOpacity
                        style={styles.startButton}
                        onPress={onStart}
                    >
                        <Text style={styles.textStyle}>Start</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={onClose}
                    >
                        <X size={24} color={"#333333"} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontFamily: "Inter_400Regular",
        fontSize: 18
    },
    description: {
        marginBottom: 20,
        textAlign: "center", 
        fontFamily: "Inter_400Regular",
    },
    startButton: {
        borderRadius: 20,
        paddingHorizontal: 20, 
        padding: 10,
        elevation: 2,
        backgroundColor: "#96A978"
    },
    textStyle: {
        color: "white",
        fontFamily: "Inter_400Regular",
        textAlign: "center"
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        padding: 10,
        elevation: 2,
    }
});

export default StartSessionModal;
