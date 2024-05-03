import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";
import Modal from "react-native-modal";
import { CaretDown } from "phosphor-react-native";
import {
  PanGestureHandler,
  State,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import CafePage from "./CafePage";
import ReviewView from "./ReviewView";

const BottomSheetModal = ({ isVisible, onSwipeComplete, cafe, navigation }) => {
  const [activeView, setActiveView] = useState("cafeView");
  const translateY = useRef(new Animated.Value(0)).current;

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let { translationY } = event.nativeEvent;
      translateY.setValue(0); // Reset translationY
      if (translationY > 100) {
        // Threshold to decide closing
        onSwipeComplete();
      } else {
        Animated.spring(translateY, {
          toValue: 0,
          tension: 200,
          friction: 12,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onSwipeComplete}
        style={styles.bottomModal}
        useNativeDriver={true}
        onSwipeComplete={onSwipeComplete}
      >
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Animated.View
            style={[
              styles.content,
              {
                transform: [{ translateY }],
              },
            ]}
          >
            <Image source={{ uri: cafe.imageUrl }} style={styles.image} />
            <TouchableOpacity style={styles.closeBtn} onPress={onSwipeComplete}>
              <CaretDown size={32} color="#000" weight="thin" />
            </TouchableOpacity>
            {activeView === "cafeView" ? (
              <CafePage cafe={cafe} />
            ) : (
              <ReviewView cafe={cafe} setActiveView={setActiveView} />
            )}
            {activeView === "cafeView" && (
              <TouchableOpacity
                style={styles.reviewBtn}
                onPress={() => {
                  setActiveView("rateExperience");
                }}
              >
                <Text style={styles.reviewBtnText}>Leave a Review</Text>
              </TouchableOpacity>
            )}
          </Animated.View>
        </PanGestureHandler>
      </Modal>
    </GestureHandlerRootView>
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
  // ... additional styles for other elements
});

export default BottomSheetModal;
