import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../assets/style/scaling';
import {getFontFamily} from '../../../assets/fonts/helper';
const style = StyleSheet.create({
  container: {
    backgroundColor: '#dff5f1',
    borderRadius: 15,
    margin: horizontalScale(8),
    padding: horizontalScale(10),
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  posteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImage: {
    height: horizontalScale(40),
    width: horizontalScale(40),
    borderRadius: horizontalScale(50),
    marginTop: verticalScale(9),
  },
  nameText: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    color: '#000000',
    marginLeft: horizontalScale(10),
  },

  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  add: {
    width: horizontalScale(120),
    height: horizontalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: horizontalScale(20),
    borderWidth: 2,
    borderColor: '#9bbda4',
    // borderRightWidth:1
    // borderColor: '#d6d2d2',
  },
  remove: {
    width: horizontalScale(120),
    height: horizontalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#97999a',
    borderRadius: horizontalScale(20),
    borderWidth: 2,
    borderColor: '#b5bab6',
    // borderLeftWidth:1
  },
  choiceText: {
    fontFamily: getFontFamily('Inter', 600),
    fontSize: scaleFontSize(18),
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
export default style;
