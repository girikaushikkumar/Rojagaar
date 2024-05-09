import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize} from '../../../assets/style/scaling';
import {getFontFamily} from '../../../assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f0faf8',
    borderRadius: 15,
    margin: horizontalScale(8),
    padding: horizontalScale(10),
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: horizontalScale(5),
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
});
export default style;
