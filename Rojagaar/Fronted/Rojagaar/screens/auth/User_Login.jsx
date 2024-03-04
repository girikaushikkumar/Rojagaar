import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputBox from '../../components/Forms/InputBox';
import { getFontFamily } from '../../assets/fonts/helper';
import SubmitBtn from '../../components/Forms/SubmitBtn';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/style/scaling';
import { Routes } from '../../navigation/Routes ';
import globalStyle from '../../assets/style/globalStyle';
import { loginUser } from '../../api/User';
import { AuthContext } from '../../context/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const User_Login = ({navigation}) => {
    //global state
    const [state,setState] = useContext(AuthContext);


    const[userName,setUserName] = useState("");
    const[password,setPassword] = useState("");
    const [error, setError] = useState('');

    
    const handleSubmit = async() =>{
      try {
        console.log(userName);
        console.log(password);
        if (!userName || !password) {
          Alert.alert("Please fill all the fields");
          return;
        } 

        const user = await loginUser(userName,password);
        if(!user.status){
          setError(user.error.response.data.message);
        }
        else{
            setError('');
            setState(user.data);
            await AsyncStorage.setItem('@auth', JSON.stringify(user.data));
            // Alert.alert(user.data && user.data.message);
            navigation.navigate('Home');
        }

        
      } catch (error) {
        Alert.alert("Error", error.message || "An error occurred");
      }
    };

    const getLcoalStorageData = async () => {
      let data = await AsyncStorage.getItem("@auth");
      console.log("Local Storage ==> ", data);
    };
    getLcoalStorageData();
  return (
    <SafeAreaView  style={[globalStyle.backgroundWhite,globalStyle.flex]}>
       <Image
         source={require('../../assets/images/login.jpg')}
         style={styles.image}
       />
       <Text style={styles.text}>Login</Text>
       <View style={styles.container}>
        <InputBox 
            inputTitle={"User Name"} 
            value={userName} 
            setValue={setUserName} />
        <InputBox
            inputTitle={"password"}
            secureTextEntry={true}
            autoComplete='password'
            value={password}
            setValue={setPassword}
        />
       
       </View>

      <SubmitBtn
        title={'Login'}
        handleSubmit={handleSubmit}
      />

    <Text style={styles.linkText}>
        don't have account ?{" "}
        <Text style={styles.link} onPress={()=> navigation.navigate(Routes.Register)}>
          SignUp
        </Text>{" "}
      </Text>
    </SafeAreaView>
  )
}

export default User_Login;

const styles = StyleSheet.create({
    container:{
      padding:verticalScale(10),
      gap:verticalScale(7),
      alignItems:'center'
    },
    image : {
        width:horizontalScale(360),
        height:verticalScale(241),
    },
    text: {
        fontFamily:getFontFamily('Inter',500),
        fontWeight:'bold',
        width:horizontalScale(100),
        height:verticalScale(40),
        left:horizontalScale(20),
        fontSize:scaleFontSize(34),
        color:'black',
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