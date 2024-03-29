import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize } from "../../assets/style/scaling";
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
    container : {
        padding:horizontalScale(10),
        backgroundColor:'#f2f2ed',
        borderRadius:horizontalScale(10),
        margin:horizontalScale(5),
    },
    subContainer : {
        flexDirection:'row',
        justifyContent:'space-between',
        padding:horizontalScale(5),

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
    
});
export default style;