import React from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import chipFilterStyles from './chip-filter.styles';
export const ChipFilter = (options = []) => {
  return (
    <ScrollView
      style={chipFilterStyles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={chipFilterStyles.content}>
      <TouchableOpacity
        style={[
          chipFilterStyles.chip,
          chipFilterStyles.selected,
          chipFilterStyles.first,
        ]}>
        <Text style={chipFilterStyles.chipText}>todos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[chipFilterStyles.chip]}>
        <Text style={chipFilterStyles.chipText}>deputados</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[chipFilterStyles.chip]}>
        <Text style={chipFilterStyles.chipText}>senadores</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
