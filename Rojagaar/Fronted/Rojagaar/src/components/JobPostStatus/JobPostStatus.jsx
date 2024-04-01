import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import style from './style';
const JobPostStatus = ({status}) => {
    console.log(status);
  return (
    <View>
      <Text>{status.application.status}</Text>
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
        <Text>address</Text>
        <Text>{status.userDto.address.village} , {status.userDto.address.Block}, {status.userDto.address.District}</Text>
        </View>
        <View>
            <Text>Age</Text>
            <Text>{status.userDto.age}</Text>
        </View>
        <View>
            <Text>Skill</Text>
            <Text>{status.userDto.skill}</Text> 
        </View>
    </View>
  );
};

export default JobPostStatus;

