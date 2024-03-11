import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { getFontFamily } from '../../assets/fonts/helper'; 
import { horizontalScale,scaleFontSize, verticalScale  } from '../../assets/style/scaling';

const SubmitBtn = ({title,loading,handleSubmit}) => {
  return (
     <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
       <Text style={styles.text}>{title}</Text>
     </TouchableOpacity>
  );
};

export default SubmitBtn;

const styles = StyleSheet.create({
  btn : {
    width:horizontalScale(324),
    height:verticalScale(60),
    backgroundColor:'#0B6EFE',
    marginLeft:horizontalScale(12),
    borderRadius:verticalScale(5),
    alignItems:'center',
    justifyContent:'center'
  },

  text : {
      fontFamily:getFontFamily('Inter',600),
      fontSize:scaleFontSize(24),
      color:'#FFFFFF'
  }
});