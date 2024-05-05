import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/style/scaling';
import {getFontFamily} from '../../assets/fonts/helper';
const style = StyleSheet.create({
  container: {
    marginTop: horizontalScale(30),
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginHorizontal: horizontalScale(10),
    marginBottom: verticalScale(20),
  },
  hireContainer: {
    marginTop: verticalScale(30),
    backgroundColor: '#e6f5f5',
    padding: horizontalScale(5),
    borderRadius: horizontalScale(8),
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  jobContainer: {
    backgroundColor: '#e6f5f5',
    padding: horizontalScale(5),
    marginTop: verticalScale(30),
    borderWidth: 2,
    borderRadius: horizontalScale(8),
    borderColor: '#ffffff',
  },
  jobPostContainer: {
    backgroundColor: '#e6f5f5',
    padding: horizontalScale(5),
    marginTop: verticalScale(30),
    borderRadius: horizontalScale(8),
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  teamtContainer: {
    backgroundColor: '#e6f5f5',
    padding: horizontalScale(5),
    marginTop: verticalScale(30),
    borderRadius: horizontalScale(8),
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  img: {
    height: verticalScale(40),
    width: horizontalScale(40),
    borderRadius: horizontalScale(5),
    marginTop: verticalScale(10),
  },
  navImg: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: horizontalScale(5),
  },
  scrl1: {
    marginTop: horizontalScale(30),
    marginHorizontal: horizontalScale(5),
  },
  card: {
    backgroundColor: '#e1f0ee',
    alignItems: 'center',
    height: verticalScale(100),
    width: horizontalScale(80),
    borderRadius: horizontalScale(8),
    borderWidth: 2,
    borderColor: '#ffffff',
    marginHorizontal: horizontalScale(13),
  },
  text: {
    fontFamily: getFontFamily('Inter', 600),
    justifyContent: 'center',
    color: '#3C3C3C',
    marginTop: verticalScale(10),
    fontSize: scaleFontSize(16),
    fontWeight: 'bold',
    // padding:horizontalScale(5)
  },
  categoryContainer: {
    flexDirection: 'row',
    marginVertical: verticalScale(10),
  },
  title: {
    fontFamily: getFontFamily('Inter', 600),
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
    color: '#000',
    marginLeft: horizontalScale(13),
  },
  workOrder: {
    backgroundColor: '#e6f5f5',
    padding: horizontalScale(5),
    borderRadius: horizontalScale(8),
    borderWidth: 2,
    borderColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: horizontalScale(15),
    marginTop:verticalScale(30)
  },
  workOrderText: {
    fontFamily: getFontFamily('Inter', 600),
    fontSize: scaleFontSize(33),
    fontWeight: 'bold',
    color: '#000',
  },
  checklist: {
    height: verticalScale(40),
    width: horizontalScale(40),
    borderRadius: horizontalScale(5),
    marginRight: horizontalScale(15),
  },
  profileContainer:{
    borderBottomLeftRadius:30,
    backgroundColor:'#b8adf7',
    borderBottomRightRadius:30,
    zIndex:1
  },
  photo: {
    height:verticalScale(120),
    width:horizontalScale(120),
    borderRadius:horizontalScale(80),
    borderWidth:4,
    borderColor:'#ffffff',
  },
  profileImageContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:verticalScale(20),
    marginLeft:horizontalScale(20),
    // position:'absolute',
    zIndex:1
  },
 
  name:{
    fontFamily: getFontFamily('Inter', 600),
    fontSize: scaleFontSize(25),
    fontWeight: 'bold',
    color: '#ffffff',
  },
  textContainer: {
    marginLeft:horizontalScale(15),
    alignItems:'center'
  },
  phone:{
    fontFamily: getFontFamily('Inter', 600),
    fontSize: scaleFontSize(20),
    // fontWeight: 'bold',
    color: '#ffffff',
    // marginLeft:horizontalScale(5)
  },
  locationContainer : {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:verticalScale(10),
    marginBottom:verticalScale(25)
  },
  ltext:{
    fontFamily: getFontFamily('Inter', 600),
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
    color: '#ffffff',
  },
  licon: {
    marginRight:horizontalScale(10)
  },
  editBtn: {
    backgroundColor:'#853cde',
    width:horizontalScale(140),
    height:verticalScale(50),
    borderRadius:horizontalScale(20),
    marginHorizontal:horizontalScale(90),
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    zIndex:2,
    marginTop:verticalScale(210),
  },
  btnText: {
    fontFamily: getFontFamily('Inter', 600),
    color: '#ffffff',
    fontSize:scaleFontSize(17),
    fontWeight:'bold'
  },
  pcontainer: {
    position:'relative',
    // alignContent:'center'
  }
});
export default style;
