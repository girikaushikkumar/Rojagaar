import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import style from './style';
import { getAllEmployee, sendJobInvitation } from '../../api/Hire';
import globalStyle from '../../assets/style/globalStyle';
import SearchQuery from '../../components/SearchQuery/SearchQuery';
import NamingAvatar from '../../components/NamingAvatar/NamingAvatar';
import SubmitBtn from '../../components/Forms/SubmitBtn';
import PopupWithInput from '../../components/PopupWithInput/PopupWithInput';
import { AuthContext } from '../../context/authContext';

const Hiring = () => {
  const [userState] = useContext(AuthContext);
  const [employee, setEmployee] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // State to store the selected employee

  const handleOpenModal = (item) => { // Pass the item as an argument
    setSelectedEmployee(item); // Set the selected employee
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedEmployee(null); // Clear selected employee on close
  };

  const handleSubmit = async(description) => {
    if (selectedEmployee) {
      // console.log('Submitted description:', description);
      console.log('Selected Employee:', selectedEmployee);
      try {
        const response = await sendJobInvitation(
          userState.user.userName,
          userState.user.name,
          userState.user.photo,
          userState.user.phoneNo,
          userState.user.address,
          description,
          new Date(),
          "Pending",
          selectedEmployee
        );
        console.log(response.data);
      } catch (error) {
        
      }
      // Perform any action with the submitted description and selected employee data
    } else {
      console.warn('No employee selected. Please select an employee before submitting.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllEmployee();
      // console.log(response.data);
      setEmployee(response.data);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <SearchQuery />
      <FlatList
        data={employee}
        renderItem={({ item }) => (
          <View style={style.container}>
            <View style={style.posteContainer}>
              {item.photo ? (
                <Image
                  source={{
                    uri: `data:image/jpeg;base64,${item.photo.image.data.toString(
                      'base64',
                    )}`,
                  }}
                  style={style.avatarImage}
                />
              ) : item.name ? (
                <NamingAvatar
                  name={item.name}
                  avatarSize={43}
                  textSize={16}
                  padding={5}
                />
              ) : null}
              <Text style={style.nameText}>{item.name}</Text>
            </View>
            <Text>{item.username}</Text>
            <Text>Address</Text>
            <Text>Ratting</Text>
            <TouchableOpacity style={style.btn} onPress={() => handleOpenModal(item)}>
              <Text style={style.btntext}>Hire</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <PopupWithInput
        visible={isModalVisible}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </SafeAreaView>
  );
};

export default Hiring;

