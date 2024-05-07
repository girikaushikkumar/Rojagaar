import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import style from './style';
import globalStyle from '../../../assets/style/globalStyle';
import { getTeamInfoByLeaderId } from '../../../api/Team';
import { AuthContext } from '../../../context/authContext';
const ViewTeam = () => {
    const [team,setTeam] = useState(null);
    const [userState] = useContext(AuthContext);
    useEffect(()=> {
        const fetchTeamDetails = async() => {
            const response = await getTeamInfoByLeaderId(userState.user.userName);
            console.log(response.data);
        }
        fetchTeamDetails();
        
    },[]);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
      <ScrollView>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewTeam;

