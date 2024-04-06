import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ReviewCard from "../components/ReviewCard";
import HeaderWithBtns from "../components/HeaderWithBtns";

const SocialScreen = () => {
  const [selectedBtn, setSelectedBtn] = useState("Cafés");

  const renderContent = () => {
    switch (selectedBtn) {
      case "Cafés":
        // Return components for the Cafés tab
        return <View></View>; // Placeholder for your Café content
      case "Friends":
        // Return components for the Friends tab
        return (
          <ScrollView style={styles.scrollView}>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </ScrollView>
        );
      case "Connect":
        // Return components for the Café Connect tab
        return <View>{/* Café Connect content goes here */}</View>;
      default:
        return <ReviewCard />; // Default case
    }
  };

  return (
    <View style={styles.container}>
      <HeaderWithBtns
        selectedBtn={selectedBtn}
        setSelectedBtn={setSelectedBtn}
      />
      <ScrollView style={styles.scrollView}>{renderContent()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    backgroundColor: "#FBF8F1", // Use the background color that suits your theme
  },
  title: {
    fontSize: 26,
    fontFamily: "Inter_400Regular",
    color: "#333333",
    marginHorizontal: 0, // Provides horizontal space
    marginTop: 18, // Provides space from the top
  },
  scrollView: {
    display: "flex",
    gap: 12, 
    paddingHorizontal: 10, // Provides horizontal space
    paddingVertical: 10,
  },
});

export default SocialScreen;
