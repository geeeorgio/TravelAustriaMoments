import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import type { HomeMenuName } from 'src/types';
import { HomeMenuNames, type HomeStackNavigationProp } from 'src/types';

const HomeMenu = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();

  const handleNavigate = (name: HomeMenuName) => () => {
    if (name === 'Locations') {
      navigation.navigate('LocationsScreen');
    } else if (name === 'Routes') {
      navigation.navigate('RoutesScreen');
    } else if (name === 'Map') {
      navigation.navigate('MapScreen');
    } else if (name === 'Random place') {
      navigation.navigate('RandomPlaceScreen');
    }
  };

  return (
    <View style={styles.container}>
      {HomeMenuNames.map((name) => (
        <CustomButton variant="red" key={name} onPress={handleNavigate(name)}>
          <CustomText extraStyle={styles.text}>{name}</CustomText>
        </CustomButton>
      ))}
    </View>
  );
};

export default HomeMenu;
