import React from 'react';
import {View, TextInput} from 'react-native';
import searchbarStyles from './searchbar.styles';
import Icons from 'react-native-vector-icons/FontAwesome5';
import sizes from '../../utils/theme/sizes.json';
import {useTheme} from '../../utils/theme';
export const SearchBar = () => {
  const {colors} = useTheme({themeAsObject: true});

  return (
    <View style={searchbarStyles.container}>
      <View style={searchbarStyles.inputContainer}>
        <View style={searchbarStyles.iconContainer}>
          <Icons name={'search'} style={searchbarStyles.icon} size={sizes.md} />
        </View>
        <TextInput
          style={searchbarStyles.inputSearch}
          placeholder="pesquisar"
          selectionColor={colors?.ui.secondary}
        />
      </View>
    </View>
  );
};
