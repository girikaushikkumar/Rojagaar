import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/style/scaling";
import { getFontFamily } from "../../assets/fonts/helper";
const style = StyleSheet.create({
    locationContainer: {
        marginTop:verticalScale(10),
        marginLeft:horizontalScale(10)
    },
    city: {
        fontFamily:getFontFamily('Inter',600),
        color:'#050505',
        fontSize:scaleFontSize(17),
        fontWeight:'700'
    },
    container: {
        marginBottom: horizontalScale(20),
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: horizontalScale(10),
      },
      categoryContainer:{
        marginVertical:verticalScale(20)
      },
      btn:{
        marginHorizontal:horizontalScale(20),
        marginBottom:verticalScale(20)
      }
});
export default style;