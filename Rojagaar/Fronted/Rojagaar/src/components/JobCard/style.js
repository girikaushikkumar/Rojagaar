import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/style/scaling";
import { getFontFamily } from "../../assets/fonts/helper";
const style = StyleSheet.create({
    container:{
        backgroundColor:'#e8edea',
        borderRadius:15,
        margin:horizontalScale(8),
    },
    title : {
        fontSize:scaleFontSize(18),
        fontFamily:getFontFamily('Inter',800),
        fontWeight:'bold',
        color:'black',
        marginTop:verticalScale(5),
        marginLeft:horizontalScale(10)
    },
    jobDescription:{
        fontSize:scaleFontSize(15),
        fontFamily:getFontFamily('Inter',800),
    },
    jobDescriptionContainer: {
        width:horizontalScale(257),
        margin:horizontalScale(5),
        marginLeft:horizontalScale(15)
    },
    container1 : {
        margin:horizontalScale(5),
        flexDirection:'row',
        justifyContent:'space-between'
    },
    locationContainer: {
        margin:horizontalScale(5),
        flexDirection:'row',
    },
    locationIcon:{
        color:'red',
        marginLeft:horizontalScale(7)
    },
    locationText: {
        fontFamily:getFontFamily('Inter',600),
        marginLeft:horizontalScale(7),
        fontSize:scaleFontSize(15),
    },
    workingDateContainer:{
        flexDirection:'row',
        margin:horizontalScale(5),
        alignItems:'center'
    },
    workingText1: {
        marginLeft:horizontalScale(13),
        fontSize:scaleFontSize(15),
    },
    workingText2: {
        marginLeft:horizontalScale(6),
        fontSize:scaleFontSize(15),
    },
    footerContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        margin:horizontalScale(5),
        alignItems:'center'
    },
    time: {
        marginLeft:horizontalScale(13),
        fontSize:scaleFontSize(12),
    },
    price: {
        marginRight:horizontalScale(7),
        fontSize:scaleFontSize(15),
    },
    avatarImage: {
        height: horizontalScale(40),
        width: horizontalScale(40),
        borderRadius: horizontalScale(50),
        marginLeft:horizontalScale(15),
        marginTop:verticalScale(9)

    },
    posteContainer : {
        flexDirection:'row',
        alignItems:'center'
    },
    nameText: {
        fontFamily: getFontFamily('Inter', '500'),
        fontSize: scaleFontSize(16),
        color: '#000000',
        marginLeft:horizontalScale(10)
    },
   
});
export default style;