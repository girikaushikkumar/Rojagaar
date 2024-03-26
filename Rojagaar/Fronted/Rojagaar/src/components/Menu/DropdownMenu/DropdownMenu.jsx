import {TouchableOpacity, View, Text, Alert} from 'react-native';
import React, {useContext, useState} from 'react';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ReactNativeModal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import { Routes } from '../../../navigation/Routes';
import { addJobToCart } from '../../../api/JobCart';
import { AuthContext } from '../../../context/authContext';
const DropdownMenu = ({job, jobPosterName, jobPosterPhoto}) => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userState] = useContext(AuthContext);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleOptionClick = option => {
    // Handle the click on an option here
    console.log('Clicked on option:', option);
    // You can perform different actions based on the option clicked
    // For example: applying, viewing, saving, etc.

  };

  const handleSaveOption = () => {
     addJobToCart(job.id,userState.user.userName);
     
  }


  return (
    <View style={style.container}>
      <TouchableOpacity onPress={toggleModal}>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          size={25}
          style={style.EllipsisVertical}
        />
      </TouchableOpacity>
      <ReactNativeModal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={style.modal}>
        <View style={style.modalContent}>
          <TouchableOpacity onPress={() => handleOptionClick('Apply')}>
            <Text style={style.option}>Apply</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(Routes.JobDetails,{job, jobPosterName, jobPosterPhoto})}>
            <Text style={style.option}>View</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSaveOption()}>
            <Text style={style.option}>Save</Text>
          </TouchableOpacity>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default DropdownMenu;
