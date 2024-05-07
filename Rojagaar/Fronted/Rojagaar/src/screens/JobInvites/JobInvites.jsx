import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import style from './style';
import {AuthContext} from '../../context/authContext';
import {
  findAllInvitationByUserName,
  updateJobInvitationStatus,
} from '../../api/Hire';
import globalStyle from '../../assets/style/globalStyle';
import HeaderText from '../../components/HeaderText/HeaderText';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle, faCircleXmark} from '@fortawesome/free-solid-svg-icons';

const JobInvites = () => {
  const [userState] = useContext(AuthContext);
  const [jobInvite, setJobInvite] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await findAllInvitationByUserName(
        userState.user.userName,
      );
      const sortedJobInvites = response.data.sort((a, b) => new Date(b.jobInviteDate) - new Date(a.jobInviteDate));

      setJobInvite(sortedJobInvites);
    };
    fetchData();
  }, [jobInvite]);

  const handleApplicationStatus = async (id, status) => {
    try {
      const response = await updateJobInvitationStatus(id, status);
      Alert.alert(response.data.message);
    } catch (error) {
      console.log(error);
    }

  };

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
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <HeaderText text={'Job invites from recruiters'} />
      <FlatList
        data={jobInvite}
        renderItem={({item}) => (
          <View style={style.container}>
            <View>
              <View style={style.subContainer}>
                <Text style={style.text}>Name:</Text>
                <Text style={style.value}>{item.recruiterName}</Text>
              </View>
              <View style={style.subContainer}>
                <Text style={style.text}>Address:</Text>
                <Text style={style.value}>
                  {item.address.village} , {item.address.district}
                </Text>
              </View>

              <View style={style.subContainer}>
                <Text style={style.text}>Contact No:</Text>
                <Text style={style.value}>{item.contactNo}</Text>
              </View>
              <View style={style.subContainer}>
                <Text style={style.text}>Description:</Text>
                <Text style={style.value}>{item.description}</Text>
              </View>
              <View style={style.subContainer}>
                <Text style={style.text}>Invite</Text>
                {/* <Text style={style.value}>{new Date(item.jobInviteDate).toLocaleDateString()}</Text> */}
                <Text  style={style.value}>{getTimeAgo(item.jobInviteDate)}</Text>
              </View>
              
              {item.status === 'Pending' ? (
                <View style={style.choiceContainer}>
                  <TouchableOpacity
                    style={style.circle}
                    onPress={() =>
                      handleApplicationStatus(item.id, 'Accepted')
                    }>
                    {/* <FontAwesomeIcon
                      icon={faCheckCircle}
                      size={50}
                      color="#0be321"
                    /> */}
                    <Text style={style.choiceText}>Accept</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={style.Xmark}
                    onPress={() =>
                      handleApplicationStatus(item.id, 'Unavailable')
                    }>
                    <Text style={style.choiceText}>Unavailable</Text>
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
                          item.status === 'Accepted'
                            ? '#0be321'
                            : item.status === 'Unavailable'
                            ? '#ed1111'
                            : 'black',
                      },
                    ]}>
                    {item.status}
                  </Text>
                </View>
              )}
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default JobInvites;
