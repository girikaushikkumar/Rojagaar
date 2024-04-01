import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/style/scaling";
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
    posteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      avatarImage: {
        height: horizontalScale(40),
        width: horizontalScale(40),
        borderRadius: horizontalScale(50),
        marginLeft: horizontalScale(5),
        marginTop: verticalScale(5),
      },
      nameText: {
        fontFamily: getFontFamily('Inter', '500'),
        fontSize: scaleFontSize(25),
        color: '#000000',
        marginLeft: horizontalScale(13),
        textAlign: 'center',
      },
      container : {
        padding:horizontalScale(5),
        backgroundColor:'#f2f2ed',
        borderRadius:horizontalScale(10),
        margin:horizontalScale(5)
      },
      subContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding:horizontalScale(5)
      },
      text : {
        fontFamily:getFontFamily('Inter',600),
        fontSize:scaleFontSize(15),
        fontWeight:'bold',
        color:'#000'
    },
    value : {
        fontFamily:getFontFamily('Inter',600),
        fontSize:scaleFontSize(15),
        fontWeight:'bold',
    },
    choiceContainer: {
      flexDirection:'row',
      justifyContent:'space-between',
      padding:horizontalScale(5),
      width:horizontalScale(300),
      backgroundColor:'#e8e3e3',
      alignItems:'center',
      justifyContent:'space-around',
      marginLeft:horizontalScale(15)
    },
    circle: {
      width:horizontalScale(100),
      height:horizontalScale(55),
      alignItems:'center',
      justifyContent:'center',
      borderWidth:1,
      borderColor:'#d6d2d2'
    },
    Xmark: {
      width:horizontalScale(100),
      height:horizontalScale(55),
      alignItems:'center',
      justifyContent:'center',
      borderWidth:1,
      borderColor:'#d6d2d2'

    },
    

});
export default style;