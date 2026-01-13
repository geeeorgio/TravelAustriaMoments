import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { ONBOARDING } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnboardingScreen1 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleContinue = () => {
    navigation.navigate('OnboardingScreen2');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <Image
        source={ONBOARDING.onbd2}
        style={styles.image}
        resizeMode="contain"
      />
      <CustomContainer variant="onboarding" extraStyle={styles.topContainer}>
        <CustomText extraStyle={styles.title}>Plan Your Journey</CustomText>
        <CustomText extraStyle={styles.description}>
          Choose ready-made routes or create your own path using curated
          locations and offline maps.
        </CustomText>
      </CustomContainer>

      <CustomButton
        variant="red"
        extraStyle={styles.button}
        onPress={handleContinue}
      >
        <CustomText extraStyle={styles.buttonText}>Next</CustomText>
      </CustomButton>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen1;
