import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CaretLeft } from "phosphor-react-native";

const BackBtnHeader = ({ cafe }) => {
  return (
    <View>
      <TouchableOpacity style={styles.backBtn}>
        <CaretLeft size={13} color="#666" />
      </TouchableOpacity>
      <Text style={styles.title}>{cafe.name}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#96A978",
    borderRadius: 38,
    padding: 25,
    height: 190,
  },
  backBtn: {
    position: "absolute",
    top: 36,
    left: 25,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  title: {
    fontSize: 24,
    color: "#333333",
    fontFamily: "Inter_500Medium",
    marginTop: 36,
    marginBottom: 2,
  }
});

export default BackBtnHeader;
