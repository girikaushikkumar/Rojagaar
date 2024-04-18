import {FlatList, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './style';
import {getAllEmployee} from '../../api/Hire';
import globalStyle from '../../assets/style/globalStyle';
import SearchQuery from '../../components/SearchQuery/SearchQuery';
import NamingAvatar from '../../components/NamingAvatar/NamingAvatar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SubmitBtn from '../../components/Forms/SubmitBtn';
import PopupWithInput from '../../components/PopupWithInput/PopupWithInput';

const Hiring = () => {
  const [employee, setEmployee] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (description) => {
    console.log('Submitted description:', description);
    // Perform any action with the submitted description
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllEmployee();
      console.log(response.data);
      setEmployee(response.data);
    };
    fetchData();
  }, []);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <SearchQuery />
      <FlatList
        data={employee}
        renderItem={({item}) => (
          <View style={style.container}>
            <View style={style.posteContainer}>
              {
                item.photo ? (
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
                ) : null // Render nothing if both jobPosterName and jobPosterPhoto are not available
              }
              <Text style={style.nameText}>{item.name}</Text>
            </View>
            <Text>Address</Text>
            <Text>Ratting</Text>
            <SubmitBtn title={'Hire'} width={90} height={40} handleSubmit={handleOpenModal}/>
            <PopupWithInput
                visible={isModalVisible}
                onClose={handleCloseModal}
                onSubmit={handleSubmit}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Hiring;
