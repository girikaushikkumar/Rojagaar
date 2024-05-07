import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/style/scaling';
import {getFontFamily} from '../../assets/fonts/helper';
const style = StyleSheet.create({
  posteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImage: {
    height: horizontalScale(40),
    width: horizontalScale(40),
    borderRadius: horizontalScale(50),
    marginLeft: horizontalScale(5),
    marginTop: verticalScale(5),
  },
  nameText: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(25),
    color: '#000000',
    marginLeft: horizontalScale(13),
    textAlign: 'center',
  },
  container: {
    padding: horizontalScale(5),
    backgroundColor: '#ddedea',
    borderRadius: horizontalScale(10),
    margin: horizontalScale(5),
    borderWidth: 2,
    borderColor: '#ffffff',
    marginBottom:verticalScale(20)
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: horizontalScale(10),
    // borderBottomWidth:1,
    borderColor:'white'
  },
  text: {
    fontFamily: getFontFamily('Inter', 600),
    fontSize: scaleFontSize(15),
    fontWeight: 'bold',
    color: '#000',
  },
  value: {
    fontFamily: getFontFamily('Inter', 600),
    fontSize: scaleFontSize(15),
    fontWeight: 'bold',
  },
  choiceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: horizontalScale(15),
    // borderWidth:1,
  },
  circle: {
    width: horizontalScale(120),
    height: horizontalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'green',
    borderRadius:horizontalScale(20),
    borderWidth:2,
    borderColor:'#9bbda4'
    // borderRightWidth:1
    // borderColor: '#d6d2d2',
  },
  Xmark: {
    width: horizontalScale(120),
    height: horizontalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#97999a',
    borderRadius:horizontalScale(20),
    borderWidth:2,
    borderColor:'#b5bab6'
    // borderLeftWidth:1
  },
  choiceText: {
    fontFamily: getFontFamily('Inter', 600),
    fontSize: scaleFontSize(18),
    fontWeight: 'bold',
    color: '#ffffff',
  }
});
export default style;
