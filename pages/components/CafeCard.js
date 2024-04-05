// CafeCard.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ArrowElbowUpRight } from "phosphor-react-native";

const CafeCard = ({ cafe }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.name}>{cafe.name}</Text>
        <View style={styles.subheading}>
          <Text style={styles.distance}>{cafe.distance} miles</Text>
          <TouchableOpacity style={styles.directionsButton}>
            <ArrowElbowUpRight size={16} color="#fff" weight="regular" />
            <Text style={styles.directionsText}>Directions</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.offeringsButton}>
          <Text style={styles.offeringsText}>Offerings +</Text>
        </TouchableOpacity>
        <Text style={styles.rating}>{cafe.rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F0E6D0",
    borderRadius: 20,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  subheading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8, 
  },
  content: {
    alignItems: "flex-start",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  distance: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  directionsButton: {
    flexDirection: "row",
    marginTop: 8,
    backgroundColor: "#7689AB",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    gap: 4,
  },
  directionsText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  offeringsButton: {
    marginTop: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 32,
    paddingVertical: 4,
    borderRadius: 20,
  },
  offeringsText: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#444",
    marginTop: 8,
  },
});

export default CafeCard;
