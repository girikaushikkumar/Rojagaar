import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/style/scaling";
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
    profileImageContainer: {
        flexDirection:'row',
        justifyContent:'center',
        marginTop:horizontalScale(40)
    },
    photo: {
        height:verticalScale(80),
        width:horizontalScale(80),
        borderRadius:horizontalScale(40),
        marginBottom:verticalScale(10),
        borderWidth:2,
        borderColor:'red',
        padding:horizontalScale(4)
    },
    name: {
        color: '#fff',
        fontSize: scaleFontSize(18),
        fontFamily: getFontFamily('Inter',600),
        marginBottom: verticalScale(5),
        marginLeft:horizontalScale(75)
    },
    itemList: {
        flex:1,
        backgroundColor:'#ffffff',
        paddingTop:verticalScale(10)
    },
    logoutContainer: {
        flexDirection:'row',
        alignItems:'center'
    },
    logoutText: {
        fontSize:scaleFontSize(15),
        fontFamily:getFontFamily('Inter',600),
        marginLeft:horizontalScale(5)
    },
    bottomContainer: {
        padding:horizontalScale(20),
        borderTopWidth:horizontalScale(1),
        borderTopColor:'#cccccc'
    }
});

export default style;