import React from "react";
import { View, Text, StyleSheet } from "react-native";

const YourReviewCard = ({ reviewText, cafeName, date }) => {
  return (
    <View style={styles.card}>
      <View style={styles.topSection}>
      <View style={styles.coffeeShopNameContainer}>
          <Text style={styles.coffeeShopName}>{cafeName}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>8.5</Text>
        </View>
      </View>
      <Text style={styles.reviewText}>{reviewText}</Text>
      <View style={styles.bottomSection}>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 10,
    backgroundColor: "#F0E6D0",
    borderRadius: 20,
    padding: 16,
    flexDirection: "column",
    alignItems: "flex-start",
    width: 275,
    height: 200,
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  ratingContainer: {
    backgroundColor: "#4F1C11",
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    color: "#E58D23",
    fontWeight: "bold",
  },
  coffeeShopNameContainer: {
    backgroundColor: "#96A978", // Adjust the color to match your Figma
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  coffeeShopName: {
    color: "#FBF8F1", // Adjust the text color to match your Figma
    fontSize: 16,
    fontWeight: "bold",
  },
  reviewText: {
    color: "#333",
    fontSize: 14,
    marginVertical: 8,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  date: {
    color: "#8F8F8F",
    fontSize: 12,
  },
});

export default YourReviewCard;
