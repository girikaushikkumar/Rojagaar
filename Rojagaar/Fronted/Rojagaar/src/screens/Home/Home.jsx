import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyle from '../../assets/style/globalStyle';
import FooterMenu from '../../components/Menu/FooterMenu/FooterMenu';
import {style} from './style';
import {AuthContext} from '../../context/authContext';
import {FlatList} from 'react-native-gesture-handler';
import JobCard from '../../components/JobCard/JobCard';
import {Routes} from '../../navigation/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAllJob} from '../../api/Post';
import SubmitBtn from '../../components/Forms/SubmitBtn';
const Home = ({navigation}) => {
  

  const [job, setJob] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getAllJob();
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <SafeAreaView
      style={[globalStyle.backgroundWhite, globalStyle.flex, style.container]}>
      <FlatList data={job} renderItem={({item}) => <JobCard job={item} />} />

      <View style={style.footer}>
        <FooterMenu />
      </View>
    </SafeAreaView>
  );
};

export default Home;
