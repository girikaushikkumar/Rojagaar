import {ActivityIndicator, Alert, Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputBox from '../../components/Forms/InputBox';
import {getFontFamily} from '../../assets/fonts/helper';
import {Routes} from '../../navigation/Routes';
import globalStyle from '../../assets/style/globalStyle';
import {loginUser} from '../../api/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../../context/authContext';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/style/scaling';
import SubmitBtn from '../../components/Forms/SubmitBtn';
import {useNavigation} from '@react-navigation/native';
const User_Login = () => {
  //global state
  const navigation = useNavigation();
  const [userState, setUserState] = useContext(AuthContext);
  // console.log('user state: ', userState);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (!userName || !password) {
        Alert.alert('Please fill all the fields');
        return;
      }

      setLoading(true);
      const response = await loginUser(userName, password);
      if (response.status === 200) {
        console.log('response data: ', response.data);
        Alert.alert(response.data.message);
        setUserState(response.data);
        await AsyncStorage.setItem('@auth', JSON.stringify(response.data));
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert('Check Username or Password');
      console.log('Error:', error);
    }
  };

  
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Image
        source={require('../../assets/images/login.jpg')}
        style={styles.image}
      />
      <Text style={styles.text}>Login</Text>
      <View style={styles.container}>
        <InputBox
          inputTitle={'User Name'}
          value={userName}
          setValue={setUserName}
          width={horizontalScale(323)}
          height={verticalScale(60)}
          fontSize={scaleFontSize(25)}
        />
        <InputBox
          inputTitle={'password'}
          secureTextEntry={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
          width={horizontalScale(323)}
          height={verticalScale(60)}
          fontSize={scaleFontSize(25)}

        />
      </View>

      <View style={styles.btn}>
      <SubmitBtn title={'Login'} width={358} height= {60} handleSubmit={handleSubmit} />
      </View>
      

      <Text style={styles.linkText}>
        don't have account ?{' '}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate(Routes.Register)}>
          SignUp
        </Text>{' '}
      </Text>

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </SafeAreaView>
  );
};

export default User_Login;

const styles = StyleSheet.create({
  container: {
    padding: verticalScale(10),
    gap: verticalScale(7),
    alignItems: 'center',
  },
  image: {
    width: horizontalScale(360),
    height: verticalScale(241),
  },
  text: {
    fontFamily: getFontFamily('Inter', 500),
    fontWeight: 'bold',
    width: horizontalScale(100),
    height: verticalScale(40),
    left: horizontalScale(20),
    fontSize: scaleFontSize(34),
    color: 'black',
  },
  linkText: {
    color: '#00000033',
    fontSize: scaleFontSize(16),
    marginTop: verticalScale(15),
    lineHeight: verticalScale(22),
    marginLeft: horizontalScale(25),
  },
  link: {
    color: '#0099FF',
  },
  btn:{
    alignItems:'center',
  }
});
