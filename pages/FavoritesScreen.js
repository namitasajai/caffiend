import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CafeCard from "../components/CafeCard";
import cafeData from "../components/cafeData";
import Header from "../components/Header";

const FavoritesScreen = () => {
  const favoritedCafes = cafeData.filter((cafe) => cafe.favorited);

  return (
    <View style={styles.container}>
      <Header title="Favorites" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardContainer}>
          {favoritedCafes.map((cafe, index) => (
            <CafeCard key={index.toString()} cafe={cafe} />
          ))}
        </View>
      </ScrollView>
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

export default FavoritesScreen;
