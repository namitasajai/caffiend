import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  Animated,
  StyleSheet,
} from "react-native";
import { Plus, ArrowLeft, XCircle } from "phosphor-react-native";

// Example friends data
const friendsList = [
  { id: "1", name: "Alice", avatar: "https://via.placeholder.com/50" },
  { id: "2", name: "Bob", avatar: "https://via.placeholder.com/50" },
  { id: "3", name: "Charlie", avatar: "https://via.placeholder.com/50" },
  { id: "4", name: "Samba", avatar: "https://via.placeholder.com/50" },
  { id: "5", name: "Chutney", avatar: "https://via.placeholder.com/50" },
];

export default function FriendSelector() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const animationHeight = useRef(new Animated.Value(0)).current;
  const [filteredFriends, setFilteredFriends] = useState(friendsList);

  const toggleExpand = () => {
    if (isExpanded) {
      Animated.timing(animationHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animationHeight, {
        toValue: 200,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
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
    <Animated.View
      style={
        selectedFriends.length >= 1
          ? [styles.containerWithFriends, { height: animationHeight }]
          : [styles.container, { height: animationHeight }]
      }
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
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
            <TouchableOpacity onPress={toggleExpand} style={styles.addButton}>
              <ArrowLeft size={24} color="white" />
            </TouchableOpacity>
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
              style={styles.friendItem}
              onPress={() => addFriend(item)}
            >
              <Image
                source={{ uri: item.avatar }}
                style={styles.friendAvatarSmall}
              />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
          onScrollBeginDrag={() => setIsScrolling(true)}
          onScrollEndDrag={() => setIsScrolling(false)}
          onMomentumScrollBegin={() => setIsScrolling(true)}
          onMomentumScrollEnd={() => setIsScrolling(false)}
          style={styles.friendsList}
        />
      )}
    </Animated.View>
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
  containerWithFriends: {
    flexDirection: "column",
    alignItems: "start",
    gap: 6,
    backgroundColor: "#F0E6D0",
    borderRadius: 10,
    padding: 10,
    minHeight: 90,
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
    marginRight: 10,
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
  },
  searchBar: {
    position: "absolute",
    width: 330,
    height: 50,
    paddingLeft: 55,
    padding: 10,
    borderRadius: 25,
    backgroundColor: "white",
  },
  friendAvatarSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
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
