import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import style from './style';
import {getTeamInfo, joinRequest} from '../../../api/Team';
import globalStyle from '../../../assets/style/globalStyle';
import HeaderText from '../../../components/HeaderText/HeaderText';
import { AuthContext } from '../../../context/authContext';
import { Routes } from '../../../navigation/Routes';

const JoinTeam = ({navigation}) => {
  const [team, setTeam] = useState([]);
  const [userState] = useContext(AuthContext);

  useEffect(() => {
    fetchData = async () => {
      const response = await getTeamInfo();
      setTeam(response.data);
    };
    fetchData();
  }, [team]);

  const handleJoinTeam=async(teamId)=>{
    try {
      const response = await joinRequest(teamId,userState.user.userName);
      Alert.alert(response.data.message);
      navigation.navigate(Routes.Dashboard)
    } catch (error) {
      console.log(error);
      Alert.alert("Something went worng.....")
    }
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <HeaderText text={'Join Team'} />
      <View>
        <FlatList
          data={team}
          renderItem={({item}) => (
            <View style={style.teamContainer}>
              <Text style={style.teamName}>
                Team Name : {item.team.teamName}
              </Text>
              <Text style={style.skillTitle}>Skills:</Text>
              <View style={style.skillsContainer}>
                {item.team.roles.map((skill, index) => (
                  <Text key={index} style={style.skillItem}>
                    {skill}
                  </Text>
                ))}
              </View>
              <TouchableOpacity style={style.btn} onPress={() => handleJoinTeam(item.team.id)}>
                <Text style={style.btnText}>Join</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default JoinTeam;
