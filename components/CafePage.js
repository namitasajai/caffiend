import React, { useState } from "react";
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
  CaretRight,
  ArrowElbowUpRight,
  PlusCircle,
  UsersThree,
  SpeakerLow,
  BatteryLow,
} from "phosphor-react-native";
import StartSessionModal from "./StartSessionModal";
import { useNavigation } from "@react-navigation/native";

const CafePage = ({ cafe, setActiveView }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

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
    <>
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
          <TouchableOpacity
            style={styles.ratingContainer}
            onPress={() => setActiveView("cafeReviews")}
          >
            <Text style={styles.rating}>{cafe.rating}</Text>
            <CaretRight size={16} color="#E58D23" weight="bold" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.seshBtn}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.seshBtnText}>Start a Cafe Session</Text>
          </TouchableOpacity>
          <View style={styles.photoContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Image
                  key={index}
                  style={styles.photo}
                  source={{
                    uri: `https://i.pinimg.com/564x/2f/95/c5/2f95c5018a76147acc3939dff3fb68f2.jpg`,
                  }}
                />
              ))}
            </ScrollView>
          </View>
          <View style={styles.infoBox}>
            <View style={styles.infoBoxHeader}>
              <Text style={styles.infoBoxTitle}>Address</Text>
              <View style={styles.infoBoxBtnContainer}>
                <TouchableOpacity style={styles.infoBoxBtn}>
                  <CopySimple size={20} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.infoBoxBtn}
                  onPress={() => openDirections()}
                >
                  <ArrowElbowUpRight size={20} color="#FFF" />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.infoBoxText}>3675 Market St,</Text>
            <Text style={styles.infoBoxText}>Philadelphia, PA 19104</Text>
          </View>
          <View style={styles.infoBox}>
            <View style={styles.infoBoxHeader}>
              <Text style={styles.infoBoxTitle}>Hours</Text>
              <CaretDown size={20} color="#333333" />
            </View>
            <Text style={styles.infoBoxText}>Mon-Fri: 7:00am - 7:00pm</Text>
            <Text style={styles.infoBoxText}>Sat-Sun: 8:00am - 5:00pm</Text>
          </View>
          <Text style={styles.dividerHeader}> Know Before You Go </Text>
          <View style={styles.infoBoxTags}>
            {tagData.map((tag) => (
              <View key={tag.key} style={styles.infoTag}>
                {tag.icon}
                <Text style={styles.tagText}>{tag.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <StartSessionModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onStart={() => {
          console.log("Session started for", cafe.name);
          navigation.navigate("Social", { initialTab: "Connect" });
          setModalVisible(false);
        }}
        cafeName={cafe.name}
      />
    </>
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
  seshBtn: {
    flexDirection: "row",
    backgroundColor: "#96A978",
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  seshBtnText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
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
    marginRight: 8,
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
