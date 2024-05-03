import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Heart, ChatCircle } from "phosphor-react-native";

const ReviewCard = ({ name, cafe, rating, review, date }) => {
  return (
    <View style={styles.card}>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{rating}</Text>
      </View>
      <View style={styles.topSection}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://i.pinimg.com/564x/bb/8a/91/bb8a91a047deaa78f7a89228f80d92da.jpg",
          }}
        />
        <View>
          <Text style={styles.userName}>
            {name} <Text style={styles.ratedText}>rated</Text>
          </Text>
          <View style={styles.coffeeShopNameContainer}>
            <Text style={styles.coffeeShopName}>{cafe}</Text>
          </View>
        </View>
      </View>
      <View style={styles.reviewContainer}>
        <Text style={styles.reviewText}>{review}</Text>
        <View style={styles.photoStrip}>
          <Image
            style={styles.photo}
            source={{
              uri: "https://i.pinimg.com/564x/2f/95/c5/2f95c5018a76147acc3939dff3fb68f2.jpg",
            }}
          />
          {/* ... */}
        </View>
      </View>

      <Text style={styles.date}>{date}</Text>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Heart size={18} color="#CCCCCC" weight="fill" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <ChatCircle size={18} color="#CCCCCC" weight="fill" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F0E6D0",
    borderRadius: 21.04,
    padding: 20,
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 12,
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
    marginRight: 10,
  },
  userName: {
    color: "black",
    fontSize: 13.72,
    fontFamily: "Inter_500Medium",
  },
  ratedText: {
    fontFamily: "Inter_400Regular",
  },
  coffeeShopNameContainer: {
    backgroundColor: "#96A978",
    borderRadius: 27,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 4,
    paddingHorizontal: 10, // Provide horizontal padding
    paddingVertical: 2, // Provide vertical padding
    width: 140,
  },
  coffeeShopName: {
    textAlign: "center",
    color: "#FBF8F1",
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
  },
  ratingContainer: {
    backgroundColor: "#4F1C11",
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    top: 20,
  },
  rating: {
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    color: "#E58D23",
  },
  reviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 220,
  },
  reviewText: {
    color: "#333333",
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    marginBottom: 13,
    width: 200,
    lineHeight: 18,
  },
  photoStrip: {
    flexDirection: "row",
    position: "relative",
    height: 103.29, // Set a fixed height for the image strip
  },
  photo: {
    width: 93.29,
    height: 93.29,
    borderRadius: 15.55,
    position: "absolute", // Adjust positions accordingly for overlap
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
