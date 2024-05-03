import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OfferingsComponent = ({ offerings }) => {
  return (
    <View style={styles.offeringsContainer}>
      {offerings.map((offering, index) => (
        <Text key={index} style={styles.offeringText}>
          {offering}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  offeringsContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 10,
    marginTop: 5,
  },
  offeringText: {
    color: "black",
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "400",
    lineHeight: 18,
  },
});

export default OfferingsComponent;
