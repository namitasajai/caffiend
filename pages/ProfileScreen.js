import React from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import ProfileStats from "../components/ProfileStats";

const ProfileScreen = () => {
  const userName = "Sabine Mejia";
  const userHandle = "@sa_bean";
  const userProfileImg = require("../assets/sabines-pfp.jpeg");

  return (
    <View style={styles.container}>
      <ProfileHeader
        userName={userName}
        userHandle={userHandle}
        userProfileImg={userProfileImg}
      />
      <ProfileStats friends="48" reviews="2" beans="350" />
      {/* Here's the ProfileStats component */}
      <ScrollView style={styles.scrollView}>
        {/* Your scrollable content */}
      </ScrollView>
      {/* Rest of your code */}
    </View>
  );
};

// Styles for UserStats component (Placeholder if you haven't implemented it yet)
const statsStyles = StyleSheet.create({
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F0EDEE", // The background color of your component
    borderRadius: 25, // Adjust as necessary
    paddingVertical: 10, // Adjust as necessary
    paddingHorizontal: 20, // Adjust as necessary
    margin: 10, // Adjust as necessary
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF8F1",
  },
  scrollView: {
    flex: 1,
  },
  // ...rest of your styles
});

export default ProfileScreen;
