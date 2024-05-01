import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
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
} from "phosphor-react-native";

const ReviewScreenModal = ({ isVisible, onSwipeComplete, cafe, navigation }) => {
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onSwipeComplete}
      onBackdropPress={onSwipeComplete}
      swipeDirection={["down"]}
      style={styles.bottomModal}
    >
      <View style={styles.content}>
        <Image source={{ uri: cafe.imageUrl }} style={styles.image} />
        <TouchableOpacity style={styles.closeBtn} onPress={onSwipeComplete}>
          <CaretDown size={32} color="#000" weight="thin" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.reviewBtn}
          onPress={() => {
            console.log(cafe); // Debug: Log the cafe object
            navigation.navigate("ReviewScreen", { cafe: cafe, isVisible: isVisible, onSwipeComplete: onSwipeComplete, navigation: navigation});
          }}
        >
          <Text style={styles.reviewBtnText}>Leave a Review</Text>
        </TouchableOpacity>

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
            <TouchableOpacity style={styles.directionsButton}>
              <ArrowElbowUpRight size={16} color="#FFFFFF" weight="bold" />
              <Text style={styles.directionsText}>Directions</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.ratingContainer}>
            <Text style={styles.rating}>{cafe.rating}</Text>
            <CaretRight size={16} color="#E58D23" weight="bold" />
          </TouchableOpacity>
          <View style={styles.photoContainer}>
            <Image
              style={styles.photo}
              source={{
                uri: "https://i.pinimg.com/564x/2f/95/c5/2f95c5018a76147acc3939dff3fb68f2.jpg",
              }}
            />
            <Image
              style={styles.photo}
              source={{
                uri: "https://i.pinimg.com/564x/2f/95/c5/2f95c5018a76147acc3939dff3fb68f2.jpg",
              }}
            />
            <Image
              style={styles.photo}
              source={{
                uri: "https://i.pinimg.com/564x/2f/95/c5/2f95c5018a76147acc3939dff3fb68f2.jpg",
              }}
            />
            <Image
              style={styles.photo}
              source={{
                uri: "https://i.pinimg.com/564x/2f/95/c5/2f95c5018a76147acc3939dff3fb68f2.jpg",
              }}
            />
            <Image
              style={styles.photo}
              source={{
                uri: "https://i.pinimg.com/564x/2f/95/c5/2f95c5018a76147acc3939dff3fb68f2.jpg",
              }}
            />
            <Image
              style={styles.photo}
              source={{
                uri: "https://i.pinimg.com/564x/2f/95/c5/2f95c5018a76147acc3939dff3fb68f2.jpg",
              }}
            />
          </View>
          <View style={styles.infoBox}>
            <View style={styles.infoBoxHeader}>
              <Text style={styles.infoBoxTitle}>Address</Text>
              <View style={styles.infoBoxBtnContainer}>
                <View style={styles.infoBoxBtn}>
                  <CopySimple size={20} color="#FFF" />
                </View>
                <View style={styles.infoBoxBtn}>
                  <ArrowElbowUpRight size={20} color="#FFF" />
                </View>
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
        </View>
        {/* Add other elements like address, hours, review button, etc. */}
      </View>
    </Modal>
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
    bottom: 30,
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
  // ... additional styles for other elements
});

export default ReviewScreenModal;
