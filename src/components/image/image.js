import React from 'react';
import {Image as ImageRN} from 'react-native';
import imageStyles from './image.styles';
export const Image = ({style, rounded, ...otherProps}) => {
  return <ImageRN style={imageStyles(rounded).image} {...otherProps} />;
};
