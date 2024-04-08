import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../../assets/style/scaling";
import { getFontFamily } from "../../../assets/fonts/helper";
const style = StyleSheet.create({
    teamContainer:{
        backgroundColor:'#c7d1c9',
        padding:horizontalScale(10),
        margin:horizontalScale(10),
        borderRadius:10,
    },
    teamName:{
        fontFamily:getFontFamily('Inter',600),
        fontSize:scaleFontSize(20),
        fontWeight:'bold',
        color:'#000'
    },
    skillTitle:{
        fontFamily:getFontFamily('Inter',600),
        fontSize:scaleFontSize(20),
        fontWeight:'bold',
        color:'#000'
    },
    skillsContainer:{
        marginLeft:horizontalScale(8),
        
    },
    skillItem:{
        fontFamily:getFontFamily('Inter',600),
        fontSize:scaleFontSize(16),
        color:'#000',
    },
    btn: {
        backgroundColor: '#0B6EFE',
        borderRadius: verticalScale(5),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:verticalScale(8),
        width:horizontalScale(100),
        height:verticalScale(40)
      },
      btnText: {
        fontFamily: getFontFamily('Inter', 600),
        fontSize: scaleFontSize(24),
        color: '#FFFFFF'
      }
});
export default style;