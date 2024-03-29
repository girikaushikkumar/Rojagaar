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
    marginTop: verticalScale(13),
  },
  avatarImage: {
    height: horizontalScale(40),
    width: horizontalScale(40),
    borderRadius: horizontalScale(50),
    marginLeft: horizontalScale(15),
    marginTop: verticalScale(9),
  },
  nameText: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(25),
    color: '#000000',
    marginLeft: horizontalScale(13),
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    marginBottom: verticalScale(15),
  },
});
export default style;
