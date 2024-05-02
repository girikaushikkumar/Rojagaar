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
    marginHorizontal: horizontalScale(30),
    marginBottom: verticalScale(20),
  },
  subContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(30),
  },
  img: {
    height: verticalScale(70),
    width: horizontalScale(70),
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
    backgroundColor: '#ffffff',
    alignItems: 'center',
    height: verticalScale(140),
    width: horizontalScale(120),
    borderRadius: horizontalScale(8),
    borderWidth: 2,
    borderColor: '#F1F0F0',
  },
  text: {
    fontFamily: getFontFamily('Inter', 600),
    justifyContent: 'center',
    color: '#3C3C3C',
    marginTop: verticalScale(15),
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
  },
});
export default style;
