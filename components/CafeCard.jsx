// CafeCard.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MapPin, Wifi, Coffee, CurrencyCircleDollar } from 'phosphor-react-native';

const CafeCard = ({ cafe }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: cafe.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.cafeName}>{cafe.name}</Text>
        <Text style={styles.distance}>{cafe.distance} miles</Text>
        <TouchableOpacity style={styles.directionButton}>
          <MapPin size={24} color="#FFFFFF" weight="fill" />
          <Text style={styles.directionButtonText}>Directions</Text>
        </TouchableOpacity>
        <View style={styles.offeringsContainer}>
          <Text style={styles.offeringsTitle}>Offerings</Text>
          <Coffee size={24} color="#333333" />
          <Wifi size={24} color="#333333" />
          <CurrencyCircleDollar size={24} color="#333333" />
          {/* Add other icons as needed */}
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{cafe.rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF8E1',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  infoContainer: {
    padding: 16,
    flex: 1,
  },
  cafeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 14,
    color: '#333333',
  },
  directionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 8,
  },
  directionButtonText: {
    marginLeft: 8,
    color: '#FFFFFF',
    fontSize: 16,
  },
  offeringsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  offeringsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  ratingContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#A1887F',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CafeCard;
