import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  Platform,
} from "react-native";
import {
  Heart,
  CurrencyDollar,
  WifiHigh,
  ForkKnife,
  Coffee,
  CopySimple,
  CaretDown,
  CaretLeft,
  ArrowElbowUpRight,
  PlusCircle,
  UsersThree,
  SpeakerLow,
  BatteryLow,
} from "phosphor-react-native";
import ReviewCard from "./ReviewCard";

const CafePage = ({ cafe, setActiveView }) => {
  const openDirections = () => {
    const encodedAddress = encodeURIComponent(cafe.address); // Ensure the address is URL-encoded
    const scheme = Platform.OS === "ios" ? "maps:" : "geo:";
    const url = `${scheme}?q=${encodedAddress}`;
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  const tagData = [
    {
      key: "wifi",
      label: "amazing",
      icon: <WifiHigh size={24} color={"#FFF"} />,
    },
    {
      key: "busy",
      label: "busy",
      icon: <UsersThree size={24} color={"#FFF"} />,
    },
    {
      key: "quiet",
      label: "quiet",
      icon: <SpeakerLow size={24} color={"#FFF"} />,
    },
    {
      key: "outlets",
      label: "some outlets",
      icon: <BatteryLow size={24} color={"#FFF"} />,
    },
  ];

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{cafe.name}</Text>
          <Heart color="#FF4141" weight="fill" />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.tag}>good study spot</Text>
          <Text style={styles.tag}>artisanal coffee</Text>
          <TouchableOpacity>
            <PlusCircle size={30} color="#666" weight="thin" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.distance}>{cafe.distance} miles</Text>
          <Coffee size={16} color="#333333" />
          <ForkKnife size={16} color="#333333" />
          <WifiHigh size={16} color="#333333" />
          <View style={styles.priceRating}>
            <CurrencyDollar
              style={styles.priceRatingItem}
              size={16}
              color="#333333"
            />
            <CurrencyDollar
              style={styles.priceRatingItem}
              size={16}
              color="#333333"
            />
            <CurrencyDollar
              style={styles.priceRatingItem}
              size={16}
              color="#666"
            />
            <CurrencyDollar
              style={styles.priceRatingItem}
              size={16}
              color="#666"
            />
          </View>
          <TouchableOpacity
            style={styles.directionsButton}
            onPress={() => openDirections()}
          >
            <ArrowElbowUpRight size={16} color="#FFFFFF" weight="bold" />
            <Text style={styles.directionsText}>Directions</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.ratingContainer} onPress={() => setActiveView("cafeView")}>
          <CaretLeft size={16} color="#E58D23" weight="bold" />
          <Text style={styles.rating}>{cafe.rating}</Text>
        </TouchableOpacity>
        <View style={styles.reviewContainer}>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  content: {
    backgroundColor: "#FBF8F1",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "90%",
  },
  reviewContainer: {
    marginTop: 20,
  },
  closeBtn: {
    alignSelf: "left",
    position: "absolute",
    top: 20,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#96A978",
    alignItems: "center",
    justifyContent: "center",
  },
  reviewBtn: {
    backgroundColor: "#3E4A2B",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 60,
    zIndex: 1,
  },
  reviewBtnText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter_500Medium",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  contentContainer: {
    padding: 20,
  },
  name: {
    fontSize: 22,
    fontFamily: "Inter_500Medium",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 6,
    marginVertical: 2,
  },
  priceRating: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 2,
  },
  priceRatingItem: {
    marginHorizontal: -2,
  },
  tag: {
    fontSize: 12,
    color: "#666",
    borderColor: "#666",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  tagText: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: "#FFF",
    textAlign: "center",
    marginTop: 2,
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
  ratingContainer: {
    backgroundColor: "#4F1C11",
    width: 60,
    height: 40,
    gap: 4,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    top: 20,
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Inter_700Bold",
    color: "#E58D23",
  },
  photoContainer: {
    flexDirection: "row",
    gap: 8,
    marginVertical: 20,
    overflowX: "scroll",
  },
  photo: {
    width: 113,
    height: 150,
    borderRadius: 10,
  },
  infoBox: {
    marginVertical: 10,
    backgroundColor: "#F0E6D0",
    padding: 15,
    borderRadius: 10,
  },
  infoBoxTags: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    backgroundColor: "#F0E6D0",
    padding: 15,
    borderRadius: 10,
    alignContent: "center",
  },
  infoBoxTitle: {
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
  },
  infoBoxHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
  infoBoxBtnContainer: {
    flexDirection: "row",
    gap: 6,
  },
  infoBoxBtn: {
    backgroundColor: "#96A978",
    width: 30,
    height: 30,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  infoBoxText: {
    fontSize: 14,
    fontFamily: "Inter_500Medium",
    color: "#333333",
    marginBottom: 2,
  },
  reviewHeading: {
    fontSize: 20,
    fontFamily: "Inter_500Medium",
    color: "#333333",
    marginVertical: 10,
  },
  dividerHeader: {
    fontSize: 20,
    fontFamily: "Inter_600SemiBold",
    color: "#333333",
    marginVertical: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 10,
  },
  tagContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  infoTag: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9E7D5B",
    padding: 10,
    borderRadius: 10,
    width: "23%",
  },
});

export default CafePage;
