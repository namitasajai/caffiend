import React from "react";
import { StyleSheet, TextInput, View, Dimensions } from "react-native"; // or 'react' if you're using a library that mimics this pattern

const windowHeight = Dimensions.get("window").height;

const YourComponent = () => {
  return (
    <View style={styles.noteContainer}>
      <TextInput
        style={styles.noteInput}
        placeholder="Tap to add notes"
        placeholderTextColor="#8F8F8F"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    width: "90%",
    height: windowHeight / 2.5, // Consider reducing this if it's too large.
    paddingTop: 40,
    paddingBottom: 63,
    paddingLeft: 19,
    paddingRight: 167,
    backgroundColor: "white",
    borderRadius: 20, // Adjust this as needed to see the rounded corners.
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  noteInput: {
    color: "#8F8F8F",
    fontSize: 20,
    fontFamily: "Inter",
    fontWeight: "500",
    // lineHeight: 18.29, // Commented out to test if default lineHeight works better
    width: "100%", // Make sure this doesn't cause the input to fill the entire height.
    borderWidth: 0, // No border
    // Add padding if needed, or adjust height
  },
});

export default YourComponent;
