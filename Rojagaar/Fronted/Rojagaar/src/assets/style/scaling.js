import { Dimensions } from "react-native";
import DeviceInfo from "react-native-device-info";

const {width,height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch();


const guideLineBaseWidth = () => {
    if(isSmall) {
        return 330;
    }
    return 350;
};

const horizontalScale = size => (width/guideLineBaseWidth()) * size;

const guidelineBaseHeight = () => {
    if(isSmall) {
        return 550;
    } else if(width > 410) {
        return 620;
    }
    return 680;
};

const verticalScale = size => (height/guidelineBaseHeight()) * size;

const guidelineBaseFont = () => {
    if(width > 410) {
        return 430;
    }
    return 400;
};

const scaleFontSize = size => Math.round((width/guidelineBaseFont()) * size);

export {horizontalScale,verticalScale,scaleFontSize};