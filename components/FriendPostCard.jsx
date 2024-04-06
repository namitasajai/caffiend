import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ReviewCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.topSection}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://via.placeholder.com/47x47" }}
        />
        <View>
          <Text style={styles.userName}>
            Madison Waters <Text style={styles.ratedText}>rated</Text>
          </Text>
          <View style={styles.coffeeShopNameContainer}>
            <Text style={styles.coffeeShopName}>Elixr Coffee</Text>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>8.5</Text>
        </View>
      </View>
      <Text style={styles.reviewText}>
        Coffee was pretty good! Would not recommend their pastries though. Spend
        a good 3hrs studying here and had a pretty productive sesh:) Wish me
        luck for midterms tmrw.
      </Text>
      <View style={styles.photoStrip}>
        {/* Repeat Image component for as many photos as you need */}
        <Image
          style={styles.photo}
          source={{ uri: "https://via.placeholder.com/93x93" }}
        />
        {/* ... */}
      </View>
      <Text style={styles.date}>March 31, 2024 at 3:58pm</Text>
      {/* Icons or buttons for actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          {/* Icon for Like - placeholder view used here */}
          <View style={styles.likeIconPlaceholder} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          {/* Icon for Comment - placeholder view used here */}
          <View style={styles.commentIconPlaceholder} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#F0E6D0",
    borderRadius: 21.04,
    padding: 22,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
  },
  avatar: {
    width: 47,
    height: 47,
    borderRadius: 23.5,
    borderColor: "white",
    borderWidth: 2,
    margin: 10,
  },
  userName: {
    color: "black",
    fontSize: 13.72,
    fontWeight: "500",
    paddingHorizontal: 15,
  },
  ratedText: {
    fontWeight: "400",
  },
  coffeeShopNameContainer: {
    backgroundColor: "#96A978",
    borderRadius: 27,
    marginTop: 4,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    paddingVertical: 2,
    width: 100,
  },
  coffeeShopName: {
    color: "#FBF8F1",
    fontSize: 13.72,
    fontFamily: "Inter",
    fontWeight: "600",
  },
  ratingContainer: {
    backgroundColor: "#4F1C11",
    borderRadius: 46,
    padding: 8,
    marginLeft: 20,
  },
  rating: {
    textAlign: "center",
    color: "#E58D23",
    fontSize: 16,
    fontWeight: "700",
  },
  reviewText: {
    color: "#333333",
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 13,
  },
  photoStrip: {
    flexDirection: "row",
    position: "relative",
    height: 103.29,
    marginBottom: 13,
  },
  photo: {
    width: 93.29,
    height: 93.29,
    borderRadius: 15.55,
    position: "absolute",
  },
  date: {
    color: "#8F8F8F",
    fontSize: 12,
    marginBottom: 13,
  },
  actionsContainer: {
    flexDirection: "row",
  },
  iconButton: {
    width: 31,
    height: 31,
    borderRadius: 22.94,
    backgroundColor: "#FBF8F1",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 7,
  },
  likeIconPlaceholder: {
    width: 16.53,
    height: 15.17,
    backgroundColor: "#CCCCCC",
  },
  commentIconPlaceholder: {
    width: 16.12,
    height: 16.12,
    backgroundColor: "#CCCCCC",
  },
});

export default ReviewCard;
