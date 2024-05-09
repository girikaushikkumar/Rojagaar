import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import globalStyle from '../../../assets/style/globalStyle';
import style from './style';
import NamingAvatar from '../../../components/NamingAvatar/NamingAvatar';
import {addMember, rejectRequest} from '../../../api/Team';

const ViewJoinRequest = ({route}) => {
  const {teamId, member} = route.params;

  const handleMember = async (teamId, memberId) => {
    try {
      const response = await addMember(teamId, memberId);
      Alert.alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (teamId, memberId) => {
    try {
      console.log(memberId);
      const response = await rejectRequest(teamId, memberId);
      Alert.alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <FlatList
        data={member}
        renderItem={({item}) => (
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
            <View style={style.subContainer}>
              <Text style={style.text}>Age</Text>
              <Text style={style.value}>{item.age}</Text>
            </View>

            <View style={style.subContainer}>
              <Text style={style.text}>Address</Text>
              <Text style={style.value}>
                {item.address.village}
                {', '}
                {item.address.village}
              </Text>
            </View>
            <View style={style.choiceContainer}>
              <TouchableOpacity
                style={style.add}
                onPress={() => handleMember(teamId, item.username)}>
                {/* <FontAwesomeIcon
                      icon={faCheckCircle}
                      size={50}
                      color="#0be321"
                    /> */}
                <Text style={style.choiceText}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.remove}
                onPress={() => handleRemove(teamId, item.username)}>
                <Text style={style.choiceText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ViewJoinRequest;
