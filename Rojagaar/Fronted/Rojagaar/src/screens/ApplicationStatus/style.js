import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/style/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: horizontalScale(18),
    backgroundColor: 'green',
    marginTop: verticalScale(15),
  },
  text: {
    fontFamily: getFontFamily('Inter', 600),
    fontSize: scaleFontSize(15),
    fontWeight: 'bold',
  },
  selectedText: {
    color: 'white', // Color for selected status
  },
});

export default style;
