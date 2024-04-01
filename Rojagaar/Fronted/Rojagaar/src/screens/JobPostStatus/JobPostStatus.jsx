import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderText from '../../components/HeaderText/HeaderText';
import JobStatus from '../../components/JobPostStatus/JobStatus';
import { getJobSeekerDetails } from '../../api/Application';
import globalStyle from '../../assets/style/globalStyle';


const JobPostStatus = ({route}) => {
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
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
      <HeaderText text={'Status of Applicant'}/>
      <FlatList
          data={status}
          renderItem={({item}) => (
            <JobStatus status={item} />
          )}
        />
    </SafeAreaView>
  );
};

export default JobPostStatus;

const styles = StyleSheet.create({});