import React, {useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {SliderBox} from 'react-native-image-slider-box';
import type {IImageInfo} from 'react-native-image-zoom-viewer/built/image-viewer.type';

import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

const JerseySlider = ({images}: any) => {
  const [openImage, setOpenImage] = useState(false);
  const [previewImage, setPreviewImage] = useState<IImageInfo[]>([]);

  const onClickPreview = (index: number) => {
    setPreviewImage([
      {
        url: '',
        props: {
          source: images[index],
        },
      },
    ]);
    setOpenImage(true);
  };

  const closePreview = () => {
    setOpenImage(false);
    setPreviewImage([]);
  };

  return (
    <View>
      <SliderBox
        images={images}
        circleLoop
        sliderBoxHeight={responsiveHeight(336)}
        ImageComponentStyle={styles.jersey}
        dotColor={colors.primary}
        imageLoadingColor={colors.primary}
        onCurrentImagePressed={(index: number) => onClickPreview(index)}
      />

      <Modal
        visible={openImage}
        transparent={true}
        onRequestClose={() => closePreview()}>
        <ImageViewer
          imageUrls={previewImage}
          backgroundColor={colors.primary}
          onClick={() => closePreview()}
          enableSwipeDown
          onSwipeDown={() => closePreview()}
        />
      </Modal>
    </View>
  );
};

export default JerseySlider;

const styles = StyleSheet.create({
  jersey: {
    marginTop: 25,
    width: responsiveWidth(336),
  },
});
