import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import JobDetails from '../../components/JobDetails/JobDetails';
import style from './style';
import globalStyle from '../../assets/style/globalStyle';
import HeaderText from '../../components/HeaderText/HeaderText';
import { getJobSeekerDetails } from '../../api/Post';
import { FlatList } from 'react-native-gesture-handler';
import JobPostStatus from '../../components/JobPostStatus/JobPostStatus';

const JobPostDetails = ({route}) => {
  const job = route.params;
  const [status,setStatus] = useState([]);
  useEffect(() => {
    
    const getUserDetails = async() => {
      const response = await getJobSeekerDetails(job.job.id);
      // console.log(response.data);
      setStatus(response.data);
    };
    getUserDetails();
  },[]);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <HeaderText text={'Job Details'}/>
      <JobDetails job={job.job} />
      <View>
        <HeaderText text={'Job Status'}/>
        <FlatList
          data={status}
          renderItem={({item}) => (
            <JobPostStatus status={item} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default JobPostDetails;
