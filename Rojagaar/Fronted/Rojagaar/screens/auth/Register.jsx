import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputBox from '../../components/Forms/InputBox';
import { getFontFamily } from '../../assets/fonts/helper';
import SubmitBtn from '../../components/Forms/SubmitBtn';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/style/scaling';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Routes } from '../../navigation/Routes ';
import globalStyle from '../../assets/style/globalStyle';
const Register = ({navigation}) => {
    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');
    const[confirmPassword,setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
       <Image
         source={require('../../assets/images/register.jpg')}
         style={styles.image}
       />
       <Text style={styles.text}>Register</Text>
       <View style={styles.container}>
        <InputBox 
            inputTitle={"User Name "} 
            value={userName} 
            setValue={setUserName} />
        <InputBox
            inputTitle={"password"}
            secureTextEntry={true}
            autoComplete='password'
            value={password}
            setValue={setPassword}
        />
        <InputBox
            inputTitle={"confirm password"}
            value={confirmPassword}
            setValue={setConfirmPassword}
        />
       </View>

      <SubmitBtn 
         title={'SignUp'}
      />
      <Text style={styles.linkText}>
        Already have an account ?{" "}
        <Text style={styles.link} onPress={()=>navigation.navigate(Routes.User_Login)}>
          Login
        </Text>{" "}
      </Text>
    </SafeAreaView>
  )
}

export default Register;

const styles = StyleSheet.create({
    container:{
      padding:verticalScale(10) ,
      gap:verticalScale(6),
      alignItems:'center'
    },
    image : {
        width:horizontalScale(360),
        height:verticalScale(241),
    },
    text: {
        fontFamily:getFontFamily('Inter',800),
        fontWeight:'500',
        fontWeight:'bold',
        width:horizontalScale(120),
        height:verticalScale(40),
        left:horizontalScale(20),
        fontSize:scaleFontSize(34),
        color:'black'
    },
    linkText: {
      color:'#00000033',
      fontSize:scaleFontSize(16),
      marginTop:verticalScale(15),
      lineHeight:verticalScale(22),
      marginLeft:horizontalScale(25)
    },
    link: {
      color: "#0099FF",
    },

});