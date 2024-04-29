import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import CafeCard from "../components/CafeCard";
import cafeData from "../components/cafeData";
import Header from "../components/Header";
import BottomSheetModal from "../components/BottomSheetModal";

const HomeScreen = ({ navigation }) => {
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCafePress = (cafe) => {
    setSelectedCafe(cafe);
    setModalVisible(true);
  };

  const handleSearchChange = (query) => {
    console.log(query);
    setSearchQuery(query);
  };

  const filteredCafeData = cafeData.filter(
    (cafe) => cafe.name.toLowerCase().includes(searchQuery.toLowerCase()),
    console.log(searchQuery.toLowerCase)
  );

  return (
    <View style={styles.container}>
      <Header
        title="Location"
        searchValue={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Near You</Text>
        <View style={styles.cardContainer}>
          console.log(filteredCafeData)
          {filteredCafeData.map((cafe, index) => (
            <CafeCard
              key={index}
              cafe={cafe}
              onPress={() => handleCafePress(cafe)}
            />
          ))}
        </View>
      </ScrollView>
      {isModalVisible && (
        <BottomSheetModal
          isVisible={isModalVisible}
          onSwipeComplete={() => setModalVisible(false)}
          cafe={selectedCafe}
          navigation={navigation}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    backgroundColor: "#FBF8F1",
  },
  title: {
    fontSize: 26,
    fontFamily: "Inter_400Regular",
    color: "#333333",
    marginHorizontal: 0,
    marginTop: 18,
  },
  scrollView: {
    paddingHorizontal: 18,
  },
  cardContainer: {
    marginVertical: 12,
  },
});

export default HomeScreen;
