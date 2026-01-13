import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { CustomScreenWrapper, HomeMenu } from 'src/components';
import { GUIDE, HOME_BG } from 'src/constants';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={HOME_BG}
      style={styles.background}
      resizeMode="stretch"
    >
      <CustomScreenWrapper>
        <Image source={GUIDE.menu} style={styles.image} resizeMode="contain" />
        <View style={styles.content}>
          <HomeMenu />
        </View>
      </CustomScreenWrapper>
    </ImageBackground>
  );
};

export default HomeScreen;
