import { Image } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { ONBOARDING } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';

const OnboardingScreen3 = () => {
  const { setIsContextOnboardingCompleted } = useGameContext();

  const handleContinue = () => {
    setIsContextOnboardingCompleted(true);
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <Image
        source={ONBOARDING.onbd4}
        style={styles.image}
        resizeMode="contain"
      />
      <CustomContainer variant="onboarding" extraStyle={styles.topContainer}>
        <CustomText extraStyle={styles.title}>
          Travel with Inspiration
        </CustomText>
        <CustomText extraStyle={styles.description}>
          Get a daily travel moment to inspire your journey and enjoy Austria at
          your own pace.
        </CustomText>
      </CustomContainer>

      <CustomButton
        variant="blue"
        extraStyle={styles.button}
        onPress={handleContinue}
      >
        <CustomText extraStyle={styles.buttonText}>Start Exploring</CustomText>
      </CustomButton>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen3;
