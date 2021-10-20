import React, {useCallback} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import parliamentaryDetailsStyles from './parliamentaryDetails.styles';
import {Image} from '../../components/image/image';
import {Separator} from '../../components/ui/separator.component';
import AppStyles from '../../../App.styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import spaces from '../../utils/theme/spaces.json';
import {Spacer, Text} from '../../components/ui';
export const ParliamentaryDetails = () => {
  const openEmailApp = useCallback(() => {
    //assert aqui
  }, []);

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
            size={spaces.md}
            style={parliamentaryDetailsStyles.ableToRunIcon}
          />
        </View>
      </View>
      <Separator />
      <View style={parliamentaryDetailsStyles.section}>
        <Text style={parliamentaryDetailsStyles.sectionTitle}>sobre</Text>
        <Spacer
          orientation="mb-md"
          style={parliamentaryDetailsStyles.sectionInfoContainer}>
          <View style={parliamentaryDetailsStyles.iconContainer}>
            <Icon
              name="birthday-cake"
              size={spaces.md}
              style={parliamentaryDetailsStyles.aboutIcon}
            />
          </View>
          <Spacer orientation="pl-sm" style={parliamentaryDetailsStyles.test}>
            <Text
              style={[
                parliamentaryDetailsStyles.info,
                parliamentaryDetailsStyles.infoText,
                parliamentaryDetailsStyles.infoTitle,
              ]}>
              data de nascimento
            </Text>
            <Text
              style={[
                parliamentaryDetailsStyles.info,
                parliamentaryDetailsStyles.infoText,
              ]}>
              20/06/1966 - 55 anos
            </Text>
          </Spacer>
        </Spacer>
        <Spacer
          orientation="mb-md"
          style={parliamentaryDetailsStyles.sectionInfoContainer}>
          <View style={parliamentaryDetailsStyles.iconContainer}>
            <Icon
              name="globe-americas"
              size={spaces.md}
              style={parliamentaryDetailsStyles.aboutIcon}
            />
          </View>
          <Spacer orientation="pl-sm" style={parliamentaryDetailsStyles.test}>
            <Text
              style={[
                parliamentaryDetailsStyles.info,
                parliamentaryDetailsStyles.infoText,
                parliamentaryDetailsStyles.infoTitle,
              ]}>
              estado de nascimento
            </Text>
            <Text
              style={[
                parliamentaryDetailsStyles.info,
                parliamentaryDetailsStyles.infoText,
              ]}>
              espirito Santo - ES
            </Text>
          </Spacer>
        </Spacer>
        <Spacer
          orientation="mb-md"
          style={parliamentaryDetailsStyles.sectionInfoContainer}>
          <View style={parliamentaryDetailsStyles.iconContainer}>
            <Icon
              name="graduation-cap"
              size={spaces.md}
              style={parliamentaryDetailsStyles.aboutIcon}
            />
          </View>
          <Spacer orientation="pl-sm" style={parliamentaryDetailsStyles.test}>
            <Text
              style={[
                parliamentaryDetailsStyles.info,
                parliamentaryDetailsStyles.infoText,
                parliamentaryDetailsStyles.infoTitle,
              ]}>
              formação
            </Text>
            <Text
              style={[
                parliamentaryDetailsStyles.info,
                parliamentaryDetailsStyles.infoText,
              ]}>
              Direito
            </Text>
          </Spacer>
        </Spacer>
        <TouchableOpacity
          onPress={openEmailApp}
          style={parliamentaryDetailsStyles.sectionInfoContainer}>
          <View style={parliamentaryDetailsStyles.iconContainer}>
            <Icon
              name="at"
              size={spaces.md}
              style={parliamentaryDetailsStyles.aboutIcon}
            />
          </View>
          <Spacer orientation="pl-sm" style={parliamentaryDetailsStyles.test}>
            <Text
              style={[
                parliamentaryDetailsStyles.info,
                parliamentaryDetailsStyles.infoText,
                parliamentaryDetailsStyles.infoTitle,
              ]}>
              contato
            </Text>
            <Text
              style={[
                parliamentaryDetailsStyles.info,
                parliamentaryDetailsStyles.infoText,
              ]}>
              fabiano.contarato@algo.com
            </Text>
          </Spacer>
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
