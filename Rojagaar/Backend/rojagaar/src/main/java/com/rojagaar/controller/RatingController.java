package com.rojagaar.controller;

import com.rojagaar.model.Rating;
import com.rojagaar.services.serviceImpl.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/rating/")
public class RatingController {
    @Autowired
    private RatingService ratingService;

    @PostMapping("addRating/{userId}/{ratingValue}")
    public ResponseEntity<Rating> addRating(@PathVariable String userId, @PathVariable int ratingValue) {
        Rating rating1 = this.ratingService.addRating(userId,ratingValue);
        return new ResponseEntity<>(rating1, HttpStatus.OK);
    }

    @GetMapping("getRatingByUserId/{userId}")
    public ResponseEntity<Rating> getRatingByUserId(@PathVariable String userId) {
        Rating rating = this.ratingService.getRatingByUserId(userId);
        return new ResponseEntity<>(rating,HttpStatus.OK);
    }
}
