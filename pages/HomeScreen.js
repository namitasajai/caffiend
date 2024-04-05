import React from "react";
import { ScrollView, StyleSheet, View, StatusBar, SafeAreaView } from "react-native";
import CafeCard from "./components/CafeCard";

const cafeInfo = {
  name: "B Cup Cafe",
  distance: "0.1",
  // imageUrl: "https://yourimageurl.com/image.jpg",
  rating: "6.7",
};

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <ScrollView style={styles.scrollView}>
      <View style={styles.cardContainer}>
        <CafeCard cafe={cafeInfo} />
        <CafeCard cafe={cafeInfo} />
        <CafeCard cafe={cafeInfo} />
        {/* You can repeat CafeCard for a list or map through an array of cafes */}
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Use the background color that suits your theme
  },
  scrollView: {
    marginHorizontal: 20, // Provides horizontal space
  },
  cardContainer: {
    marginVertical: 20, // Provides vertical space between cards
  },
});

export default HomeScreen;
