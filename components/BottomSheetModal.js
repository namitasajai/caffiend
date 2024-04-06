import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { Heart, MapPin, Clock, ChatCircle, Phone, WifiHigh, ForkKnife, Mug, Plus, CaretDown, CaretUp } from 'phosphor-react-native';

const BottomSheetModal = ({ isVisible, onSwipeComplete, cafe }) => {
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onSwipeComplete}
      onBackdropPress={onSwipeComplete}
      swipeDirection={['down']}
      style={styles.bottomModal}
    >
      <View style={styles.content}>
        <View style={styles.handleBar} />
        <Image source={{ uri: cafe.imageUrl }} style={styles.image} />
        <Text style={styles.name}>{cafe.name}</Text>
        <View style={styles.infoContainer}>
          {/* <Text style={styles.tagline}>{cafe.tagline}</Text> */}
          <View style={styles.ratingContainer}>
            <Heart color="#FF4141" weight="fill" />
            <Text style={styles.rating}>{cafe.rating}</Text>
          </View>
        </View>
        <View style={styles.divider} />
        {/* Add other elements like address, hours, review button, etc. */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: '#FBF8F1',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  handleBar: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#00000040',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  tagline: {
    fontSize: 16,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  // ... additional styles for other elements
});

export default BottomSheetModal;
