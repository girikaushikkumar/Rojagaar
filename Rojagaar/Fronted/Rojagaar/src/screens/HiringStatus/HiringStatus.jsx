import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import globalStyle from '../../assets/style/globalStyle';
import HeaderText from '../../components/HeaderText/HeaderText';
import style from './style';
import { AuthContext } from '../../context/authContext';
import { hireStatus } from '../../api/Hire';
import { FlatList } from 'react-native-gesture-handler';
import NamingAvatar from '../../components/NamingAvatar/NamingAvatar';
const HiringStatus = () => {
  const [status,setStatus] = useState([]);
  const [userState] = useContext(AuthContext);
  useEffect(()=>{
    const fetchStatus = async() => {
      const response = await hireStatus(userState.user.userName);
      setStatus(response.data);
      
    }
    fetchStatus();
  },[status]);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
      <HeaderText text={'Status'}/>
      <FlatList
        data={status}
        renderItem={({item}) => (
          <View style={style.container}>
            <View style={style.posteContainer}>
            {item.potentialEmployee.photo ? (
            <Image
                  source={{
                    uri: `data:image/jpeg;base64,${item.potentialEmployee.photo.image.data.toString(
                      'base64',
                    )}`,
                  }}
                  style={style.avatarImage}
                />
              ) : item.potentialEmployee.name ? (
                <NamingAvatar
                  name={item.potentialEmployee.name}
                  avatarSize={43}
                  textSize={16}
                  padding={5}
                />
              ) : null}
              <Text style={style.nameText}>{item.potentialEmployee.name}</Text>
            </View>
            <View style ={style.subContainer}>
              <Text style={style.text}>Contact No:</Text>
              <Text style={style.value}>{item.potentialEmployee.phoneNo}</Text>
            </View>
            <View style={style.subContainer}>
              <Text style={style.text}>Address</Text>
              <Text style={style.value}>{item.potentialEmployee.address.village}{","}{item.potentialEmployee.address.district}</Text>
            </View>
            <View style={style.subContainer}>
                  <Text style={style.text}>Status:</Text>
                  <Text
                    style={[
                     style.text,
                      {
                        color:
                          item.status === 'Accepted'
                            ? '#0be321'
                            : item.status === 'Unavailable'
                            ? '#ed1111'
                            : item.status === 'Pending'
                            ? '#f29339'
                            : 'black',
                      },
                    ]}>
                    {item.status}
                  </Text>
                </View>
          </View>
          
        )}
      />
    </SafeAreaView>
  );
};

export default HiringStatus;

