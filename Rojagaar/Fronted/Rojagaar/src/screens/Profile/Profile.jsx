import React, {useContext} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import FooterMenu from '../../components/Menu/FooterMenu/FooterMenu';
import {style} from './style';
import globalStyle from '../../assets/style/globalStyle';
import {AuthContext} from '../../context/authContext';
import NamingAvatar from '../../components/NamingAvatar/NamingAvatar';
const Profile = () => {
  const [userState] = useContext(AuthContext);
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

        <View style={style.userInfoContainer}>
          <View style={style.textAlignContainer}>
            <View style={style.textContainer}>
                <Text style={style.textKey}>UserName : </Text>
                <Text style={style.textValue}>{userState.user.userName}</Text>
            </View>
            <View style={style.textContainer}>
                <Text style={style.textKey}>Phone Number : </Text>
                <Text style={style.textValue}>{userState.user.phoneNo}</Text>
            </View>
            <View style={style.textContainer}>
                <Text style={style.textKey}>Age : </Text>
                <Text style={style.textValue}>{userState.user.age}</Text>
            </View>
            <View style={style.textContainer}>
                <Text style={style.textKey}>Gender : </Text>
                <Text style={style.textValue}>{userState.user.gender}</Text>
            </View>
            <View style={style.textContainer}>
                <Text style={style.textKey}>Skill : </Text>
                <Text style={style.textValue}>{userState.user.skill}</Text>
            </View>
            <View style={style.textContainer}>
                <Text style={style.textKey}>Email : </Text>
                <Text style={style.textValue}>{userState.user.email}</Text>
            </View>
          </View>
        </View>

        <View style={style.userInfoContainer}>
          <View style={style.textAlignContainer}>
            <View style={style.textContainer}>
                <Text style={style.textKey}>Village : </Text>
                <Text style={style.textValue}>{userState.user.address.village}</Text>
            </View>
            <View style={style.textContainer}>
                <Text style={style.textKey}>Post Office : </Text>
                <Text style={style.textValue}>{userState.user.address.post}</Text>
            </View>
            <View style={style.textContainer}>
                <Text style={style.textKey}>Block : </Text>
                <Text style={style.textValue}>{userState.user.address.block}</Text>
            </View>
            <View style={style.textContainer}>
                <Text style={style.textKey}>District : </Text>
                <Text style={style.textValue}>{userState.user.address.district}</Text>
            </View>
            <View style={style.textContainer}>
                <Text style={style.textKey}>State : </Text>
                <Text style={style.textValue}>{userState.user.address.state}</Text>
            </View>
            <View style={style.textContainer}>
                <Text style={style.textKey}>Pin code : </Text>
                <Text style={style.textValue}>{userState.user.address.pincode}</Text>
            </View>
          </View>
        </View>
        
      </ScrollView>
      <FooterMenu />
    </SafeAreaView>
  );
};

export default Profile;
