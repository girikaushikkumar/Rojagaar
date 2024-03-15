import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/style/scaling';
import { getFontFamily } from '../../assets/fonts/helper';


export const style = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    },
    footer : {
        backgroundColor:'#f5eeeb'
    },
    photo: {
        height:verticalScale(100),
        width:horizontalScale(100),
        borderRadius:horizontalScale(110),
        borderWidth:2,
        borderColor:'red',
        padding:horizontalScale(4)
       
    },
    profileImageContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:horizontalScale(40)
    },
    name : {
        textAlign:'center',
        marginTop:verticalScale(10),
        fontFamily:getFontFamily('Inter',600),
        fontSize:scaleFontSize(20),
        color:'#000000',
        fontWeight:'bold'
    },
    userInfoContainer: {
        margin:horizontalScale(10),
        marginTop:verticalScale(30),
        borderRadius:horizontalScale(10),
        backgroundColor:'#e1fae9'
    },
    textContainer: {
        flexDirection:'row',
        margin:horizontalScale(5),
    },
    textKey : {
        fontFamily:getFontFamily('Inter',600),
        fontSize :scaleFontSize(18),
        fontWeight:'bold',
    },
    textValue : {
        fontFamily:getFontFamily('Inter',600),
        fontSize :scaleFontSize(18),
    },
    textAlignContainer : {
        justifyContent:'space-between',
        margin:horizontalScale(10),
    }
});