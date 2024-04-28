import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { PlusCircle } from "phosphor-react-native";

const windowWidth = Dimensions.get("window").width; // Get the width of the screen

const AddFavoriteDishesComponent = ({ onClickButton }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Add photos</Text>
      <TouchableOpacity style={styles.addButton} onPress={onClickButton}>
        <PlusCircle size={20} color="#3E4A2B" weight="bold" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 68, // Subtract total horizontal paddings (34+34) from the screen width
    backgroundColor: "#F0EAD6",
    borderRadius: 23,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 34,
    paddingRight: 33,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center", // Center the container
  },
  label: {
    color: "#000000",
    fontSize: 14,
    fontFamily: "Inter_300Light",
    lineHeight: 18.29,
    marginRight: 16, // Add space between the label and the plus icon
  },
  addButton: {
    // Define styles for your add button, like padding or a background color if needed
  },
});

// Usage example:
// <AddPhotoComponent onAddPhoto={() => console.log('Add photo tapped')} />

export default AddFavoriteDishesComponent;
