import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/style/scaling";
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
    container:{
        backgroundColor:'#f0faf8',
        borderRadius:15,
        margin:horizontalScale(8),
        padding:horizontalScale(10),
        borderWidth:2,
        borderColor:'#ffffff'
    },
    posteContainer : {
        flexDirection:'row',
        alignItems:'center'
    },
    avatarImage: {
        height: horizontalScale(40),
        width: horizontalScale(40),
        borderRadius: horizontalScale(50),
        marginTop:verticalScale(9)

    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: horizontalScale(5),
      },
    nameText: {
        fontFamily: getFontFamily('Inter', '500'),
        fontSize: scaleFontSize(16),
        color: '#000000',
        marginLeft:horizontalScale(10),
        fontWeight:'bold'
    },
    text: {
        fontFamily: getFontFamily('Inter', 600),
        fontSize: scaleFontSize(15),
        fontWeight: 'bold',
        color: '#000',
      },
      value: {
        fontFamily: getFontFamily('Inter', 600),
        fontSize: scaleFontSize(15),
        fontWeight: 'bold',
      },
      ratingBtn: {
        backgroundColor:'#278c20',
        width:horizontalScale(100),
        height:verticalScale(42),
        borderRadius:horizontalScale(10),
        alignItems:'center',
        justifyContent:'center'
      },
      btnText: {
        color:'#ffffff',
        fontSize:scaleFontSize(17),
        fontWeight:'bold'
      }
});
export default style;