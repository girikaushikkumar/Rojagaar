import {View, Text, Image, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEllipsisVertical,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import NamingAvatar from '../NamingAvatar/NamingAvatar';
import axios from 'axios';

const JobCard = ({job}) => {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (job.jobPosterPhoto) {
      fetchImage(job.jobPosterPhoto);
    } else {
      setLoading(false);
    }
  }, [job.jobPosterPhoto]);

  const fetchImage = async imageId => {
    try {
      // console.log(imageId)
      const response = await axios.get(
        `http://192.168.42.244:8080/api/photo/get/${imageId}`,
      );
      // console.log(response.data);
      setImageData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching image:', error);
      setError('Failed to load image');
      setLoading(false);
    }
  };

  return (
    <View style={style.container}>
      <View style={style.posteContainer}>
        {loading ? (
          <ActivityIndicator />
        ) : imageData ? ( // Check if imageUri is not null
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + imageData.toString('base64'),
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
        <FontAwesomeIcon icon={faEllipsisVertical} size={25} />
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
        <Text style={style.workingText2}>{job.jobDto.date}</Text>
      </View>

      <View style={style.footerContainer}>
        <Text style={style.time}>25 minute ago</Text>
        <Text style={style.price}>{job.jobDto.wage}</Text>
      </View>
    </View>
  );
};

export default JobCard;
