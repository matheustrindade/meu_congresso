import React, {useCallback, useState} from 'react';
import {Animated, View, TextInput, Keyboard} from 'react-native';
import inputStyles from './input.styles';
import {Text} from './text.component';
export const Input = ({
  label,
  icon,
  onClickIcon,
  onBlur,
  onFocus,
  onChangeText,
  ...props
}) => {
  const [labelWidth, setLabelWidth] = useState(0);
  const [labelTop, setLabelTop] = useState(false);
  const [fieldValue, setFieldValue] = useState('');

  const handleBlur = useCallback(
    e => {
      if (!fieldValue) {
        setLabelTop(false);
      }
      onBlur && onBlur(e);
    },
    [onBlur, fieldValue],
  );

  const handleFocus = useCallback(
    e => {
      setLabelTop(true);
      onFocus && onFocus(e);
    },
    [onFocus],
  );

  const handleChangeText = useCallback(
    text => {
      setFieldValue(text);
      onChangeText && onChangeText(text);
    },
    [onChangeText],
  );

  return (
    <View style={inputStyles.container(labelWidth)}>
      {!!label && (
        <Animated.View
          style={inputStyles.labelContainer(labelTop)}
          onLayout={event => {
            let {width} = event.nativeEvent.layout;
            setLabelWidth(width);
          }}>
          <Text style={inputStyles.label} size="body" family="body">
            {label}
          </Text>
        </Animated.View>
      )}
      <TextInput
        {...props}
        style={inputStyles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onEndEditing={() => console.log('onEditEnding')}
        onSubmitEditing={Keyboard.dismiss}
        onChangeText={handleChangeText}
        value={fieldValue}
      />
    </View>
  );
};
