import React from 'react';
import {View} from 'react-native';
import {Button} from '../../components/ui/button.component';
import {Input} from '../../components/ui/input.component';
import {Spacer} from '../../components/ui/spacer.component';
import loginStyles from './login.styles';

export const Login = () => {
  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.inputSection}>
        <View style={loginStyles.inputContainer}>
          <Input label="email" />
        </View>
        <Spacer orientation="mt-lg" style={loginStyles.inputContainer}>
          <Input label="senha" />
        </Spacer>
        <Spacer orientation="mt-lg" style={loginStyles.inputContainer}>
          <Button>acessar</Button>
        </Spacer>
      </View>
    </View>
  );
};
