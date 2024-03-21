import {View, Text, Image, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import NamingAvatar from '../NamingAvatar/NamingAvatar';
import DropdownMenu from '../Menu/DropdownMenu/DropdownMenu';

const JobCard = ({job}) => {
  // time calculation
  function getTimeAgo(jobPostTimestamp) {
    // Current timestamp
    const currentTimestamp = Date.now();

    // Calculate the time difference in milliseconds
    const timeDifference = currentTimestamp - jobPostTimestamp;

    // Convert the time difference into seconds, minutes, hours, days, or months
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30); // Approximation, not precise

    let timeAgo;

    if (months > 0) {
      timeAgo = months === 1 ? '1 month ago' : `${months} months ago`;
    } else if (days > 0) {
      timeAgo = days === 1 ? '1 day ago' : `${days} days ago`;
    } else if (hours > 0) {
      timeAgo = hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    } else if (minutes > 0) {
      timeAgo = minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
    } else {
      timeAgo = seconds < 5 ? 'Just now' : `${seconds} seconds ago`;
    }

    return timeAgo;
  }

  

  return (
    <View style={style.container}>
      <View style={style.posteContainer}>
        {job.jobPosterPhoto ? ( // Check if imageUri is not null
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + job.jobPosterPhoto.image.data.toString('base64'),
            }}
            style={style.avatarImage}
          />
        ) : (
          <NamingAvatar
            name={job.jobPosterName}
            avatarSize={43}
            textSize={16}
            padding={5}
          />
        )}
        <Text style={style.nameText}>{job.jobPosterName}</Text>
      </View>

      <View style={style.container1}>
        <Text style={style.title}>{job.jobDto.title}</Text>
        <DropdownMenu job={job}/>
      </View>

      <View style={style.jobDescriptionContainer}>
        <Text style={style.jobDescription}>{job.jobDto.description}</Text>
      </View>

      <View style={style.locationContainer}>
        <FontAwesomeIcon
          icon={faLocationDot}
          style={style.locationIcon}
          size={25}
        />
        <Text style={style.locationText}>{job.jobDto.location}</Text>
      </View>

      <View style={style.workingDateContainer}>
        <Text style={style.workingText1}>Working Date:</Text>
        <Text style={style.workingText2}>
          {new Date(job.jobDto.workingDate).toLocaleDateString()}
        </Text>
      </View>

      <View style={style.footerContainer}>
        <Text style={style.time}>{getTimeAgo(job.jobDto.jobPostedDate)}</Text>
        <Text style={style.price}>{job.jobDto.wage}</Text>
      </View>
    </View>
  );
};

export default JobCard;
