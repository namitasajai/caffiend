import React from "react";
import { StyleSheet, TextInput, View, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

const NoteComponent = () => {
  return (
    <View style={styles.noteContainer}>
      <TextInput
        style={styles.noteInput}
        placeholder="Tap to add notes"
        placeholderTextColor="#8F8F8F"
        multiline={true} // Enables multiline input
        numberOfLines={4} // You can set this to any number you like
      />
    </View>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    width: "90%",
    minHeight: windowHeight / 2.5, // Changed to minHeight to allow expansion
    paddingTop: 40,
    paddingBottom: 20, // Reduced padding to accommodate the expanding TextInput
    paddingLeft: 19,
    paddingRight: 19, // Adjusted paddingRight to be consistent with paddingLeft
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  noteInput: {
    color: "#8F8F8F",
    fontSize: 20,
    fontFamily: "Inter_500Medium",
    textAlignVertical: "top", // Ensures text aligns at the top of the input
    width: "100%",
    borderWidth: 0,
    paddingTop: 0, // Add padding at the top of the TextInput
    paddingBottom: 10, // And at the bottom, for better spacing
  },
});

export default NoteComponent;
