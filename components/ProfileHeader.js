// ProfileHeader.js
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Gear } from "phosphor-react-native";

const ProfileHeader = ({ userName, userHandle, userProfileImg }) => {
  return (
    <View style={styles.container}>
      <Image source={userProfileImg} style={styles.profileImage} />
      <View style={styles.profileDetails}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userHandle}>{userHandle}</Text>
      </View>
      <TouchableOpacity style={styles.settingsButton}>
        <Gear color="white" size={40} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#96A978",
    borderRadius: 38,
    padding: 40,
    paddingBottom: 10,
    height: 190,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileImage: {
    width: 72,
    height: 72,
    borderRadius: 33.5,
    borderWidth: 2,
    borderColor: "white",
  },
  profileDetails: {
    flex: 1,
    marginLeft: 15,
    alignItems: "flex-start",
  },
  userName: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  userHandle: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
  },
});

export default ProfileHeader;
