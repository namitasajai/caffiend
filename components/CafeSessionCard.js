import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { ArrowElbowUpRight } from "phosphor-react-native";

const CafeSessionCard = ({ name, distance, duration, iconSource }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cafeName}>{name}</Text>
      <View style={styles.infoRow}>
        <Text style={styles.cafeDistance}>{distance}</Text>
        <TouchableOpacity
          style={styles.directionsButton}
          onPress={() => {
            /* handle directions */
          }}
        >
          <ArrowElbowUpRight size={16} color="#FFFFFF" weight="bold" />
          <Text style={styles.directionsText}>Directions</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.durationContainer}>
      <Text style={styles.cafeDuration}>{duration}</Text>
        <Image source={iconSource} style={styles.iconStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 250,
    height: 150,
    backgroundColor: "#96A978",
    borderRadius: 20,
    padding: 16,
    alignItems: "flex-start",
    marginVertical: 8,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: "space-between", // Aligns child elements to space between
  },
  cafeName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 12,
  },
  cafeDistance: {
    fontSize: 16,
    color: "white",
  },
  directionsButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#7689AB",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 15,
  },
  directionsText: {
    marginLeft: 4,
    color: "white",
    fontSize: 14,
  },
  durationContainer: {
    flexDirection: "row",
    alignItems: "center", // Adjusts the position to the right
    width: "100%", // Ensures the container takes full width
  },
  cafeDuration: {
    fontSize: 18,
    color: "white",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
  },
  iconStyle: {
    width: 40,
    height: 40,
    justifyContent: "flex-end",
    marginLeft: 125,
    borderRadius: 33.5,
    borderWidth: 2,
    borderColor: "white",
  },
});

export default CafeSessionCard;
