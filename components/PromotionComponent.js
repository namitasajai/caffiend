import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Heart, ChatCircle, PaperPlaneTilt } from "phosphor-react-native";

const PromotionComponent = ({ cafe, date, rating, offer, imguri, pfpuri }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imguri }} />
      <Text style={styles.coffeeShopName}>{cafe}</Text>
      <Text style={styles.dateText}>{date}</Text>
      <Text style={styles.promotionText}>{offer}</Text>
      <Image
        style={styles.logo}
        source={{
          uri: pfpuri,
        }}
      />
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <View style={styles.iconRow}>
        <Heart size={31} color="#E66565" weight="fill" />
        <ChatCircle size={31} color="#CCCCCC" weight="fill" />
        <PaperPlaneTilt size={31} color="#CCCCCC" weight="fill" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F0E6D0", // Temporary color to check visibility
    borderRadius: 21.04,
    overflow: "hidden",
    marginBottom: 12,
    alignSelf: "center", // Ensure it centers in the parent view
    height: 470, // Temporarily set a fixed height to ensure it's large enough to be seen
  },
  image: {
    width: 306,
    height: 275,
    position: "absolute",
    left: 19,
    top: 125,
    borderRadius: 15.55,
  },
  coffeeShopName: {
    position: "absolute",
    left: 86,
    top: 29,
    color: "black",
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    lineHeight: 18.29,
  },
  dateText: {
    position: "absolute",
    left: 86,
    top: 48,
    color: "#666666",
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    lineHeight: 18.29,
  },
  promotionText: {
    width: 315,
    //marginBottom: 5,
    position: "absolute",
    left: 19,
    top: 83,
    color: "#666666",
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    lineHeight: 18.29,
  },
  logo: {
    width: 47,
    height: 47,
    position: "absolute",
    left: 19,
    top: 24,
    borderRadius: 9999,
    borderColor: "white",
    borderWidth: 1.5,
  },
  ratingContainer: {
    height: 42,
    width: 42,
    position: "absolute",
    left: 283,
    top: 24,
    backgroundColor: "#4F1C11",
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingText: {
    color: "#E58D23",
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    textAlign: "center",
  },
  iconRow: {
    flexDirection: "row",
    position: "absolute",
    left: 22,
    top: 420,
    justifyContent: "space-between",
    width: 120,
  },
  iconWrapper: {
    width: 31,
    height: 31,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PromotionComponent;
