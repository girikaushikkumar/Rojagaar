import { StyleSheet} from 'react-native';
import { horizontalScale } from '../../../assets/style/scaling';


export const style = StyleSheet.create({
    container: {
        height: horizontalScale(50),
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection:'row',
        paddingHorizontal: horizontalScale(25),
        backgroundColor:'#f5eeeb'
    },
    text : {
        color:'red'
    },
    icon : {
        color:'gray'
    },
});