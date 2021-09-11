import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

export const useCheckKeyboardOpened = () => {
  const [isKeyboardOpen, setKeyboardOpened] = useState(false);

  useEffect(() => {
    const keybardShow = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardOpened(true);
    });
    const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOpened(false);
    });

    return () => {
      keyboardHide.remove();
      keybardShow.remove();
    };
  }, []);

  return isKeyboardOpen;
};
