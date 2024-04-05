import React from "react";
import { ScrollView, StyleSheet, View, StatusBar, SafeAreaView } from "react-native";
import CafeCard from "../components/CafeCard";
import Header from "../components/Header";

const cafeInfo = {
  name: "B Cup Cafe",
  distance: "0.1",
  imageUrl: "https://t4.ftcdn.net/jpg/06/68/38/09/360_F_668380954_3krhgtwcZr7nGROtEYJgzdQgOkd20APK.jpg",
  rating: "6.7",
};

const HomeScreen = () => (
  <View style={styles.container}>
    <Header />
    <ScrollView style={styles.scrollView}>
      <View style={styles.cardContainer}>
        <CafeCard cafe={cafeInfo} />
        <CafeCard cafe={cafeInfo} />
        <CafeCard cafe={cafeInfo} />
        {/* You can repeat CafeCard for a list or map through an array of cafes */}
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    fontFamily: "Inter_400Regular",
    backgroundColor: "#FBF8F1", // Use the background color that suits your theme
  },
  scrollView: {
    marginHorizontal: 20, // Provides horizontal space
  },
  cardContainer: {
    marginVertical: 20, // Provides vertical space between cards
  },
});

export default HomeScreen;
