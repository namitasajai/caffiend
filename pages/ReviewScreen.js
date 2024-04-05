import React from "react";
import { View } from "react-native";
import SliderComponent from "../components/Slider"; // Assuming SliderComponent is the correct name and path
import AddPhotoComponent from "../components/AddPhoto"; // Assuming AddPhotoComponent is the correct name and path
import QuestionComponent from "../components/Question";
import AddFavoriteDishesComponent from "../components/AddFavoriteDishes";

const ReviewScreen = () => (
  <View
    style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}
  >
    <SliderComponent />
    <AddPhotoComponent />
    <QuestionComponent />
    <AddFavoriteDishesComponent />
  </View>
);

export default ReviewScreen;
