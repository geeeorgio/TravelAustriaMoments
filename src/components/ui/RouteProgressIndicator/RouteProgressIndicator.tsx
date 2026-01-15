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
        const isVisited = visitedIndices.has(index);
        const isCurrent = index === currentIndex;

        return (
          <React.Fragment key={index}>
            <View
              style={[
                styles.circle,
                isVisited && styles.circleVisited,
                isCurrent && !isVisited && styles.circleActive,
              ]}
            >
              <CustomText
                extraStyle={[
                  styles.text,
                  isVisited && styles.textVisited,
                  isCurrent && !isVisited && styles.textActive,
                ]}
              >
                {index + 1}
              </CustomText>
            </View>
            {index < totalSteps - 1 && (
              <View style={[styles.line, isVisited && styles.lineVisited]} />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default RouteProgressIndicator;
