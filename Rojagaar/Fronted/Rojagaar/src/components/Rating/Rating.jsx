import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/authContext';
import { getRatingByUserId } from '../../api/Rating';

const Rating = ({ onRatingChange, isModify, rating,userName }) => {
  const [userState] = useContext(AuthContext);
  const [selectedRating, setSelectedRating] = useState(rating);
  // const [r,setR] = useState(0);


  console.log(rating)
  // console.log(selectedRating)
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
        <FontAwesomeIcon
          key={star}
          icon={star <= rating ? faStar : faStarHalfStroke}
          size={24}
          color={star <= rating ? 'gold' : 'gray'}
          style={styles.star}
        />
      ))}
    </View>
    // <View style={styles.ratingContainer}>
    //   {[1, 2, 3, 4, 5].map((star) => (
    //     <TouchableOpacity
    //       key={star}
    //       style={styles.star}
    //       onPress={() => handleStarPress(star)}
    //       disabled={!isModify}
    //     >
    //       {star <= selectedRating ? (
    //         star === Math.ceil(selectedRating) ? (
    //           <FontAwesomeIcon icon={faStarHalfStroke} size={24} color="gold" />
    //         ) : (
    //           <FontAwesomeIcon icon={faStar} size={24} color="gold" />
    //         )
    //       ) : (
    //         <FontAwesomeIcon icon={faStar} size={24} color="gray" />
    //       )}
    //     </TouchableOpacity>
    //   ))}
    // </View>
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
