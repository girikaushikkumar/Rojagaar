import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import {updateJobStatus} from '../../api/Application';
const JobStatus = ({status}) => {
  const handleApplicationStatus = async (id, st) => {
    try {
      const response = await updateJobStatus(id, st);
      Alert.alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={style.container}>
      <View style={style.posteContainer}>
        {
          status.userDto.photo ? (
            <Image
              source={{
                uri: `data:image/jpeg;base64,${status.userDto.photo.image.data.toString(
                  'base64',
                )}`,
              }}
              style={style.avatarImage}
            />
          ) : status.userDto.name ? (
            <NamingAvatar
              name={status.userDto.name}
              avatarSize={43}
              textSize={16}
              padding={5}
            />
          ) : null // Render nothing if both jobPosterName and jobPosterPhoto are not available
        }
        <Text style={style.nameText}>{status.userDto.name}</Text>
      </View>
      <View>
        <View style={style.subContainer}>
          <Text style={style.text}>Address:</Text>
          <Text style={style.value}>
            {status.userDto.address.village} , {status.userDto.address.block},{' '}
            {status.userDto.address.district}
          </Text>
        </View>
        <View style={style.subContainer}>
          <Text style={style.text}>Age:</Text>
          <Text style={style.value}>{status.userDto.age}</Text>
        </View>
        <View style={style.subContainer}>
          <Text style={style.text}>Skill:</Text>
          <Text style={style.value}>{status.userDto.skill}</Text>
        </View>
        {status.application.status === 'Pending' ? (
          <View style={style.choiceContainer}>
            <TouchableOpacity
              style={style.circle}
              onPress={() =>
                handleApplicationStatus(status.application.id, 'Accepted')
              }>
              <FontAwesomeIcon icon={faCheckCircle} size={50} color="#0be321" />
            </TouchableOpacity>
            <TouchableOpacity
              style={style.Xmark}
              onPress={() =>
                handleApplicationStatus(status.application.id, 'Rejected')
              }>
              <FontAwesomeIcon icon={faCircleXmark} size={50} color="#ed1111" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={style.subContainer}>
            <Text style={style.text}>Status:</Text>
            <Text
              style={[
                style.value,
                {
                  color:
                    status.application.status === 'Accepted'
                      ? '#0be321'
                      : status.application.status === 'Rejected'
                      ? '#ed1111'
                      : 'black',
                },
              ]}>
              {status.application.status}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default JobStatus;
