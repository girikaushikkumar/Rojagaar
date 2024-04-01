import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../context/authContext';
import globalStyle from '../../assets/style/globalStyle';
import HeaderText from '../../components/HeaderText/HeaderText';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import style from './style';
import JobStatusDetails from '../../components/JobStatusDetails/JobStatusDetails';
import { jobStatus } from '../../api/Application';
const ApplicationStatus = () => {
  const [userState] = useContext(AuthContext);
  const [selectedStatus, setSelectedStatus] = useState('Pending'); // State to manage selected status
  const [status,setStatus] = useState([]);

  useEffect(() => {
    const getApplicationStatus = async () => {
      const response = await jobStatus(userState.user.userName);
      // console.log(response.data);
      setStatus(response.data);
    };
    getApplicationStatus();
  }, [status]);

  const handleStatusSelect = async status => {
    setSelectedStatus(status); // Update selected status
  };
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.container}>
        <HeaderText text={'Application Status'} />
        <View style={style.statusContainer}>
          <TouchableOpacity onPress={() => handleStatusSelect('Pending')}>
            <Text
              style={[
                style.text,
                selectedStatus === 'Pending' && style.selectedText,
              ]}>
              PENDING
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleStatusSelect('Accepted')}>
            <Text
              style={[
                style.text,
                selectedStatus === 'Accepted' && style.selectedText,
              ]}>
              ACCEPTED
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleStatusSelect('Rejected')}>
            <Text
              style={[
                style.text,
                selectedStatus === 'Rejected' && style.selectedText,
              ]}>
              REJECTED
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={status}
        renderItem={({item}) => (
          
            <JobStatusDetails jobStatus={item} status={selectedStatus}/>
        
        )}
      />
    </SafeAreaView>
  );
};

export default ApplicationStatus;
