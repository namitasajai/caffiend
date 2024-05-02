import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { CheckSquare, Square } from "phosphor-react-native";

const Filter = ({ filters, setFilters, isVisible, onClose }) => {
  const toggleFilter = (key) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const camelCaseToHumanReadable = (str) => {
    // Ensure the string is lowercase and add spaces before uppercase letters
    return (
      str
        // Insert a space before all caps and convert the whole string to lowercase
        .replace(/([A-Z])/g, " $1")
        .toLowerCase()
        // Remove any leading space that might have been added
        .trim()
    );
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalContent}>
              {Object.keys(filters).map((key) => (
                <TouchableOpacity
                  key={key}
                  style={styles.filterItem}
                  onPress={() => toggleFilter(key)}
                >
                  {filters[key] ? (
                    <CheckSquare size={24} color="#666" />
                  ) : (
                    <Square size={24} color="#666" />
                  )}
                  <Text style={styles.filterText}>
                    {camelCaseToHumanReadable(key)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      //paddingRight: 50,
      //paddingBottom: 80,   // Align children views to the right
      backgroundColor: "rgba(0, 0, 0, 0.1)", // Semi-transparent background
    },
    modalContent: {
      backgroundColor: "white",
      borderRadius: 20,
      padding: 30,
      width: "80%", // Smaller width
      maxWidth: 300, // Ensuring modal isn't too wide on larger devices
    },
    filterItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    filterText: {
      marginLeft: 10,
      fontSize: 16,
      color: "black",
      fontFamily: "Inter_400Regular",
    },
  });
  

export default Filter;
