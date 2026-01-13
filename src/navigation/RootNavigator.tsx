import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainStack from './MainStack';
import OnboardingStack from './OnboardingStack';

import { useGameContext } from 'src/hooks/useGameContext';
import type { RootStackParamList } from 'src/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { isContextOnboardingCompleted } = useGameContext();
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        gestureEnabled: false,
        animation: 'fade',
      }}
    >
      {!isContextOnboardingCompleted ? (
        <RootStack.Screen name="OnboardingStack" component={OnboardingStack} />
      ) : (
        <RootStack.Screen name="MainStack" component={MainStack} />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
