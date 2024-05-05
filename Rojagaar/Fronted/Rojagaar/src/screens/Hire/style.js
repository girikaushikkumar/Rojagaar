import { StyleSheet } from "react-native"
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/style/scaling";
import { getFontFamily } from "../../assets/fonts/helper";
const style = StyleSheet.create({
    container:{
        backgroundColor:'#dff5f1',
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
    nameText: {
        fontFamily: getFontFamily('Inter', '500'),
        fontSize: scaleFontSize(16),
        color: '#000000',
        marginLeft:horizontalScale(10)
    },
    btn: {
        backgroundColor: '#0B6EFE',
        borderRadius: verticalScale(5),
        alignItems: 'center',
        justifyContent: 'center',
        width:horizontalScale(90),
        height:verticalScale(40)
      },
      btntext: {
        fontFamily: getFontFamily('Inter', 600),
        fontSize: scaleFontSize(24),
        color: '#FFFFFF'
      },
      subContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
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
    rating: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default style;