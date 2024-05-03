import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Users, ClipboardText, Coffee } from "phosphor-react-native"; // Import icons

const ProfileStats = ({ friends, reviews, beans }) => {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.statItem}>
        <Users size={24} color="#333" />
        <Text style={styles.statText}>{friends} friends</Text>
      </View>
      <View style={styles.statItem}>
        <ClipboardText size={24} color="#333" />
        <Text style={styles.statText}>{reviews} reviews</Text>
      </View>
      <View style={styles.statItem}>
        <Coffee size={24} color="#333" />
        <Text style={styles.statText}>{beans} beans</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F6F0E3", 
    borderRadius: 25, 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    margin: 10, 
    marginRight: 20, 
  },
  statItem: {
    alignItems: "center",
  },
  statText: {
    marginTop: 4,
    color: "#333",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default ProfileStats;
