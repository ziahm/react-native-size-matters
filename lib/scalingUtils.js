import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

//Guideline sizes are based on standard ~5" screen mobile device
//Guideline sizes are based on standard ~5" screen mobile device
// let guidelineBaseWidth = 768;
// let guidelineBaseHeight = 1024;

let guidelineBaseWidth = 350;
let guidelineBaseHeight = 680;


const setGuideLineDimension = (config) => {
  guidelineBaseWidth = config.width;
  guidelineBaseHeight = config.height;
}
const scale = size => shortDimension / guidelineBaseWidth * size;
const verticalScale = size => longDimension / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {setGuideLineDimension, scale, verticalScale, moderateScale};