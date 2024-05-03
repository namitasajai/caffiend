import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Heart, ChatCircle } from "phosphor-react-native";
import CafeCard from "./CafeCard";
import cafeData from "./cafeData";

const ConnectCard = ({ name, working, cafeName, text, date }) => {
  const cafe = cafeData.find((c) => c.name === cafeName);

  return (
    <View style={styles.card}>
      <View style={styles.topSection}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://i.pinimg.com/564x/bb/8a/91/bb8a91a047deaa78f7a89228f80d92da.jpg",
          }}
        />
        <View style={styles.userInfo}>
          <Text>
            <Text style={styles.userName}>{name} </Text>
            <Text style={styles.workingText}>{working}</Text>
          </Text>
        </View>
      </View>
      <CafeCard
        cafe={cafe}
        handleCafePress={() => {}}
        backgroundColor="#96A978"
        showRating={false}
      />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Heart size={18} color="#CCCCCC" weight="fill" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <ChatCircle size={18} color="#CCCCCC" weight="fill" />
        </TouchableOpacity>
        <Text style={styles.date}>{date}</Text>
        <TouchableOpacity style={styles.connectButton}>
          <Text style={styles.connectText}>Connect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F0E6D0",
    borderRadius: 21,
    padding: 20,
    marginBottom: 12,
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 47,
    height: 47,
    borderRadius: 23.5,
    borderColor: "white",
    borderWidth: 2,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    color: "black",
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    fontWeight: "500",
  },
  workingText: {
    color: "black",
    fontSize: 13.72,
    fontFamily: "Inter",
    fontWeight: "400",
    lineHeight: 18.29,
    wordWrap: "break-word",
  },
  text: {
    fontWeight: "400",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
  date: {
    color: "#8F8F8F",
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "400",
    lineHeight: 12,
    wordWrap: "break-word",
    marginHorizontal: 10, // Adjust spacing around the date
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-around", // Adjust this to space items evenly
  },
  iconButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FBF8F1",
    justifyContent: "center",
    alignItems: "center",
  },
  connectButton: {
    backgroundColor: "#96A978", // Adjust the color to match your theme
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
  },
  connectText: {
    fontFamily: "Inter_600SemiBold",
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ConnectCard;
