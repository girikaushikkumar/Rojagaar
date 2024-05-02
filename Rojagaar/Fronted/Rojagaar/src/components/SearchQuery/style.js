import { StyleSheet } from "react-native";
import { horizontalScale } from "../../assets/style/scaling";

export const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius:horizontalScale(10),
        margin: horizontalScale(5),
        borderWidth:2,
        borderColor: '#A3A3A3',
      },
});