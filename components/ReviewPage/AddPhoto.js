import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { View, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { XCircle, Camera } from 'phosphor-react-native'; // Import Camera if ImageSquare is not intended

const PhotoSelector = () => {
  const [photos, setPhotos] = useState([]);

  const handleAddPhoto = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // Process the selected image and add it to the photos state
      setPhotos([...photos, { uri: result.uri }]);
    }
  };

  const handleDeletePhoto = (uri) => {
    setPhotos(photos.filter(photo => photo.uri !== uri));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.photoContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeletePhoto(item.uri)}>
              <XCircle size={24} color="gray" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => item.uri + index}  // Ensure unique key in case of duplicate URIs
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  photoContainer: {
    position: 'relative',
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  deleteButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  addButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#D0D0D0',
    marginRight: 10,
  },
});

export default PhotoSelector;
