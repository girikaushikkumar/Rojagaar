import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../../assets/style/scaling";
import { getFontFamily } from "../../../assets/fonts/helper";
const style = StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
        margin:horizontalScale(10),
    },
    text:{
        fontFamily:getFontFamily('Inter',600),
        fontSize:scaleFontSize(15),
        fontWeight:'bold',
        color:'#000',
        marginTop :verticalScale(5),
        marginBottom:verticalScale(5)
    },
    button : {
        alignItems:'center',
        marginBottom:verticalScale(15)
    }
});
export default style;