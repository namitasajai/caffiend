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
import { MapPin, MagnifyingGlass, FunnelSimple } from "phosphor-react-native";

const Header = ({ title, searchValue, onSearchChange }) => {
  return (
    <View style={styles.container}>
      {/* ... other parts of the Header */}
      <View style={styles.searchContainer}>
        <MagnifyingGlass size={20} color="#666" />
        <TextInput
          placeholder="Search cafes"
          style={styles.searchInput}
          value={searchValue}
          onChangeText={onSearchChange} // This is where you handle the text change
        />
        <TouchableOpacity style={styles.filterBtn}>
          <FunnelSimple size={13} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Get the full height of the device's screen
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#96A978",
    borderRadius: 38,
    padding: 25,
    height: 190,
  },
  title: {
    fontSize: 24,
    color: "#333333",
    fontFamily: "Inter_500Medium",
    marginTop: 36,
    marginBottom: 2,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 4,
  },
  locationText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333333",
    fontWeight: "400",
  },
  filterBtn: {
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 100,
    padding: 4,
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
