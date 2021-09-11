import React, {useMemo} from 'react';
import {Image as ImageRN} from 'react-native';
import imageStyles from './image.styles';
export const Image = ({style, rounded, ...otherProps}) => {
  const styleProps = useMemo(() => {
    if (!style) {
      return [];
    }
    if (Array.isArray(style)) {
      return style;
    } else if (typeof style === 'object') {
      return [style];
    } else {
      return [];
    }
  }, [style]);

  return (
    <ImageRN
      style={[imageStyles(rounded).image, ...styleProps]}
      {...otherProps}
    />
  );
};
