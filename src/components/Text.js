import React from 'react';
import {Text as RNText} from '@rneui/themed';

const Text = ({
  color,
  size,
  italic = false,
  weight,
  align,
  decoration,
  children,
  style,
  wrap,
  ...props
}) => {
  const styles = {
    fontSize: size ? size : 14,
    color: color ? color : 'white',
    ...(italic && {fontStyle: 'italic'}),
    ...(weight && {fontWeight: weight}),
    ...(align && {textAlign: align}),
    ...(decoration && {textDecorationLine: decoration}),
    ...(wrap && {flexWrap: 'wrap'}),
    ...style,
  };
  return (
    <RNText style={styles} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
