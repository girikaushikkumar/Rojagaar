import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import {style} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../../navigation/Routes'; 

const FooterMenu = () => {
  const navigation = useNavigation();
  return (
   <SafeAreaView style={style.container} >
      <TouchableOpacity>
        <FontAwesomeIcon icon={faHouse} size={25} style={style.icon}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate(Routes.Profile)} >
        <FontAwesomeIcon icon={faUser} size={25} style={style.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate(Routes.SavedJob)}>
        <FontAwesomeIcon icon={faBookmark} size={25} style={style.icon}/>
      </TouchableOpacity>

      <TouchableOpacity>
        <FontAwesomeIcon icon={faRocketchat} size={25} style={style.icon}/>
      </TouchableOpacity>
   </SafeAreaView>
  )
};

export default FooterMenu;