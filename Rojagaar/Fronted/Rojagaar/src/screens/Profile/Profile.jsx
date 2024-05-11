import React, {useContext, useLayoutEffect, useState} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
  Button,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {style} from './style';
import globalStyle from '../../assets/style/globalStyle';
import {AuthContext} from '../../context/authContext';
import NamingAvatar from '../../components/NamingAvatar/NamingAvatar';
// import {TextInput} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCheck,
  faEnvelope,
  faMobileScreen,
  faPencilAlt,
  faPersonCane,
  faUser,
  faUserTie,
  faVenusMars,
} from '@fortawesome/free-solid-svg-icons';
import SkillsScreen from './SkillsScreen';
import {updateUser} from '../../api/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocationTab from './LocationTab';
import DocumentPicker from 'react-native-document-picker';
import { uploadImage } from '../../api/photo';

const Profile = () => {
  const [userState, setUserState] = useContext(AuthContext);
  const [name, setName] = useState(userState.user.name);
  const [phoneNo, setPhoneNo] = useState(userState.user.phoneNo);
  const [email, setEmail] = useState(userState.user.email);
  const [age, SetAge] = useState(userState.user.age);
  const [gender, setGender] = useState(userState.user.gender);
  const [editMode, setEditMode] = useState(false);
  const [image,setImage] = useState(null);

  const [activeTab, setActiveTab] = useState('BASIC DETAILS');

  const handleTabPress = tabName => {
    setActiveTab(tabName);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const selectDoc = async () => {
    try {
      // const doc = await DocumentPicker.pick({
      //   type: [DocumentPicker.types.pdf],
      //   allowMultiSelection: true
      // });
      // const doc = await DocumentPicker.pickSingle()
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images]
      })
      setImage(doc);
      try {
        const response = await uploadImage(doc,userState.user.userName);
        console.log(response);
      } catch (error) {
        console.log(error)
      }
      console.log(image)
    } catch(err) {
      if(DocumentPicker.isCancel(err)) 
        console.log("User cancelled the upload", err);
      else 
        console.log(err)
    }
  }

  const BasicDetailsContent = () => (
    <View>
      
      <View style={style.basicInfoContainer}>
        <FontAwesomeIcon icon={faUserTie} size={24} style={style.icon} />
        <View style={style.textContainer}>
          <Text style={style.textKey}>Name</Text>
          {editMode ? ( // Render TextInput in edit mode
            <TextInput
              value={name}
              onChangeText={text => setName(text)}
              style={style.textInput}
              // placeholder="Enter Fullname"
              autoFocus={false}
            />
          ) : (
            // Render Text component in view mode
            <Text style={style.textValue}>{name}</Text>
          )}
        </View>
      </View>
      <View style={style.basicInfoContainer}>
        <FontAwesomeIcon icon={faUser} size={24} style={style.icon} />
        <View style={style.textContainer}>
          <Text style={style.textKey}>User Name</Text>
          <Text style={style.textValue}>{userState.user.userName}</Text>
        </View>
      </View>

      <View style={style.basicInfoContainer}>
        <FontAwesomeIcon icon={faMobileScreen} size={24} style={style.icon} />
        <View style={style.textContainer}>
          <Text style={style.textKey}>Mobile</Text>
          {editMode ? ( // Render TextInput in edit mode
            <TextInput
              style={style.textInput}
              placeholder="Enter Phone Number"
              onChangeText={text => setPhoneNo(text)}
              value={phoneNo.toString()}
              keyboardType="phone-pad"
            />
          ) : (
            // Render Text component in view mode
            <Text style={style.textValue}>{phoneNo}</Text>
          )}
        </View>
      </View>

      <View style={style.basicInfoContainer}>
        <FontAwesomeIcon icon={faEnvelope} size={24} style={style.icon} />
        <View style={style.textContainer}>
          <Text style={style.textKey}>Email</Text>
          {editMode ? ( // Render TextInput in edit mode
            <TextInput
              style={style.textInput}
              placeholder="Enter Email"
              onChangeText={text => setEmail(text)}
              value={email}
              keyboardType="default"
            />
          ) : (
            // Render Text component in view mode
            <Text style={style.textValue}>{email}</Text>
          )}
        </View>
      </View>

      <View style={style.basicInfoContainer}>
        <FontAwesomeIcon icon={faPersonCane} size={24} style={style.icon} />
        <View style={style.textContainer}>
          <Text style={style.textKey}>Age</Text>
          {editMode ? ( // Render TextInput in edit mode
            <TextInput
              style={style.textInput}
              placeholder="Enter Age"
              onChangeText={text => SetAge(text)}
              value={age.toString()}
              keyboardType="phone-pad"
            />
          ) : (
            // Render Text component in view mode
            <Text style={style.textValue}>{age}</Text>
          )}
        </View>
      </View>

      <View style={[style.basicInfoContainer, {borderBottomWidth: 2}]}>
        <FontAwesomeIcon icon={faVenusMars} size={24} style={style.icon} />
        <View style={style.textContainer}>
          <Text style={style.textKey}>Gender</Text>
          {editMode ? ( // Render TextInput in edit mode
            <Picker
              selectedValue={gender}
              style={style.picker}
              onValueChange={itemValue => setGender(itemValue)}>
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          ) : (
            // Render Text component in view mode
            <Text style={style.textValue}>{gender}</Text>
          )}
        </View>
      </View>

      <TouchableOpacity
        onPress={editMode ? handleUpdate : handleEdit}
        style={style.button}>
        <Text style={style.buttonText}>{editMode ? 'Update' : 'Edit'}</Text>
      </TouchableOpacity>
    </View>
  );

  const LocationContent = () => (
    <View>
      <LocationTab />
    </View>
  );

  const SkillContent = () => (
    <View>
      <Text>Skill Content</Text>
      <SkillsScreen />
    </View>
  );

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleUpdate = async () => {
    try {
      const response = await updateUser(
        name,
        userState.user.userName,
        phoneNo,
        email,
        age,
        gender,
      );

      if (response.status === 200) {
        // console.log(response.data);
        const responseData = {
          user: response.data,
          token: userState.token,
        };
        setUserState(responseData);
        await AsyncStorage.setItem('@auth', JSON.stringify(responseData));
        Alert.alert('User Update successfully');
      }
    } catch (error) {
      Alert.alert('something went wrong');
    }
    setEditMode(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'BASIC DETAILS':
        return <BasicDetailsContent />;
      case 'LOCATION':
        return <LocationContent />;
      case 'SKILL':
        return <SkillContent />;
      default:
        return null;
    }
  };

  // console.log(userState);
  return (
    <SafeAreaView
      style={[globalStyle.backgroundWhite, globalStyle.flex, style.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.profileImageContainer}>
          {userState.user.photo ? (
            <Image
              source={{
                uri:
                  'data:image/jpeg;base64,' +
                  userState.user.photo.image.data.toString('base64'),
              }}
              style={style.photo}
            />
          ) : (
            <NamingAvatar
              name={userState.user.name}
              avatarSize={100}
              textSize={45}
              padding={5}
            />
          )}
        </View>
        <Text style={style.name}>{userState.user.name}</Text>

        <View style={style.tabNavigate}>
          <TouchableOpacity
            onPress={() => handleTabPress('BASIC DETAILS')}
            style={[
              style.tab,
              activeTab === 'BASIC DETAILS' && style.activeTab,
            ]}>
            <Text style={style.text}>BASIC DETAILS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTabPress('LOCATION')}
            style={[style.tab, activeTab === 'LOCATION' && style.activeTab]}>
            <Text style={style.text}>LOCATION</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTabPress('SKILL')}
            style={[style.tab, activeTab === 'SKILL' && style.activeTab]}>
            <Text style={style.text}>SKILL</Text>
          </TouchableOpacity>
        </View>

        <View>
          {activeTab === 'BASIC DETAILS' ? (
            <View>{BasicDetailsContent()}</View>
          ) : activeTab === 'LOCATION' ? (
            <View>{LocationContent()}</View>
          ) : (
            <View>{SkillContent()}</View>
          )}
        </View>
      </ScrollView>
      {/* <FooterMenu /> */}
    </SafeAreaView>
  );
};

export default Profile;
