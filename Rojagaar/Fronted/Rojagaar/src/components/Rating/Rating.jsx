import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating, onRatingChange, isModify }) => {
  const [selectedRating, setSelectedRating] = useState(rating || 0);

  const handleStarPress = (newRating) => {
    if (isModify) {
      setSelectedRating(newRating);
      if (onRatingChange) {
        onRatingChange(newRating);
      }
    }
  };

  return (
    <View style={styles.ratingContainer}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity
          key={star}
          style={styles.star}
          onPress={() => handleStarPress(star)}
          disabled={!isModify}
        >
          {star <= selectedRating ? (
            star === Math.ceil(selectedRating) ? (
              <FontAwesomeIcon icon={faStarHalfStroke} size={24} color="gold" />
            ) : (
              <FontAwesomeIcon icon={faStar} size={24} color="gold" />
            )
          ) : (
            <FontAwesomeIcon icon={faStar} size={24} color="gray" />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
  },
  star: {
    marginHorizontal: 5,
  },
});

export default Rating;
