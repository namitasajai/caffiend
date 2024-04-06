import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MapPin } from "phosphor-react-native";

const HeaderWithBtns = ({ selectedBtn, setSelectedBtn }) => {
  const buttonTitles = ["Cafés", "Friends", "Connect"];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedBtn}</Text>
      <View style={styles.locationContainer}>
        <MapPin size={18} color="#333" weight="bold" />
        <Text style={styles.locationText}>New York, NY, USA</Text>
      </View>
      <View style={styles.btnsContainer}>
        {buttonTitles.map((btnTitle) => (
          <TouchableOpacity
            key={btnTitle}
            style={[
              styles.btn,
              selectedBtn === btnTitle && styles.btnSelected
            ]}
            onPress={() => setSelectedBtn(btnTitle)}
          >
            <Text
              style={[
                styles.btnText,
                selectedBtn === btnTitle && styles.btnTextSelected
              ]}
            >
              {btnTitle}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
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
  title: {
    fontSize: 24,
    color: "#333333",
    fontFamily: "Inter_500Medium",
    marginTop: 36,
    marginBottom: 2,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 4,
  },
  locationText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333333",
    fontWeight: "400",
  },
  btnsContainer: {
    backgroundColor: "#FBF8F1",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 2,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 6,
    marginTop: 10,
  },
  btnSelected: {
    flex: 1,
    backgroundColor: "#3E4A2B",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
  },
  btn: {
    flex: 1,
    backgroundColor: "#FBF8F1",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
  },
  btnText: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    color: "#666666",
  },
  btnTextSelected: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    color: "#FBF8F1",
  },
});

export default HeaderWithBtns;
