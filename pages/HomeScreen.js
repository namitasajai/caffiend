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
import Filter from "../components/Filter";

const HomeScreen = ({ navigation }) => {
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
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

  

  const handleCafePress = (cafe) => {
    setSelectedCafe(cafe);
    setModalVisible(true);
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

  return (
    <View style={styles.container}>
      <Header
        title="Location"
        searchValue={searchQuery}
        onSearchChange={handleSearchChange}
        onFilterPress={() => setShowFilters(!showFilters)}
      />
      {showFilters && <Filter filters={filters} setFilters={setFilters} onClose={onClose} />}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Near You</Text>
        <View style={styles.cardContainer}>
          {/* console.log(filteredCafeData) */}
          {filteredCafeData.map((cafe, index) => (
            <CafeCard
              key={index}
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

export default HomeScreen;
