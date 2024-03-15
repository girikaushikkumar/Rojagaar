import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyle from '../../assets/style/globalStyle';
import FooterMenu from '../../components/Menu/FooterMenu/FooterMenu';
import {style} from './style';
import {AuthContext} from '../../context/authContext';
import {FlatList} from 'react-native-gesture-handler';
import JobCard from '../../components/JobCard/JobCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAllJob} from '../../api/Post';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import SearchQuery from '../../components/SearchQuery/SearchQuery';
const Home = ({navigation}) => {
  const [userState, setUserState] = useContext(AuthContext);

  const [job, setJob] = useState([]);

  const handleLogout = async () => {
    setUserState({
      token: '',
      user: null,
    });

    await AsyncStorage.removeItem('@auth');
  };

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
  }, [job]);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex, style.container]}>
      <SearchQuery/>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <FlatList
        data={job}
        renderItem={({item}) => <JobCard job={item} />}
        showsVerticalScrollIndicator={false}
      />

      <FooterMenu />
    </SafeAreaView>
  );
};

export default Home;
