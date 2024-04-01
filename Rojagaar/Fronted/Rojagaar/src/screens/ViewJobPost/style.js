import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/style/scaling";
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
    container: {
        justifyContent:'space-between',
    },
    jobCardContainer: {
        backgroundColor:'#e8edea',
        margin:horizontalScale(8),
        borderRadius:15,
    },
    btnContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:horizontalScale(20),
        marginBottom:verticalScale(5)
    },
    btnText: {
        fontFamily:getFontFamily('Inter',600),
        fontSize:scaleFontSize(17),
        color:'#0c14f0',
        fontWeight:'bold'
    }
});

export default style;