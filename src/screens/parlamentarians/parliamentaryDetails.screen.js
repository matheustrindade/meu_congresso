import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
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
      <View style={parliamentaryDetailsStyles.section}>
        <Text style={parliamentaryDetailsStyles.sectionTitle}>sobre</Text>
        <View>
          <Icon
            name="birthday-cake"
            size={20}
            style={parliamentaryDetailsStyles.aboutIcon}
          />
          <Text>data de nascimento</Text>
          <Text>46 anos</Text>
        </View>
        <View>
          <Icon
            name="globe-americas"
            size={20}
            style={parliamentaryDetailsStyles.aboutIcon}
          />
          <Text>estado de nascimento</Text>
        </View>
        <View>
          <Icon
            name="graduation-cap"
            size={20}
            style={parliamentaryDetailsStyles.aboutIcon}
          />
          <Text>Formação</Text>
        </View>
        <TouchableOpacity>
          <Icon
            name="at"
            size={20}
            style={parliamentaryDetailsStyles.aboutIcon}
          />
          <Text>contato</Text>
        </TouchableOpacity>
      </View>
      <View style={parliamentaryDetailsStyles.section}>
        <View>
          <Text>Votos</Text>
        </View>
        <View>
          <Text>Projetos</Text>
        </View>
      </View>
      <View style={parliamentaryDetailsStyles.section}>
        <Text>Quantidade de votos - última eleição</Text>
      </View>
      <View style={parliamentaryDetailsStyles.section}>
        <Text>alinhamento com o governo</Text>
      </View>
      <Separator />
    </ScrollView>
  );
};
