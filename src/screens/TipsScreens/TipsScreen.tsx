import React, { useState } from 'react';
import { Image, ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomScreenWrapper, CustomText } from 'src/components';
import { GUIDE, TIPS_BG } from 'src/constants';
import type { TipType } from 'src/types';
import { getRandomTip } from 'src/utils/getRandomTip';

const TipsScreen = () => {
  const [currentTip, setCurrentTipContext] = useState<TipType | null>(null);

  const handleGetRandomTip = () => {
    const randomTip = getRandomTip();
    setCurrentTipContext(randomTip);
  };

  return (
    <ImageBackground
      // source={TIPS_BG}
      resizeMode="stretch"
      style={styles.imageBackground}
    >
      <CustomScreenWrapper extraStyle={styles.container}>
        <Image source={GUIDE.tips} style={styles.image} resizeMode="cover" />
        <View style={styles.content}>
          <CustomText extraStyle={styles.title}>
            {currentTip?.title || 'Travel Tip'}
          </CustomText>
          <CustomText extraStyle={styles.description}>
            {currentTip?.description ||
              'Get a random travel tip to inspire your journey and help you enjoy every moment.'}
          </CustomText>
          <CustomButton
            variant="blue"
            onPress={handleGetRandomTip}
            extraStyle={styles.button}
          >
            <CustomText extraStyle={styles.buttonText}>
              {currentTip ? 'Get another tip' : 'Get!'}
            </CustomText>
          </CustomButton>
        </View>
      </CustomScreenWrapper>
    </ImageBackground>
  );
};

export default TipsScreen;
