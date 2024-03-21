import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import {style} from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBookmark, faHouse, faUser} from '@fortawesome/free-solid-svg-icons';
import {faRocketchat} from '@fortawesome/free-brands-svg-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Routes} from '../../../navigation/Routes';

const FooterMenu = () => {
  const navigation = useNavigation();
  const activeColor = '#7e9968';
  const route = useRoute();
  return (
    <SafeAreaView style={style.container}>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.Job)}>
        <FontAwesomeIcon
          icon={faHouse}
          size={25}
          style={[
            style.icon,
            {color: route.name === Routes.Job ? activeColor : 'black'},
          ]}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate(Routes.Profile)}>
        <FontAwesomeIcon 
        icon={faUser} 
        size={25} 
        style={[
            style.icon,
            {color: route.name === Routes.Profile ? activeColor : 'black'},
          ]}
           />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate(Routes.SavedJob)}>
        <FontAwesomeIcon 
        icon={faBookmark} 
        size={25} 
        style={[
            style.icon,
            {color: route.name === Routes.SavedJob ? activeColor : 'black'},
          ]} />
      </TouchableOpacity>

      <TouchableOpacity>
        <FontAwesomeIcon 
        icon={faRocketchat} 
        size={25} 
        style={style.icon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FooterMenu;
