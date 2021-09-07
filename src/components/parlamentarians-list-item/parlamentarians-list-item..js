import React from 'react';
import {Text, View} from 'react-native';
import {Image} from '../image/image';
import parlamentariansListItemStyles from './parlamentarians-list-item.styles';

export const ParlamentariansListItem = ({partiamentary = {}}) => {
  return (
    <View style={[parlamentariansListItemStyles.listItemContainer]}>
      <View style={parlamentariansListItemStyles.imageContainer}>
        <Image source={{uri: partiamentary.image}} rounded />
      </View>
      <View style={parlamentariansListItemStyles.identificationContainer}>
        <Text style={parlamentariansListItemStyles.name}>
          {partiamentary.name}
        </Text>
        <Text style={parlamentariansListItemStyles.party}>
          {partiamentary.party}-{partiamentary.state}
        </Text>
      </View>
    </View>
  );
};
