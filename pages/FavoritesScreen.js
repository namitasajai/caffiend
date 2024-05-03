import React, { useState } from "react"; // Import useState for state management
import {
  ScrollView,
  StyleSheet,
  View,
  Text, // Import Text to use for displaying titles or any other labels
} from "react-native";
import CafeCard from "../components/CafeCard";
import cafeData from "../components/cafeData";
import Header from "../components/Header";
import Filter from "../components/Filter";
import BottomSheetModal from "../components/BottomSheetModal";

const FavoritesScreen = ({ navigation }) => {
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [filters, setFilters] = useState({
    plentyOfOutlets: false,
    freeWifi: false,
    quiet: false,
    notTooBusy: false,
    petFriendly: false,
    plentyOfSeating: false,
    sustainable: false,
    quietCorners: false,
    affordablePrices: false,
    veganOptions: false,
    vegetarianOptions: false,
    glutenFree: false,
  });

  const handleCafePress = (cafe) => {
    setSelectedCafe(cafe);
    setModalVisible(true);
  };

  const renderFilters = () => {
    return Object.keys(filters).map((filterKey) => (
      <View key={filterKey} style={styles.filterItem}>
        <Text style={styles.filterText}>
          {camelCaseToHumanReadable(filterKey)}
        </Text>
        <Switch
          value={filters[filterKey]}
          onValueChange={() => toggleFilter(filterKey)}
        />
      </View>
    ));
  };

  const onClose = () => {
    setShowFilters(false);
  };

  const toggleFilter = (key) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: !prevFilters[key],
    }));
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredCafeData = cafeData.filter((cafe) => {
    const matchesSearch = cafe.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilters = Object.keys(filters).every((key) =>
      filters[key] ? cafe[key] === true : true
    );
    return matchesSearch && matchesFilters;
  });
  const favoritedCafes = cafeData.filter((cafe) => {
    return (
      cafe.favorited &&
      Object.keys(filters).every((key) =>
        filters[key] ? cafe[key] === true : true
      )
    );
  });

  const handleFilterPress = () => {
    setShowFilters(!showFilters);
    console.log("Filter visibility:", !showFilters); // Check if state updates
  };

  return (
    <View style={styles.container}>
      <Header
        title="Favorites"
        searchValue={searchQuery}
        onSearchChange={handleSearchChange}
        onFilterPress={handleFilterPress} // This should toggle the visibility of filters
      />
      {showFilters && <Filter filters={filters} setFilters={setFilters} />}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Your Favorites</Text>
        <View style={styles.cardContainer}>
          {favoritedCafes.map((cafe, index) => (
            <CafeCard
              key={index.toString()}
              cafe={cafe}
              handleCafePress={() => handleCafePress(cafe)}
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

export default FavoritesScreen;
