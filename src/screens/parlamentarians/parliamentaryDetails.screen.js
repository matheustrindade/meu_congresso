import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import parliamentaryDetailsStyles from './parliamentaryDetails.styles';
import {Image} from '../../components/image/image';
import {Separator} from '../../components/ui/separator.component';
import AppStyles from '../../../App.styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
export const ParliamentaryDetails = () => {
  return (
    <ScrollView style={parliamentaryDetailsStyles.container}>
      <View style={parliamentaryDetailsStyles.header}>
        <View style={parliamentaryDetailsStyles.imgBg} />
        <View style={parliamentaryDetailsStyles.imgContainer}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Senador_Fabiano_Contarato.jpg',
            }}
            style={parliamentaryDetailsStyles.img}
            rounded
          />
        </View>
      </View>
      <View style={parliamentaryDetailsStyles.identification}>
        <Text style={parliamentaryDetailsStyles.name}>Fabiano Contarato</Text>
        <View style={AppStyles.row}>
          <Text style={parliamentaryDetailsStyles.commonText}>Senador</Text>
          <Text
            style={[
              parliamentaryDetailsStyles.commonText,
              AppStyles.marginLeftSM,
              AppStyles.marginRightSM,
            ]}>
            -
          </Text>
          <Text style={[parliamentaryDetailsStyles.commonText]}>
            Partido: Rede
          </Text>
        </View>
        <Text style={parliamentaryDetailsStyles.commonText}>
          Estado de eleição: Espirito Santo
        </Text>
        <View style={AppStyles.row}>
          <Text style={parliamentaryDetailsStyles.commonText}>
            Mandato até: 2022
          </Text>
          <Text
            style={[
              parliamentaryDetailsStyles.commonText,
              AppStyles.marginLeftSM,
              AppStyles.marginRightSM,
            ]}>
            -
          </Text>
          <Text style={parliamentaryDetailsStyles.commonText}>
            Pode ser reeleito
          </Text>
          <Icon
            name="check"
            size={20}
            style={parliamentaryDetailsStyles.ableToRunIcon}
          />
        </View>
      </View>
      <Separator />
      <View>
        <Text>sobre</Text>
        <Text>idade</Text>
        <Text>data de nascimento</Text>
        <Text>estado de nascimento</Text>
      </View>
      <Separator />
      <View>
        <Text>Quantidade de votos - última eleição</Text>
      </View>
      <Separator />
      <View>
        <Text>Formação</Text>
      </View>
      <Separator />
      <View>
        <Text>alinhamento com o governo</Text>
      </View>
      <Separator />
      <View>
        <Text>Votos</Text>
      </View>
      <View>
        <Text>Projetos</Text>
      </View>
    </ScrollView>
  );
};
