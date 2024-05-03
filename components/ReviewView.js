import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import StarRating from "./ReviewPage/StarRating";
import FriendSelector from "./ReviewPage/FriendSelector";
import AddPhoto from "./ReviewPage/AddPhoto";
import SelectableButtons from "./ReviewPage/SelectableButtons";
import CommentBox from "./ReviewPage/CommentBox";
import { CaretLeft } from "phosphor-react-native";

const ReviewView = ({ cafe, setActiveView }) => {
  // Define your sections here
  const data = [
    { type: 'header', content: cafe.name },
    { type: 'rating', content: 'Rate your experience' },
    { type: 'friends', content: 'Who did you go with?' },
    { type: 'photos', content: 'Add photos' },
    { type: 'attributes', content: 'Select all that apply' },
    { type: 'tags', content: 'How would you describe this cafe?' },
    { type: 'comment', content: 'Leave a comment' },
    { type: 'submit', content: 'Post Review' }
  ];

  const options1 = [
    "Plenty of outlets", "Free Wi-Fi", "Quiet", "Not too busy", "Pet-friendly",
    "Plenty of seating", "Sustainable", "Quiet corners", "Affordable prices",
    "Vegan options", "Vegetarian options", "Gluten-free"
  ];

  const options2 = [
    "Quick service", "Local favorite", "Specialty drinks", "Live music nights", 
    "Great for groups", "Outdoor seating", "Variety of pastries", "Excellent coffee", 
    "Friendly staff", "Cozy seating"
  ];

  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'header':
        return (
          <View style={styles.flexBox}>
            <TouchableOpacity style={styles.closeBtn} onPress={() => setActiveView("cafeView")}>
              <CaretLeft size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.name}>{item.content}</Text>
          </View>
        );
      case 'rating':
        return (
          <>
            <Text style={styles.reviewHeading}>{item.content}</Text>
            <StarRating />
          </>
        );
      case 'friends':
        return (
          <>
            <Text style={styles.reviewHeading}>{item.content}</Text>
            <FriendSelector />
          </>
        );
      case 'photos':
        return (
          <>
            <Text style={styles.reviewHeading}>{item.content}</Text>
            <AddPhoto />
          </>
        );
      case 'attributes':
        return (
          <>
            <Text style={styles.reviewHeading}>{item.content}</Text>
            <SelectableButtons options={options1} />
          </>
        );
      case 'tags':
        return (
          <>
            <Text style={styles.reviewHeading}>{item.content}</Text>
            <SelectableButtons options={options2} />
          </>
        );
      case 'comment':
        return (
          <>
            <Text style={styles.reviewHeading}>{item.content}</Text>
            <CommentBox />
          </>
        );
      case 'submit':
        return (
          <TouchableOpacity style={styles.reviewBtn}>
            <Text style={styles.reviewBtnText}>{item.content}</Text>
          </TouchableOpacity>
        );
      default:
        return null;
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.contentContainer}
    />
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
    width: 20,
    height: 20,
    borderRadius: 100,
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
    zIndex: 1,
    marginVertical: 20,
    width: "100%",
    marginBottom: 100,
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
  flexBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 4, 
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
  reviewHeading: {
    fontSize: 16,
    fontFamily: "Inter_500Medium",
    color: "#333333",
    marginVertical: 10,
    marginTop: 15,
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
});

export default ReviewView;