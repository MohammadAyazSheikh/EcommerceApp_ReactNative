import { Dimensions, PixelRatio } from 'react-native';

let { width, height } = Dimensions.get('window');

const widthToDp = (number) => {

    let givenWidth = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);

}


const heightToDp = (number) => {

    let givenHeight = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);

}


const listenTpOrientationChanges = ref => {
    Dimensions.addEventListener('change', newDimension => {
        width = newDimension.screen.width;
        height = newDimension.screen.height;

        ref.setState({ orientation: height > width ? 'portrait' : 'landscape' });
    });
}

const removeOrientationChanges = () => {
    Dimensions.removeEventListener('change');
}

const getDynamicStyles = (portratitStyle, landscapeStyle) => {

    const isPortrait = height > width;

    if (isPortrait) {
        return portratitStyle;
    }
    else {
        return landscapeStyle;
    }
}



export {
    widthToDp,
    heightToDp,
    listenTpOrientationChanges,
    removeOrientationChanges,
    getDynamicStyles
};
