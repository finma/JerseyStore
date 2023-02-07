import {Dimensions} from 'react-native';
import {heightMobileUI, widthMobileUI} from '../constants';

export const responsiveWidth = (width: number) => {
  return (Dimensions.get('window').width * width) / widthMobileUI;
};

export const responsiveHeight = (height: number) => {
  return (Dimensions.get('window').height * height) / heightMobileUI;
};
