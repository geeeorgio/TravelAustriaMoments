import React from 'react';
import { Image, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import LikeIcon from '../CustomIcons/LikeIcon';
import MapIcon from '../CustomIcons/MapIcon';
import ShareIcon from '../CustomIcons/ShareIcon';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { COLORS } from 'src/constants';
import type { LocationType, RouteType } from 'src/types';
import { handleShare, wp } from 'src/utils';

interface PlaceItemProps {
  item: LocationType | RouteType;
  onOpenPress: (item: LocationType | RouteType) => void;
  onFavouritePress: (item: LocationType | RouteType) => void;
}

const PlaceItem = ({ item, onOpenPress, onFavouritePress }: PlaceItemProps) => {
  const handleSharePress = () => {
    handleShare();
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="stretch" />
        <CustomText extraStyle={styles.imageText}>{item.title}</CustomText>
      </View>

      <View style={styles.content}>
        <CustomText extraStyle={styles.description}>
          {item.description}
        </CustomText>
        <View style={styles.footer}>
          <MapIcon color={COLORS.white} width={wp(16)} height={wp(16)} />
          <CustomText extraStyle={styles.footerText}>
            {item.location}
          </CustomText>
        </View>
        <View style={styles.btnsContainer}>
          <CustomButton
            variant="black"
            onPress={() => {}}
            extraStyle={styles.openBtn}
          >
            <CustomText extraStyle={styles.btnText}>Open</CustomText>
          </CustomButton>
          <View style={styles.smallBtnsContainer}>
            <CustomButton
              onPress={handleSharePress}
              extraStyle={styles.smallBtn}
            >
              <ShareIcon color={COLORS.white} width={wp(16)} height={wp(16)} />
            </CustomButton>
            <CustomButton onPress={() => {}} extraStyle={styles.smallBtn}>
              <LikeIcon color={COLORS.white} width={wp(16)} height={wp(16)} />
            </CustomButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlaceItem;
