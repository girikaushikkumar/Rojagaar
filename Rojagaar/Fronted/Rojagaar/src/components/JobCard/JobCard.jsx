import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBookmark, faLocationDot, faSave} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import NamingAvatar from '../NamingAvatar/NamingAvatar';
import { useNavigation } from '@react-navigation/native';
import { addJobToCart } from '../../api/JobCart';
import { AuthContext } from '../../context/authContext';

const JobCard = ({job, jobPosterName, jobPosterPhoto, bookmark}) => {
  const [userState] = useContext(AuthContext);
  const navigation = useNavigation();
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

  const handleSaveOption = () => {
    addJobToCart(job.id,userState.user.userName);
    
 }

  return (
    <View style={style.container}>
        <View style={style.posteContainer}>
          {
            jobPosterPhoto ? (
              <Image
                source={{
                  uri: `data:image/jpeg;base64,${jobPosterPhoto.image.data.toString(
                    'base64',
                  )}`,
                }}
                style={style.avatarImage}
              />
            ) : jobPosterName ? (
              <NamingAvatar
                name={jobPosterName}
                avatarSize={43}
                textSize={16}
                padding={5}
              />
            ) : null // Render nothing if both jobPosterName and jobPosterPhoto are not available
          }
          <Text style={style.nameText}>{jobPosterName}</Text>
        </View>

        <View style={style.container1}>
          <Text style={style.title}>{job.title}</Text>
          <TouchableOpacity onPress={() => handleSaveOption()}>
          {bookmark ? <FontAwesomeIcon icon={faBookmark} size={25}/> : null}

          </TouchableOpacity>
          {/* <DropdownMenu
            job={job}
            jobPosterName={jobPosterName}
            jobPosterPhoto={jobPosterPhoto}
          /> */}
        </View>

        <View style={style.jobDescriptionContainer}>
          <Text style={style.jobDescription}>{job.description}</Text>
        </View>

        <View style={style.locationContainer}>
          <FontAwesomeIcon
            icon={faLocationDot}
            style={style.locationIcon}
            size={25}
          />
          <Text style={style.locationText}>{job.location}</Text>
        </View>

        <View style={style.workingDateContainer}>
          <Text style={style.workingText1}>Working Date:</Text>
          <Text style={style.workingText2}>
            {new Date(job.workingDate).toLocaleDateString()}
          </Text>
        </View>

        <View style={style.footerContainer}>
          <Text style={style.time}>{getTimeAgo(job.jobPostedDate)}</Text>
          <Text style={style.price}>{job.wage}</Text>
        </View>
    </View>
  );
};

export default JobCard;
