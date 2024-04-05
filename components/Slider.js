import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const SliderComponent = () => {
  const [sliderValue, setSliderValue] = useState(5);

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>How was it?</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10}
        minimumTrackTintColor="#3E4A2B"
        maximumTrackTintColor="#EB8484"
        thumbTintColor="#FFFFFF"
        value={sliderValue}
        onValueChange={(value) => setSliderValue(value)}
      />
      <View style={styles.valueBubble}>
        <Text style={styles.valueText}>{sliderValue.toFixed(1)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0E6D0",
    borderRadius: 21.04,
    paddingVertical: 20,
    paddingHorizontal: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  questionText: {
    color: "black",
    fontSize: 15,
    fontFamily: "Inter",
    fontWeight: "500",
    marginBottom: 30, // Adjust as needed
  },
  slider: {
    width: 275,
    height: 40, // Adjust height to match the design if needed
  },
  valueBubble: {
    position: "absolute",
    top: 12,
    right: 28,
    backgroundColor: "white",
    borderRadius: 45,
    paddingVertical: 12,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
  },
  valueText: {
    color: "black",
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: "500",
  },
});

export default SliderComponent;
