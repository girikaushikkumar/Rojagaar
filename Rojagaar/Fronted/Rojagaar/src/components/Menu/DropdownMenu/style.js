import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../../assets/style/scaling";
import { getFontFamily } from "../../../assets/fonts/helper";

 const style = StyleSheet.create({
    EllipsisVertical:{
        marginTop:verticalScale(11),
    },
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row'
      },
      modalContent: {
        backgroundColor: 'white',
        padding:horizontalScale(20),
        borderRadius: horizontalScale(4),
      },
      option: {
        fontFamily:getFontFamily('Inter',600),
        fontSize:scaleFontSize(20),
        marginBottom: verticalScale(10),
      },
      modal: {
        alignItems: 'center',
      },
});

export default style;