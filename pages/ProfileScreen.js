// ProfileScreen.js
import React from "react";
import { ScrollView, StyleSheet, View, SafeAreaView } from "react-native";
import ProfileHeader from "../components/ProfileHeader"; // Update the import path as necessary

const ProfileScreen = () => {
  const userName = "Sabine Mejia";
  const userHandle = "@sa_bean";
  const userProfileImg = require("../assets/sabines-pfp.jpeg"); // Update path if necessary

  return (
    <View style={styles.container}>
      <ProfileHeader
        userName={userName}
        userHandle={userHandle}
        userProfileImg={userProfileImg}
      />
      <ScrollView style={styles.scrollView}>
        {/* Your scrollable content */}
      </ScrollView>
      {/* Rest of your code */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF8F1",
  },
  scrollView: {
    flex: 1,
  },
  // Add any additional styles if necessary
});

export default ProfileScreen;
