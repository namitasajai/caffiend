import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { XCircle, Camera } from "phosphor-react-native"; // Import Camera if ImageSquare is not intended

const PhotoSelector = () => {
  const [photos, setPhotos] = useState([]);

  const handleAddPhoto = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      console.log(result.assets[0].uri); // Log the URI to ensure it's correct
      setPhotos([...photos, { uri: result.assets[0].uri}]);
    }
  };

  const handleDeletePhoto = (uri) => {
    setPhotos(photos.filter((photo) => photo.uri !== uri));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.photoContainer}>
            <Image
              source={{ uri: item.uri }}
              style={styles.image}
              onError={(e) => console.log('Failed to load image:', e.nativeEvent.error)}
            />
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeletePhoto(item.uri)}
            >
              <XCircle size={24} color="#333333" weight="fill"/>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => item.uri + index}
        ListHeaderComponent={() => (
          <TouchableOpacity style={styles.addButton} onPress={handleAddPhoto}>
            <Camera size={24} color="#6B4A28" />
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  photoContainer: {
    position: "relative",
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  deleteButton: {
    position: "absolute",
    top: 2,
    right: 2,
  },
  addButton: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#B69D84",
    marginRight: 10,
  },
});

export default PhotoSelector;
