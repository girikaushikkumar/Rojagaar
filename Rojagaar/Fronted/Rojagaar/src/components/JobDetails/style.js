import { StyleSheet } from "react-native";

import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/style/scaling";
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
    posteContainer : {
        flexDirection:'row',
        alignItems:'center',
        marginTop:verticalScale(13)
    },
    avatarImage: {
        height: horizontalScale(40),
        width: horizontalScale(40),
        borderRadius: horizontalScale(50),
        marginLeft:horizontalScale(15),
        marginTop:verticalScale(9)

    },
    nameText: {
        fontFamily: getFontFamily('Inter', '500'),
        fontSize: scaleFontSize(25),
        color: '#000000',
        marginLeft:horizontalScale(13),
        textAlign:'center'
    },
    jobDetailsContainer:{
        // marginTop:verticalScale(20),
        // marginLeft:horizontalScale(15),
        // marginRight:horizontalScale(15),
        backgroundColor:'#dedddc',
        padding:horizontalScale(10),
        margin:horizontalScale(10),
        borderRadius:horizontalScale(10)
    },
    title: {
        fontFamily:getFontFamily('Inter',600),
        fontSize:scaleFontSize(20),
        color:'#000',
        fontWeight:'bold'
    },
    jobImage : {
        width:horizontalScale(320),
        height:verticalScale(200),
        borderRadius:horizontalScale(5),
        marginTop:verticalScale(10),
    },
    description: {
        fontFamily:getFontFamily('Inter',600),
        fontSize:scaleFontSize(15),
        marginTop:verticalScale(10),
        marginBottom:verticalScale(15),
    },
    OtherContainer: {
        flexDirection:'row',
        marginTop:verticalScale(5)
    },
    key: {
        fontFamily:getFontFamily('Inter',600),
        fontSize:scaleFontSize(20),
        color:'#000'
    },
    value: {
        fontFamily:getFontFamily('Inter',600),
        fontSize:scaleFontSize(20),
    },
    button : {
        alignItems:'center',
        marginBottom:verticalScale(15)
    }
});

export default style;