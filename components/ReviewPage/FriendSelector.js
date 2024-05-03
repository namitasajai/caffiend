import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";
import { Plus, ArrowLeft, XCircle } from "phosphor-react-native";

// Enable LayoutAnimation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const friendsList = [
  {
    id: "1",
    name: "Kayla",
    avatar:
      "https://i.pinimg.com/564x/bb/8a/91/bb8a91a047deaa78f7a89228f80d92da.jpg",
  },
  {
    id: "2",
    name: "Sabine",
    avatar:
      "https://i.pinimg.com/564x/9b/35/e8/9b35e8639985d319099c9073c6df0a02.jpg",
  },
  {
    id: "3",
    name: "Namita",
    avatar:
      "https://i.pinimg.com/564x/eb/25/1d/eb251dd2a9d2f0d772a98aaf01c9190c.jpg",
  },
  {
    id: "4",
    name: "Samba",
    avatar:
      "https://i.pinimg.com/564x/c7/aa/50/c7aa509f4b23d77582225a2ae1d2ec2c.jpg",
  },
];

export default function FriendSelector() {
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFriends, setFilteredFriends] = useState(friendsList);

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [isExpanded, selectedFriends]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setSearchTerm("");
    setFilteredFriends(friendsList);
  };

  const addFriend = (friend) => {
    if (!selectedFriends.find((f) => f.id === friend.id)) {
      setSelectedFriends([...selectedFriends, friend]);
    }
    toggleExpand();
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = friendsList.filter((item) => {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredFriends(newData);
      setSearchTerm(text);
    } else {
      setFilteredFriends(friendsList);
      setSearchTerm(text);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {!isExpanded ? (
          <>
            <TouchableOpacity onPress={toggleExpand} style={styles.addButton}>
              <Plus size={24} color="white" />
            </TouchableOpacity>
            {selectedFriends.map((friend) => (
              <View key={friend.id} style={styles.friendContainer}>
                <TouchableOpacity
                  onPress={() =>
                    setSelectedFriends(
                      selectedFriends.filter((f) => f.id !== friend.id)
                    )
                  }
                  style={styles.removeButton}
                >
                  <XCircle size={20} color="gray" weight="fill" />
                </TouchableOpacity>
                <Image
                  source={{ uri: friend.avatar }}
                  style={styles.friendAvatar}
                />
                <Text style={styles.friendName}>{friend.name}</Text>
              </View>
            ))}
          </>
        ) : (
          <View style={{ flexDirection: "row", alignItems: "top" }}>
            <View style={styles.addButtonSearch}>
              <TouchableOpacity
                onPress={toggleExpand}
                style={styles.innerButtonSearch}
              >
                <ArrowLeft size={24} color="white" />
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.searchBar}
              value={searchTerm}
              onChangeText={searchFilter}
              placeholder="Search friends..."
            />
          </View>
        )}
      </ScrollView>
      {isExpanded && (
        <FlatList
          data={filteredFriends}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => addFriend(item)}
              style={styles.friendItem}
            >
              <View style={styles.friendAvatarSmallOutline}>
                <Image
                  source={{ uri: item.avatar }}
                  style={styles.friendAvatarSmall}
                />
              </View>

              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "start",
    gap: 6,
    backgroundColor: "#F0E6D0",
    borderRadius: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    minHeight: 70,
  },
  horizontalScroll: {
    width: "100%",
    height: 73,
    overflow: "hidden",
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#9E7D5B",
    borderColor: "white",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    marginRight: 10,
  },
  addButtonSearch: {
    width: 50,
    height: 50,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  innerButtonSearch: {
    width: 49,
    height: 49,
    borderRadius: 25,
    backgroundColor: "#9E7D5B",
    borderColor: "white",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  friendContainer: {
    alignItems: "center",
    marginRight: 10,
    position: "relative",
  },
  removeButton: {
    position: "absolute",
    top: 0,
    right: -5,
    zIndex: 1,
  },
  friendAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "white",
    borderWidth: 3,
  },
  friendName: {
    fontSize: 12,
    marginTop: 2,
    textAlign: "center",
    marginBottom: 10,
  },
  searchBar: {
    width: 270,
    height: 50,
    padding: 10,
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
  },
  friendAvatarSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  friendAvatarSmallOutline: {
    width: 43,
    height: 43,
    borderRadius: 20,
    marginRight: 10,
    borderColor: "white",
    borderWidth: 2,
  },
  friendItem: {
    paddingHorizontal: 6,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 10,
    width: 330,
  },
});
