import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {AuthContext} from '../../context/authContext';
import NamingAvatar from '../NamingAvatar/NamingAvatar';
import style from './Style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = props => {
  const [userState, setUserState] = useContext(AuthContext);

    const handleLogout = async () => {
    // Function to show the confirmation dialog
    const confirmLogout = () => {
        Alert.alert(
        'Confirm Logout',
        'Are you sure you want to logout?',
        [
            {
            text: 'Cancel',
            style: 'cancel',
            },
            {
            text: 'Logout',
            onPress: async () => {
                // Perform logout logic
                setUserState({
                token: '',
                user: null,
                });
                await AsyncStorage.removeItem('@auth');
            },
            style: 'destructive',
            },
        ],
        { cancelable: false }
        );
    };

    // Show the confirmation dialog
    confirmLogout();
    };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
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

        <View style={style.itemList}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={style.bottomContainer}>
        <TouchableOpacity onPress={handleLogout}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} size={22}/>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
