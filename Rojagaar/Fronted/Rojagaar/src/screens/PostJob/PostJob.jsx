import {Alert, SafeAreaView, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import style from './style';
import HeaderText from '../../components/HeaderText/HeaderText';
import {ScrollView} from 'react-native-gesture-handler';
import InputBox from '../../components/Forms/InputBox';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/style/scaling';
import globalStyle from '../../assets/style/globalStyle';
import DropdownList from '../../components/Dropdown/DropdownList';
import DateTimeInput from '../../components/DateTimePicker/DateTimeInput';
import RadioButton from '../../components/Menu/RadioButton/RadioButton';
import SubmitBtn from '../../components/Forms/SubmitBtn';
import { postJob } from '../../api/Post';
import { AuthContext } from '../../context/authContext';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';

const PostJob = () => {
  const [userState] = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [location, setLocation] = useState('');
  const [workingDate, setWorkingDate] = useState(new Date());
  const [wage, setWage] = useState('');
  const [noOfPeople, setNoOfPeople] = useState(1);
  const [workingTime, setWorkingTime] = useState('');
  const [team, setTeam] = useState(false);
  const navigation = useNavigation();
  const handlePost = async() => {
   
    try {
      const response = await postJob(
        title,
        description,
        category,
        subCategory,
        location,
        wage,
        workingTime,
        new Date(),
        workingDate,
        noOfPeople,
        team,
        userState.user.userName,
      );
      if(response.status === 200) {
        Alert.alert("Job created Successfully");
        navigation.navigate(Routes.Job);
      }
    } catch (error) {
      Alert.alert("somthing went wrong");
    }
  }
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View>
        <HeaderText text="Create Job" />
      </View>
      <ScrollView>
        <View style={style.container}>
          <View>
            <Text style={style.text}>Job title</Text>
            <InputBox
              inputTitle={'Write the title of your Post here'}
              width={horizontalScale(323)}
              height={verticalScale(45)}
              fontSize={scaleFontSize(15)}
              value={title}
              setValue={setTitle}
            />
          </View>
          <View>
            <Text style={style.text}>Description</Text>
            <InputBox
              inputTitle={'Write the job description'}
              width={horizontalScale(323)}
              height={verticalScale(100)}
              fontSize={scaleFontSize(15)}
              value={description}
              setValue={setDescription}
            />
          </View>
          <View style={style.dropdownContainter}>
            <DropdownList 
                placeholderName={'Select category'} 
                value={category}
                setValue={setCategory}
            />
            <DropdownList 
            placeholderName={'Select subCategory'} 
            value={subCategory}
                setValue={setSubCategory}
            />
          </View>
          <View>
            <Text style={style.text}>Location</Text>
            <InputBox
              inputTitle={'Write the location'}
              width={horizontalScale(323)}
              height={verticalScale(45)}
              fontSize={scaleFontSize(15)}
              value={location}
              setValue={setLocation}
            />
          </View>
          <View>
            <Text style={style.text}>Working Date</Text>
            <DateTimeInput 
            value={workingDate} 
            setValue={setWorkingDate}
            />
          </View>
          <View>
            <Text style={style.text}>Money</Text>
            <InputBox
              inputTitle={'Write the money'}
              width={horizontalScale(323)}
              height={verticalScale(45)}
              fontSize={scaleFontSize(15)}
              value={wage}
              setValue={setWage}
            />
          </View>
          <View>
            <Text style={style.text}>No of people required</Text>
            <InputBox
              inputTitle={'Write no of people'}
              width={horizontalScale(323)}
              height={verticalScale(45)}
              fontSize={scaleFontSize(15)}
              value={noOfPeople}
              setValue={setNoOfPeople}
            />
          </View>
          <View>
            <Text style={style.text}>Working Time</Text>
            <InputBox
              inputTitle={'Write time'}
              width={horizontalScale(323)}
              height={verticalScale(45)}
              fontSize={scaleFontSize(15)}
              value={workingTime}
              setValue={setWorkingTime}
            />
          </View>
          <View style={style.teamContainer}>
            <Text style={style.text}>Team</Text>
            <RadioButton 
               value={team} 
               setValue={setTeam}
               />
          </View>
          <View style={style.button}>
            <SubmitBtn title={'Post'} width={324} height={60} handleSubmit={handlePost}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostJob;
