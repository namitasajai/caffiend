import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Star } from 'phosphor-react-native';

const MAX_STARS = 5;

const StarIcon = React.memo(({ filled, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Star size={32} color="#FFD567" weight={filled ? 'fill' : 'regular'} />
    </TouchableOpacity>
  );
});

export default function StarRating() {
  const [rating, setRating] = useState(0);

  const handlePress = (rate) => {
    setRating(rate);
  };

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= MAX_STARS; i++) {
      stars.push(
        <StarIcon key={i} filled={i <= rating} onPress={() => handlePress(i)} />
      );
    }
    return stars;
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'left' }}>
      {renderStars()}
    </View>
  );
}
