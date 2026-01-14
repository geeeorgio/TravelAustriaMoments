import React from 'react';
import { ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { CustomText, CustomButton } from 'src/components';
import type { LocationObjectType } from 'src/types';

interface PlaceScrollItemProps {
  location: LocationObjectType;
  onPress: (location: LocationObjectType) => void;
}

const PlaceScrollItem = ({ location, onPress }: PlaceScrollItemProps) => {
  return (
    <ImageBackground
      source={location.list[0].image}
      style={styles.imgContainer}
      resizeMode="stretch"
    >
      <View style={styles.infoContainer}>
        <CustomText extraStyle={styles.infoText}>{location.id}</CustomText>
        <CustomButton
          variant="red"
          extraStyle={styles.infoButton}
          onPress={() => onPress(location)}
        >
          <CustomText extraStyle={styles.infoButtonText}>Choose</CustomText>
        </CustomButton>
      </View>
    </ImageBackground>
  );
};

export default PlaceScrollItem;
