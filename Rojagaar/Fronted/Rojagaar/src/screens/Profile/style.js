import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/style/scaling';
import { getFontFamily } from '../../assets/fonts/helper';
import { text } from '@fortawesome/fontawesome-svg-core';


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
   
   
    textAlignContainer : {
        justifyContent:'space-between',
        margin:horizontalScale(10),
    },
    basicInfoContainer: {
        borderTopWidth:horizontalScale(1),
        borderBottomWidth:verticalScale(1),
        padding:horizontalScale(6),
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#a0a19d'
    },
    textContainer:{
        marginLeft:horizontalScale(13)
    },
    textKey:{
        fontFamily:getFontFamily('Inter',600),
        fontSize :scaleFontSize(18),
        fontWeight:'bold',
        color:'#97b00c'
    },
    textValue:{
        fontFamily:getFontFamily('Inter',600),
        fontSize :scaleFontSize(18),
        fontWeight:'bold',
    },
    icon: {
        marginLeft:horizontalScale(15)
    },
    textInput: {
        width:horizontalScale(300),
        height:verticalScale(40),
        borderColor:'gray',
        fontSize:scaleFontSize(16),
        // borderBottomWidth:1,
    },
    picker: {
        width:180,
        height:40,
        borderColor:'gray',
        fontSize:16,
    },
    tabNavigate: {
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopWidth:horizontalScale(2),
        borderBottomWidth:verticalScale(1),
        borderColor:'#a0a19d',
        alignItems:'center',
        marginTop:verticalScale(50)
    },
    text:{
        fontFamily:getFontFamily('Inter',600),
        fontSize :scaleFontSize(15),
        fontWeight:'bold',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        padding:horizontalScale(10)
      },
      activeTab: {
        backgroundColor:'green'
      },
      button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        justifyContent:'center'
      },
      buttonText: {
        color: 'white',
        marginLeft: 5,
        fontFamily:getFontFamily('Inter',600),
        fontSize :scaleFontSize(24),
        fontWeight:'bold',
      },
});