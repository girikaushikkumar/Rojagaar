import { ActivityIndicator, Alert, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputBox from '../../components/Forms/InputBox';
import { getFontFamily } from '../../assets/fonts/helper'; 
import SubmitBtn from '../../components/Forms/SubmitBtn';
import { horizontalScale,scaleFontSize, verticalScale } from '../../assets/style/scaling'; 
import globalStyle from '../../assets/style/globalStyle';
import { registerUser } from '../../api/User';
import { Routes } from '../../navigation/Routes';
const Register = ({navigation}) => {
    const[userName,setUserName] = useState("");
    const[password,setPassword] = useState("");
    const[confirmPassword,setConfirmPassword] = useState('');
    const[loading,setLoading] = useState(false);

    const handleSubmit = async () => {
      try {
        setLoading(true);
        // Validation checks
        if (userName.length < 6 || password.length < 6) {
          Alert.alert("Please enter a username and password with at least 6 characters.");
          setLoading(false);
          return;
        }

        if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
          Alert.alert("Password must contain a combination of letters and numbers.");
          setLoading(false);
          return;
      }
        if (!userName || !password) {
          Alert.alert("Please fill all the fields");
          setLoading(false);
          return;
        } else if (password !== confirmPassword) {
          Alert.alert("Password mismatched");
          setLoading(false);
          return;
        }
        setLoading(true);
        const response = await registerUser(userName,password);

        console.log(response.data);
        console.log("Response status code:", response.status);
    
        if (response.status === 201) {
          // Registration successful
          Alert.alert(response.data.message);
          navigation.navigate('User_Login');
        } else if (response.status === 200) {
          // UserName Already exist
          // console.log(response.data.message);
          Alert.alert(response.data.message);
        } else {
          // Handle other status codes
          Alert.alert("Registration failed", "Unexpected error occurred.");
        }
        setLoading(false);
      } catch (error) {
        console.log("Error:", error);
        alert("Registration failed: " + error.message);
        setLoading(false);
      }
    };
    
    
    
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
       <Image
         source={require('../../assets/images/register.jpg')}
         style={styles.image}
       />
       <Text style={styles.text}>Register</Text>
       <View style={styles.container}>
        <InputBox 
            width={horizontalScale(323)}
            height={verticalScale(60)}
            fontSize={scaleFontSize(25)}
            inputTitle={"User Name "} 
            value={userName} 
            setValue={setUserName} />
        <InputBox
            inputTitle={"password"}
            width={horizontalScale(323)}
            height={verticalScale(60)}
            fontSize={scaleFontSize(25)}

            secureTextEntry={true}
            autoComplete='password'
            value={password}
            setValue={setPassword}
        />
        <InputBox
            inputTitle={"confirm password"}
            value={confirmPassword}
            setValue={setConfirmPassword}
            width={horizontalScale(323)}
            height={verticalScale(60)}
            fontSize={scaleFontSize(25)}

        />
       </View>
      <View style={{alignItems:'center'}}>
        <SubmitBtn 
          title={'SignUp'} width={358} height= {60} 
          //  loading={loading}
          handleSubmit={handleSubmit}
        />
      </View>
     
      <Text style={styles.linkText}>
        Already have an account ?{" "}
        <Text style={styles.link} onPress={()=>navigation.navigate(Routes.User_Login)}>
          Login
        </Text>{" "}
      </Text>

      {loading && <ActivityIndicator size='large' color='#0000ff'/>}
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