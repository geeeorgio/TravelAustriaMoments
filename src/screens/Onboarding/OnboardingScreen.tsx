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

const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleContinue = () => {
    navigation.navigate('OnboardingScreen1');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <Image
        source={ONBOARDING.onbd1}
        style={styles.image}
        resizeMode="contain"
      />
      <CustomContainer variant="onboarding" extraStyle={styles.topContainer}>
        <CustomText extraStyle={styles.title}>Discover Austria</CustomText>
        <CustomText extraStyle={styles.description}>
          Explore beautiful locations across Austria — cities, culture, and
          nature — all in one elegant travel guide.
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

export default OnboardingScreen;
