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

const OnboardingScreen2 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleContinue = () => {
    navigation.navigate('OnboardingScreen3');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <Image
        source={ONBOARDING.onbd3}
        style={styles.image}
        resizeMode="contain"
      />
      <CustomContainer variant="onboarding" extraStyle={styles.topContainer}>
        <CustomText extraStyle={styles.title}>Save Your Moments</CustomText>
        <CustomText extraStyle={styles.description}>
          Add your own photos, notes, and favorite places to keep memories of
          every journey.
        </CustomText>
      </CustomContainer>

      <CustomButton
        variant="blue"
        extraStyle={styles.button}
        onPress={handleContinue}
      >
        <CustomText extraStyle={styles.buttonText}>Next</CustomText>
      </CustomButton>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen2;
