import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { PlusCircle } from "phosphor-react-native";

const windowWidth = Dimensions.get("window").width;

const QuestionComponent = ({ onClickButton }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Who did you go with?</Text>
      <TouchableOpacity style={styles.addButton} onPress={onClickButton}>
        <PlusCircle size={20} color="#3E4A2B" weight="bold" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 68,
    backgroundColor: "#F0EAD6",
    borderRadius: 23,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 34,
    paddingRight: 33,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },
  label: {
    color: "#000000",
    fontSize: 14,
    fontFamily: "Inter_300Light",
    lineHeight: 18.29,
    marginRight: 16,
  },
  addButton: {},
});

export default QuestionComponent;
