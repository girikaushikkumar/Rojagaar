import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {getJobByUserId} from '../../api/Post';
import {AuthContext} from '../../context/authContext';
import {FlatList} from 'react-native-gesture-handler';
import JobCard from '../../components/JobCard/JobCard';
import FooterMenu from '../../components/Menu/FooterMenu/FooterMenu';
import style from './style';
import globalStyle from '../../assets/style/globalStyle';
import HeaderText from '../../components/HeaderText/HeaderText';
import {Routes} from '../../navigation/Routes';

const ViewJobPost = ({navigation}) => {
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userState] = useContext(AuthContext);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getJobByUserId(userState.user.userName);
        setJob(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <SafeAreaView
      style={[globalStyle.backgroundWhite, globalStyle.flex, style.container]}>
      <HeaderText text={'Job Post'} />
      <FlatList
        data={job}
        renderItem={({item}) => (
          // <TouchableOpacity onPress={()=> navigation.navigate(Routes.JobPostDetails,{job:item})}>
          // </TouchableOpacity>
          <View style={style.jobCardContainer}>
            <JobCard job={item} />
            <View style={style.btnContainer}>
              <TouchableOpacity onPress={()=> navigation.navigate(Routes.JobPostDetails,{job:item})}>
                <Text style={style.btnText}>View Job Details</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate(Routes.JobPostStatus,{job:item})}>
                <Text style={style.btnText}>View Job Status</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
      <FooterMenu />
    </SafeAreaView>
  );
};

export default ViewJobPost;
