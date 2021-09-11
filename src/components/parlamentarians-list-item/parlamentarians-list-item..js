import React, {useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Image} from '../image/image';
import parlamentariansListItemStyles from './parlamentarians-list-item.styles';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import IconFoundation from 'react-native-vector-icons/Foundation';
import sizes from '../../utils/theme/sizes.json';
export const ParlamentariansListItem = ({parliamentary = {}}) => {
  const {IconFavourite, isFavourite} = useMemo(() => {
    const favourite = Math.round(Math.random());
    return {
      IconFavourite: favourite ? IconFoundation : IconFA,
      isFavourite: favourite,
    };
  }, []);

  return (
    <View style={[parlamentariansListItemStyles.listItemContainer]}>
      <View style={parlamentariansListItemStyles.imageContainer}>
        <Image source={{uri: parliamentary.image}} rounded />
      </View>
      <View style={parlamentariansListItemStyles.identificationContainer}>
        <Text style={parlamentariansListItemStyles.name}>
          {parliamentary.name}
        </Text>
        <Text style={parlamentariansListItemStyles.role}>
          {parliamentary.role}
        </Text>
        <Text style={parlamentariansListItemStyles.party}>
          {parliamentary.party}-{parliamentary.state}
        </Text>
      </View>
      <View style={parlamentariansListItemStyles.favouriteContainer}>
        <TouchableOpacity>
          <IconFavourite
            style={
              isFavourite
                ? parlamentariansListItemStyles.favourite
                : parlamentariansListItemStyles.notFavourite
            }
            name="heart"
            size={sizes.md + (isFavourite ? sizes.md : sizes.xs)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
