import React from 'react';
import { View } from 'react-native';

import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

interface RouteProgressIndicatorProps {
  totalSteps: number;
  currentIndex: number;
  visitedIndices: Set<number>;
}

const RouteProgressIndicator = ({
  totalSteps,
  currentIndex,
  visitedIndices,
}: RouteProgressIndicatorProps) => {
  if (totalSteps === 0) return null;

  return (
    <View style={styles.wrapper}>
      {Array.from({ length: totalSteps }, (_, index) => {
        const isCompletedStep = visitedIndices.has(index);
        const isCurrent = index === currentIndex;

        return (
          <React.Fragment key={index}>
            <View
              style={[
                styles.circle,
                isCompletedStep && !isCurrent && styles.circleVisited,
                isCurrent && styles.circleActive,
              ]}
            >
              <CustomText
                extraStyle={[
                  styles.text,
                  isCompletedStep && !isCurrent && styles.textVisited,
                  isCurrent && styles.textActive,
                ]}
              >
                {index + 1}
              </CustomText>
            </View>
            {index < totalSteps - 1 && (
              <View
                style={[styles.line, isCompletedStep && styles.lineVisited]}
              />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default RouteProgressIndicator;
