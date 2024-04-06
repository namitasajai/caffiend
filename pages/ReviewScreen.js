import React from "react";
import { View } from "react-native";
import SliderComponent from "../components/Slider";
import AddPhotoComponent from "../components/AddPhoto";
import QuestionComponent from "../components/Question";
import AddFavoriteDishesComponent from "../components/AddFavoriteDishes";
import NoteComponent from "../components/NoteComponent";

const ReviewScreen = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 40, // This will push everything down a bit
      gap: 20,
    }}
  >
    <SliderComponent />
    <AddPhotoComponent />
    <QuestionComponent />
    <AddFavoriteDishesComponent />
    <NoteComponent />
  </View>
);

export default ReviewScreen;
