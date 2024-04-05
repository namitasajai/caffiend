import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ArrowElbowUpRight, Plus, Coffee, ForkKnife, WifiHigh } from "phosphor-react-native";


const CafeCard = ({ cafe }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: cafe.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{cafe.name}</Text>
        <View style={styles.subheading}>
          <Text style={styles.distance}>{cafe.distance} miles</Text>
          <TouchableOpacity style={styles.directionsButton}>
            <ArrowElbowUpRight size={16} color="#FFFFFF" weight="bold" />
            <Text style={styles.directionsText}>Directions</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.offeringsButton}>
          <Text style={styles.offeringsText}>Offerings</Text>
          <Plus size={16} color="#666666" />
        </TouchableOpacity>
        <View style={styles.icons}>
          <Coffee size={16} color="#333333" />
          <ForkKnife size={16} color="#333333" />
          <WifiHigh size={16} color="#333333" />
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{cafe.rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F0E6D0",
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 0,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 16,
  },
  details: {
    flex: 1,
    alignContent: 'top', 
  },
  subheading: {
    flexDirection: "row",
    justifyContent: "left",
    gap: 8, 
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontFamily: "Inter_500Medium",
    color: '#333333',
    marginBottom: 4,
  },
  distance: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: "#666666",
  },
  directionsButton: {
    flexDirection: "row",
    backgroundColor: "#7689AB",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  directionsText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    marginLeft: 4,
  },
  offeringsButton: {
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: "#fff",
    fontFamily: "Inter_400Regular",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 20,
    marginTop: 4,
    marginBottom: 4,
    alignItems: 'center',
    width: 150, 
  },
  offeringsText: {
    fontSize: 12,
    color: "#666666",
  },
  icons: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },
  ratingContainer: {
    backgroundColor: "#4F1C11",
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0.5,
    bottom: 0.5,
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Inter_700Bold",
    color: "#E58D23",
  },
});

export default CafeCard;
