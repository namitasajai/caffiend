import React from "react";
import { Dimensions } from "react-native";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { MapPin, MagnifyingGlass } from "phosphor-react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBarPlaceholder} />
      <Text style={styles.title}>Location</Text>
      <View style={styles.locationContainer}>
        <MapPin size={18} color="#333" weight="bold" />
        <Text style={styles.locationText}>New York, NY, USA</Text>
      </View>
      <View style={styles.searchContainer}>
        <MagnifyingGlass size={20} color="#666" />
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>
    </View>
  );
};

// Get the full height of the device's screen
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#96A978",
    borderRadius: 38,
    height: screenHeight / 5, // Set the height to 1/5th of the screen height
    justifyContent: "space-around", // Distribute children evenly
    paddingTop: 40, // Increase the padding to give some space at the top
    paddingBottom: 30, // Similarly, adjust the bottom padding
    paddingHorizontal: 30, // Set horizontal padding to create space on the sides
  },
  statusBarPlaceholder: {
    height: 40, 
  },
  title: {
    fontSize: 14,
    color: "#333333",
    fontWeight: "light",
    marginTop: 10, 
    marginBottom: 8, 
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10, 
    marginBottom: 15,
  },
  locationText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333333",
    fontWeight: "400",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 19,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 15,
    color: "#666666",
  },
});

export default Header;
