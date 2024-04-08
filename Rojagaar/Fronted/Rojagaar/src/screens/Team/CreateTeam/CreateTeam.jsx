import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import style from './style';
import globalStyle from '../../../assets/style/globalStyle';
import HeaderText from '../../../components/HeaderText/HeaderText';
import InputBox from '../../../components/Forms/InputBox';
import { horizontalScale, scaleFontSize, verticalScale } from '../../../assets/style/scaling';
import RoleInput from '../../../components/RoleInput/RoleInput';
import RoleList from '../../../components/RoleList/RoleList';
import SubmitBtn from '../../../components/Forms/SubmitBtn';
import { createTeam } from '../../../api/Team';
import { AuthContext } from '../../../context/authContext';
const CreateTeam = () => {
    const [teamName,setTeamName] = useState('');
    const [roles,setRoles] = useState([]);
    const [userState] = useContext(AuthContext);

    const handleAddRole = (newRole) => {
        setRoles([...roles,newRole]);
    }

    const handleTeam = async() => {
        try {
            const response = await createTeam(teamName,roles,userState.user.userName);
            // console.log(response.data);
            Alert.alert(response.data.message);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
       <HeaderText text={'Create Team'}/>
       <ScrollView>
       
         <View style={style.container}>
            <Text style={style.text}>Name of the team</Text>
            <InputBox
              inputTitle={'Write the title of your Post here'}
              width={horizontalScale(323)}
              height={verticalScale(45)}
              fontSize={scaleFontSize(15)}
              value={teamName}
              setValue={setTeamName}
            />
         </View>
         <View style={style.container}>
            <Text style={style.text}>Add Role</Text>
            <RoleInput onAddRole={handleAddRole}/>
            <Text style={style.text}>Roles</Text>
            <RoleList roles={roles}/>
         </View>
         <View style={style.button}>
            <SubmitBtn title={'Submit'} width={324} height={60} handleSubmit={handleTeam}/>
          </View>
       </ScrollView>
    </SafeAreaView>
  );
};

export default CreateTeam;

