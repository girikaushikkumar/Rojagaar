import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import style from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';

const JobStatusDetails = ({jobStatus, status}) => {
  const navigation = useNavigation();

  const getStatusColor = () => {
    switch (status) {
      case 'Pending':
        return '#F29339'; // Orange color for pending status
      case 'Accepted':
        return '#27AE60'; // Green color for accepted status
      case 'Rejected':
        return '#EB5757'; // Red color for rejected status
      default:
        return '#000000'; // Default color (black) for unknown status
    }
  };
  return (
    <View>
      {jobStatus.application.status === status && (
        <View style={style.container}>
          <View style={style.subContainer}>
            <Text style={style.text}>Category</Text>
            <Text style={style.value}>
              {jobStatus.jobDetailsResponse.jobDto.category}
            </Text>
          </View>
          <View style={style.subContainer}>
            <Text style={style.text}>Status</Text>
            <Text style={[style.value, {color: getStatusColor()}]}>
              {jobStatus.application.status}
            </Text>
          </View>
          <View style={style.subContainer}>
            <Text style={style.text}>Date Of Application</Text>
            <Text style={style.value}>
              {new Date(
                jobStatus.application.applicationDate,
              ).toLocaleDateString()}
            </Text>
          </View>
          <View style={style.subContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(Routes.ViewPostDetails, {
                  job: jobStatus.jobDetailsResponse.jobDto,
                  jobPosterName: jobStatus.jobDetailsResponse.jobPosterName,
                  jobPosterPhoto: jobStatus.jobDetailsResponse.jobPosterPhoto,
                })
              }>
              <Text style={[style.value, {color: '#0a02f0'}]}>
                VIEW JOB DETAILS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[style.value, {color: '#0a02f0'}]}>CHAT</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default JobStatusDetails;
