package com.rojagaar.services.serviceImpl;

import com.rojagaar.model.Rating;
import com.rojagaar.repository.RatingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RatingService {
    @Autowired
    private RatingRepo ratingRepo;

    public Rating addRating(String userId, int ratingValue) {

        Optional<Rating> optionalExistingRating = ratingRepo.findByUserId(userId);
        if (optionalExistingRating.isPresent()) {
            Rating existingRating = optionalExistingRating.get();
            double newRatingValue = ((existingRating.getRatingValue() * existingRating.getNoOfRating()) + ratingValue) / (existingRating.getNoOfRating() + 1);
            existingRating.setRatingValue(newRatingValue);
            existingRating.setNoOfRating(existingRating.getNoOfRating() + 1);
            return ratingRepo.save(existingRating);
        } else {
            Rating rating = new Rating();
            rating.setUserId(userId);
            rating.setRatingValue(ratingValue);
            rating.setNoOfRating(1);
            return ratingRepo.save(rating);
        }
    }

    public Rating getRatingByUserId(String userId) {
        Optional<Rating> optionalExistingRating = ratingRepo.findByUserId(userId);
        if(optionalExistingRating.isPresent()) {
            return optionalExistingRating.get();
        } else {
            return null;
        }
    }
}
