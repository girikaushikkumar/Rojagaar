import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import style from './style';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
import {AuthContext} from '../../context/authContext';
import {getJobStatus} from '../../api/Application';
import globalStyle from '../../assets/style/globalStyle';

const JobStatusDetails = ({route}) => {
  const navigation = useNavigation();
  const {status} = route.params;
  const [userState] = useContext(AuthContext);
  const [jobStatus, setJobStatus] = useState([]);

  useEffect(() => {
    const getApplicationStatus = async () => {
      const response = await getJobStatus(userState.user.userName);
      setJobStatus(response.data);
    };
    getApplicationStatus();
  }, [jobStatus]);

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
    <View style={globalStyle.backgroundWhite}>
      <FlatList
        data={jobStatus}
        renderItem={({item}) => (
          <View >
            {item.application.status === status && (
              <View style={style.container}>
                <View style={style.subContainer}>
                  <Text style={style.text}>Category</Text>
                  <Text style={style.value}>
                    {item.jobDetailsResponse.jobDto.category}
                  </Text>
                </View>
                <View style={style.subContainer}>
                  <Text style={style.text}>Status</Text>
                  <Text style={[style.value, {color: getStatusColor()}]}>
                    {item.application.status}
                  </Text>
                </View>
                <View style={style.subContainer}>
                  <Text style={style.text}>Date Of Application</Text>
                  <Text style={style.value}>
                    {new Date(
                      item.application.applicationDate,
                    ).toLocaleDateString()}
                  </Text>
                </View>
                <View style={style.subContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(Routes.ViewPostDetails, {
                        job: item.jobDetailsResponse.jobDto,
                        jobPosterName:
                        item.jobDetailsResponse.jobPosterName,
                        jobPosterPhoto:
                        item.jobDetailsResponse.jobPosterPhoto,
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
        )}
      />
    </View>
  );
};

export default JobStatusDetails;
