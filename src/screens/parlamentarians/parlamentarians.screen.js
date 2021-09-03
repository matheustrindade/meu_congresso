import React from 'react';
import {SectionList, Text, TouchableOpacity, View} from 'react-native';
import {ParlamentariansListItem} from '../../components/parlamentarians-list-item/parlamentarians-list-item.';
import parlamentariansStyles from './parlamentarians.styles';
export const ParlamentariansScreen = () => (
  <View style={parlamentariansStyles.container}>
    <SectionList
      sections={[
        {title: 'A', data: ['Alvin']},
        {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
        {
          title: 'J',
          data: [
            'Jackson',
            'James',
            'Jillian',
            'Jimmy',
            'Joel',
            'John',
            'Julie',
          ],
        },
      ]}
      renderItem={({item}) => (
        <TouchableOpacity>
          <ParlamentariansListItem />
        </TouchableOpacity>
      )}
      renderSectionHeader={({section}) => (
        <Text style={{color: 'white'}}>{section.title}</Text>
      )}
      keyExtractor={(_, index) => index}
    />
  </View>
);
