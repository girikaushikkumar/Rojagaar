import { StyleSheet } from "react-native";
import { horizontalScale } from "../../assets/style/scaling";

export const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius:horizontalScale(10),
        margin: horizontalScale(10),
        
      },
});