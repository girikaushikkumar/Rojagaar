import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import FooterMenu from '../../components/Menu/FooterMenu/FooterMenu';
import style from './style';
import globalStyle from '../../assets/style/globalStyle';
import {AuthContext} from '../../context/authContext';
import {getJobCartDetails} from '../../api/JobCart';
import {FlatList} from 'react-native-gesture-handler';
import JobCard from '../../components/JobCard/JobCard';
import { Routes } from '../../navigation/Routes';
import HeaderText from '../../components/HeaderText/HeaderText';

const SavedJob = ({navigation}) => {
  const [userState] = useContext(AuthContext);
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getJobCartDetails(userState.user.userName);
        setJob(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <SafeAreaView
      style={[globalStyle.backgroundWhite, globalStyle.flex, style.container]}>
      <HeaderText text={'Saved Job'}/>
      <FlatList
        data={job}
        renderItem={({item}) => (
          <TouchableOpacity
          onPress={() =>
              navigation.navigate(Routes.ApplyJob, {
                job: item.jobDto,
                jobPosterName: item.jobPosterName,
                jobPosterPhoto: item.jobPosterPhoto,
              })
            }
          >
           <JobCard
            job={item.jobDto}
            jobPosterName={item.jobPosterName}
            jobPosterPhoto={item.jobPosterPhoto}
          />
          </TouchableOpacity>
         
        )}
        showsVerticalScrollIndicator={false}
      />

      <FooterMenu />
    </SafeAreaView>
  );
};

export default SavedJob;
