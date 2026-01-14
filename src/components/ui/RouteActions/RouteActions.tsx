import React from 'react';
import { Pressable, View } from 'react-native';

import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

interface RouteActionsProps {
  onMarkAsVisited: () => void;
  onNextLocation: () => void;
  isLastStep: boolean;
  isCurrentVisited: boolean;
}

const RouteActions = ({
  onMarkAsVisited,
  onNextLocation,
  isLastStep,
  isCurrentVisited,
}: RouteActionsProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onMarkAsVisited}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <CustomText extraStyle={styles.buttonText}>Mark as visited</CustomText>
      </Pressable>
      <Pressable
        onPress={onNextLocation}
        disabled={isLastStep || !isCurrentVisited}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
          (isLastStep || !isCurrentVisited) && styles.buttonDisabled,
        ]}
      >
        <CustomText extraStyle={styles.buttonText}>Next location</CustomText>
      </Pressable>
    </View>
  );
};

export default RouteActions;
