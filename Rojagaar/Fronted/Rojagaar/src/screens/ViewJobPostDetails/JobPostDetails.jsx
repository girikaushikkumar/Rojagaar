import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import JobDetails from '../../components/JobDetails/JobDetails';
import style from './style';
import globalStyle from '../../assets/style/globalStyle';
import HeaderText from '../../components/HeaderText/HeaderText';
import { getJobSeekerDetails } from '../../api/Application';

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
  },[status]);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      {/* <HeaderText text={'Job Details'}/> */}
      <JobDetails job={job.job} />
    </SafeAreaView>
  );
};

export default JobPostDetails;
