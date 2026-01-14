import { useNavigation } from '@react-navigation/native';
import React from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import ArrowIcon from '../CustomIcons/ArrowIcon';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { COLORS } from 'src/constants';
import type { HomeStackNavigationProp } from 'src/types';
import { wp } from 'src/utils';

interface CustomHeaderProps {
  title: string;
  onBackPress: () => void;
  extraTextStyle?: StyleProp<TextStyle>;
}

const CustomHeader = ({
  title,
  onBackPress,
  extraTextStyle,
}: CustomHeaderProps) => {
  const navigation = useNavigation<HomeStackNavigationProp>();

  const handleNavigate = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <CustomButton onPress={handleNavigate} extraStyle={styles.leftButton}>
        <ArrowIcon color={COLORS.white} width={wp(17)} height={wp(17)} />
      </CustomButton>

      <View style={styles.right}>
        <CustomText extraStyle={[styles.title, extraTextStyle]}>
          {title}
        </CustomText>
      </View>
    </View>
  );
};

export default CustomHeader;
