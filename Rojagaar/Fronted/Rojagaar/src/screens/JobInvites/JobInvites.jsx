import {
    Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import style from './style';
import {AuthContext} from '../../context/authContext';
import {findAllInvitationByUserName, updateJobInvitationStatus} from '../../api/Hire';
import globalStyle from '../../assets/style/globalStyle';
import HeaderText from '../../components/HeaderText/HeaderText';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const JobInvites = () => {
  const [userState] = useContext(AuthContext);
  const [jobInvite, setJobInvite] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await findAllInvitationByUserName(
        userState.user.userName,
      );
      setJobInvite(response.data);
    };
    fetchData();
  }, [jobInvite]);

  const handleApplicationStatus = async (id, status) => {
    try {
        const response = await updateJobInvitationStatus(id,status);
        Alert.alert(response.data.message);
    } catch (error) {
        console.log(error);
    }
    // try {
    //   const response = await updateJobStatus(id, st);
    //   Alert.alert(response.data.message);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <HeaderText text={'Job invites from recruiters'} />
      <FlatList
        data={jobInvite}
        renderItem={({item}) => (
          <View style={style.container}>
            <View>
              <View style={style.subContainer}>
                <Text style={style.text}>Name:</Text>
                <Text style={style.value}>{item.recruiterName}</Text>
              </View>
              <View style={style.subContainer}>
                <Text style={style.text}>Address:</Text>
                <Text style={style.value}>
                  {item.address.village} ,{' '}
                  {item.address.district}
                </Text>
              </View>

              <View style={style.subContainer}>
                <Text style={style.text}>Contact No:</Text>
                <Text style={style.value}>{item.contactNo}</Text>
              </View>
              <View style={style.subContainer}>
                <Text style={style.text}>Description:</Text>
                <Text style={style.value}>{item.description}</Text>
              </View>
              {item.status === 'Pending' ? (
                <View style={style.choiceContainer}>
                  <TouchableOpacity
                    style={style.circle}
                    onPress={() =>
                      handleApplicationStatus(item.id, 'Accepted')
                    }>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      size={50}
                      color="#0be321"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={style.Xmark}
                    onPress={() =>
                      handleApplicationStatus(item.id, 'Rejected')
                    }>
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      size={50}
                      color="#ed1111"
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={style.subContainer}>
                  <Text style={style.text}>Status:</Text>
                  <Text
                    style={[
                      style.value,
                      {
                        color:
                           item.status === 'Accepted'
                            ? '#0be321'
                            : item.status === 'Rejected'
                            ? '#ed1111'
                            : 'black',
                      },
                    ]}>
                    {item.status}
                  </Text>
                </View>
              )}
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default JobInvites;
