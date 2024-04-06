import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CafeCard from "../components/CafeCard";
import cafeData from "../components/cafeData";
import Header from "../components/Header";
import BottomSheetModal from "../components/BottomSheetModal"; 

const HomeScreen = () => {
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleCafePress = (cafe) => {
    setSelectedCafe(cafe);
    console.log(cafe); 
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Header title="Location" />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Near You</Text>
        <View style={styles.cardContainer}>
          {cafeData.map((cafe, index) => (
              <CafeCard cafe={cafe} handleCafePress={handleCafePress} />
          ))}
        </View>
      </ScrollView>
      {isModalVisible && (
        <BottomSheetModal
          isVisible={isModalVisible}
          onSwipeComplete={() => setModalVisible(false)}
          cafe={selectedCafe}
        />
      )}
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
    paddingHorizontal: 18, // Provides horizontal space
  },
  cardContainer: {
    marginVertical: 12, // Provides vertical space between cards
  },
});

export default HomeScreen;
