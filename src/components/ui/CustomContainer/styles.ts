import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {
    width: '100%',
    borderRadius: wp(10),
  },
  onboarding: {
    backgroundColor: COLORS.liquidBckgd,
    borderWidth: wp(1),
    borderColor: COLORS.lightBorder,
  },
  red: {
    backgroundColor: COLORS.red,
  },
  blue: {
    backgroundColor: COLORS.newBlue,
  },
});
