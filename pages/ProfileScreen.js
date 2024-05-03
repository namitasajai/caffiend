import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import ProfileStats from "../components/ProfileStats";
import CafeSessionCard from "../components/CafeSessionCard";
import YourReviewCard from "../components/YourReviewCard";

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
      <View style={styles.innerContainer}>
        <ProfileStats friends="48" reviews="2" beans="350" />
        <Text style={styles.sectionHeader}>Your Cafe Sessions</Text>
        <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
          <CafeSessionCard
            address="212 Avenue B, New York, NY 10009"
            name="B Cup Cafe"
            distance="5.4 miles"
            duration="2 hrs"
            iconSource={require("../assets/sabines-pfp.jpeg")}
          />
          <CafeSessionCard
            address="31 3rd Ave, New York, NY 10003"
            name="The Bean"
            distance="1.4 miles"
            duration="4 hrs"
            iconSource={require("../assets/sabines-pfp.jpeg")}
          />
          <CafeSessionCard
            address="134 9th Ave, New York, NY 10011"
            name="Stone Street Coffee"
            distance="2.6 miles"
            duration="1 hr"
            iconSource={require("../assets/sabines-pfp.jpeg")}
          />
        </ScrollView>
        <Text style={styles.sectionHeader}>Your Reviews</Text>
        <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
          <YourReviewCard
            reviewText="Visited B Cup Cafe this morning and loved the vibrant atmosphere! The espresso was robust and the service quick. Their almond croissant is a must-try—flaky and flavorful. A great spot for a quick coffee break!"
            cafeName="B Cup Cafe"
            date="March 31, 2024 at 3:58pm"
            style={{ margin: 20 }}
          />
          <YourReviewCard
            reviewText="Coffee was pretty good! Would not recommend their pastries though.
          Spend a good 3hrs studying here and had a pretty productive sesh:)
          Wish me luck for midterms tmrw."
            cafeName="Elixr Coffee"
            date="April 4, 2024 at 6:26pm"
            style={{ margin: 20 }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF8F1",
  },
  scrollView: {
    flexDirection: "row",
  },
  innerContainer: {
    paddingLeft: 10, 
  },
  sectionHeader: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    fontWeight: "400",
    lineHeight: 20,
    color: "black",
    padding: 10, // General padding around the headers
  },
  // Add or adjust other styles as needed
});

export default ProfileScreen;
