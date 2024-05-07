import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import globalStyle from '../../assets/style/globalStyle';
import HeaderText from '../../components/HeaderText/HeaderText';
import style from './style';
import { AuthContext } from '../../context/authContext';
import { hireStatus } from '../../api/Hire';
import { FlatList } from 'react-native-gesture-handler';
import NamingAvatar from '../../components/NamingAvatar/NamingAvatar';
const HiringStatus = () => {
  const [status,setStatus] = useState([]);
  const [userState] = useContext(AuthContext);
  useEffect(()=>{
    const fetchStatus = async() => {
      const response = await hireStatus(userState.user.userName);
      const sortedJobInvites = response.data.sort((a, b) => new Date(b.jobInviteDate) - new Date(a.jobInviteDate));
      setStatus(sortedJobInvites);
      
    }
    fetchStatus();
  },[status]);

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
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
      <HeaderText text={'Status'}/>
      <FlatList
        data={status}
        renderItem={({item}) => (
          <View style={style.container}>
            <View style={style.posteContainer}>
            {item.potentialEmployee.photo ? (
            <Image
                  source={{
                    uri: `data:image/jpeg;base64,${item.potentialEmployee.photo.image.data.toString(
                      'base64',
                    )}`,
                  }}
                  style={style.avatarImage}
                />
              ) : item.potentialEmployee.name ? (
                <NamingAvatar
                  name={item.potentialEmployee.name}
                  avatarSize={43}
                  textSize={16}
                  padding={5}
                />
              ) : null}
              <Text style={style.nameText}>{item.potentialEmployee.name}</Text>
            </View>
            <View style ={style.subContainer}>
              <Text style={style.text}>Contact No:</Text>
              <Text style={style.value}>{item.potentialEmployee.phoneNo}</Text>
            </View>
            <View style={style.subContainer}>
              <Text style={style.text}>Address</Text>
              <Text style={style.value}>{item.potentialEmployee.address.village}{","}{item.potentialEmployee.address.district}</Text>
            </View>
            <View style ={style.subContainer}>
              <Text style={style.text}>Send Invitation</Text>
              <Text style={style.value}>{getTimeAgo(item.jobInviteDate)}</Text>
            </View>
            <View style={style.subContainer}>
                  <Text style={style.text}>Status:</Text>
                  <Text
                    style={[
                     style.text,
                      {
                        color:
                          item.status === 'Accepted'
                            ? '#0be321'
                            : item.status === 'Unavailable'
                            ? '#ed1111'
                            : item.status === 'Pending'
                            ? '#f29339'
                            : 'black',
                      },
                    ]}>
                    {item.status}
                  </Text>
                </View>
          </View>
          
        )}
      />
    </SafeAreaView>
  );
};

export default HiringStatus;

