import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Platform,
} from "react-native";
import {
  ArrowElbowUpRight,
  Plus,
  Coffee,
  ForkKnife,
  WifiHigh,
  Heart,
} from "phosphor-react-native";

const CafeCard = ({ cafe, handleCafePress }) => {
  const [isFavorited, setIsFavorited] = useState(cafe.favorited);
  const [showOfferings, setShowOfferings] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const toggleOfferings = () => {
    setShowOfferings(!showOfferings);
  };

  const getOfferings = () => {
    const attributes = [
      { label: "plenty of uutlets", value: cafe.plentyOfOutlets },
      { label: "free wifi", value: cafe.freeWifi },
      { label: "quiet", value: cafe.quiet },
      { label: "not too busy", value: cafe.notTooBusy },
      { label: "pet friendly", value: cafe.petFriendly },
      { label: "plenty of seating", value: cafe.plentyOfSeating },
      { label: "sustainable", value: cafe.sustainable },
      { label: "quiet corners", value: cafe.quietCorners },
      { label: "affordable prices", value: cafe.affordablePrices },
      { label: "vegan options", value: cafe.veganOptions },
      { label: "vegetarian options", value: cafe.vegetarianOptions },
      { label: "gluten-Free options", value: cafe.glutenFree },
    ];
    return attributes.filter((attr) => attr.value).map((attr) => attr.label);
  };

  const openDirections = () => {
    const encodedAddress = encodeURIComponent(cafe.address); // Ensure the address is URL-encoded
    const scheme = Platform.OS === "ios" ? "maps:" : "geo:";
    const url = `${scheme}?q=${encodedAddress}`;
    Linking.openURL(url).catch(err => console.error("An error occurred", err));
  };
  

  return (
    <TouchableOpacity style={styles.card} onPress={() => handleCafePress(cafe)}>
      <Image source={{ uri: cafe.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{cafe.name}</Text>
        <View style={styles.subheading}>
          <Text style={styles.distance}>{cafe.distance} miles</Text>
          <TouchableOpacity
            onPress={openDirections}
            style={styles.directionsButton}
          >
            <ArrowElbowUpRight size={16} color="#FFFFFF" weight="bold" />
            <Text style={styles.directionsText}>Directions</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={toggleOfferings}
          style={styles.offeringsButton}
        >
          <Text style={styles.offeringsText}>Offerings</Text>
          <Plus size={16} color="#666666" />
        </TouchableOpacity>
        {showOfferings && (
          <View style={styles.offeringsList}>
            {getOfferings().map((offering, index) => (
              <Text key={index} style={styles.offeringText}>
                {offering}
              </Text>
            ))}
          </View>
        )}
        <View style={styles.icons}>
          <Coffee size={16} color="#333333" />
          <ForkKnife size={16} color="#333333" />
          <WifiHigh size={16} color="#333333" />
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{cafe.rating}</Text>
        </View>
        <TouchableOpacity
          style={styles.favoriteContainer}
          onPress={toggleFavorite}
        >
          {
            <Heart
              size={30}
              color="#E66565"
              weight={isFavorited ? "fill" : "thin"}
            />
          }
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F0E6D0",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 16,
  },
  details: {
    flex: 1,
    alignContent: "top",
  },
  subheading: {
    flexDirection: "row",
    justifyContent: "left",
    gap: 8,
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontFamily: "Inter_500Medium",
    color: "#333333",
    marginBottom: 4,
  },
  distance: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: "#666666",
  },
  directionsButton: {
    flexDirection: "row",
    backgroundColor: "#7689AB",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  directionsText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    marginLeft: 4,
  },
  offeringsText: {
    fontSize: 12,
    marginRight: 4,
  },
  offeringsList: {
    justifyContent: "center",
    marginLeft: 12,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginRight: 75,
  },
  offeringText: {
    fontSize: 10,
    color: "#333",
  },
  offeringsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    fontFamily: "Inter_400Regular",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 20,
    marginTop: 4,
    marginBottom: 4,
    alignItems: "center",
    width: 150,
  },
  offeringsText: {
    fontSize: 12,
    color: "#666666",
  },
  icons: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8,
  },
  ratingContainer: {
    backgroundColor: "#4F1C11",
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0.5,
    bottom: 0.5,
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Inter_700Bold",
    color: "#E58D23",
  },
  favoriteContainer: {
    position: "absolute",
    right: 0.5,
    top: 0.5,
  },
});

export default CafeCard;
