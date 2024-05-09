import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import style from './style';
import globalStyle from '../../../assets/style/globalStyle';
import {getTeamInfoByLeaderId} from '../../../api/Team';
import {AuthContext} from '../../../context/authContext';
import { Routes } from '../../../navigation/Routes';
const ViewTeam = ({navigation}) => {
  const [team, setTeam] = useState([]);
  const [userState] = useContext(AuthContext);
  useEffect(() => {
    const fetchTeamDetails = async () => {
      const response = await getTeamInfoByLeaderId(userState.user.userName);
      setTeam(response.data);
      console.log(response.data);
    };
    fetchTeamDetails();
  }, []);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <FlatList
        data={team}
        renderItem={({item}) => (
          <View style={style.container}>
            <View style={style.subContainer}>
              <Text style={style.text}>Team Name</Text>
              <Text style={style.value}>{item.teamName}</Text>
            </View>
            <View style={style.subContainer}>
              <TouchableOpacity onPress={()=>navigation.navigate(Routes.ViewMemeber,{member:item.teamMember})}>
                <Text style={[style.text, {color: 'blue'}]}>
                  View Team Memeber
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate(Routes.ViewJoinRequest,{teamId:item.id, member:item.joinRequest})}>
                <Text style={[style.text, {color: 'blue'}]}>View Request</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ViewTeam;
