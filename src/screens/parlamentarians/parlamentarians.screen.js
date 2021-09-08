import React from 'react';
import {SectionList, Text, TouchableOpacity, View} from 'react-native';
import {ChipFilter} from '../../components/chip-filter/chip-filter.component';
import {ParlamentariansListItem} from '../../components/parlamentarians-list-item/parlamentarians-list-item.';
import {SearchBar} from '../../components/searchbar/searchbar';
import parlamentariansStyles from './parlamentarians.styles';
export const ParlamentariansScreen = () => (
  <View style={parlamentariansStyles.container}>
    <SearchBar />
    <ChipFilter />
    <SectionList
      sections={[
        {
          title: 'F',
          data: [
            {
              id: '1-F',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/f/fb/Senador_Fabiano_Contarato.jpg',
              name: 'Fabiano Contarato',
              party: 'REDE',
              state: 'ES',
            },
            {
              id: '2-F',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/4/48/Foto_oficial_de_Fl%C3%A1vio_Bolsonaro_%28v._AgSen%29.jpg',
              name: 'Flávio Bolsonaro',
              party: 'Patriota',
              state: 'RJ',
            },
          ],
        },
        {
          title: 'G',
          data: [
            {
              id: '1-G',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/4/4e/Glauber_Braga_%28PSOL-RJ%29_%28cropped%29.jpg',
              name: 'Glauber Braga',
              party: 'PSOL',
              state: 'RJ',
            },
          ],
        },
        {
          title: 'L',
          data: [
            {
              id: '1-L',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/9/92/Senador_Luis_Carlos_Heinze.jpg',
              name: 'Luiz Carlos Heinze',
              party: 'PP',
              state: 'RS',
            },
          ],
        },
        {
          title: 'M',
          data: [
            {
              id: '1-M',
              image:
                'http://www.senado.gov.br/senadores/img/fotos-oficiais/senador5422.jpg',
              name: 'Marcos Rogério',
              party: 'DEM',
              state: 'RO',
            },
          ],
        },
        {
          title: 'S',
          data: [
            {
              id: '1-S',
              image:
                'http://www.senado.gov.br/senadores/img/fotos-oficiais/senador5527.jpg',
              name: 'Simone Tabet',
              party: 'MDB',
              state: 'MS',
            },
            {
              id: '2-S',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/e/e1/Senadora_Soraya_Thronicke.jpg',
              name: 'Soraya Thronicke',
              party: 'PSL',
              state: 'MS',
            },
          ],
        },
        {
          title: 'T',
          data: [
            {
              id: '1-TS',
              image:
                'https://www.camara.leg.br/internet/deputado/bandep/204534.jpgmaior.jpg',
              name: 'Tabata Amaral',
              party: 'PDT',
              state: 'SP',
            },
          ],
        },
      ]}
      renderItem={({item}) => (
        <TouchableOpacity>
          <ParlamentariansListItem partiamentary={item} />
        </TouchableOpacity>
      )}
      renderSectionHeader={({section}) => (
        <View style={parlamentariansStyles.titleContainer}>
          <Text style={parlamentariansStyles.listTitle}>{section.title}</Text>
        </View>
      )}
      keyExtractor={({id}) => id}
    />
  </View>
);
