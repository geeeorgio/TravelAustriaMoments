import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(16),
    borderRadius: wp(20),
    overflow: 'hidden',
  },
  red: {
    backgroundColor: COLORS.red,
    shadowColor: COLORS.red,
    elevation: 10,
  },
  black: {
    backgroundColor: COLORS.blackBckgd,
    borderWidth: wp(1),
    borderColor: COLORS.newIndigoCard2,
  },
  blue: {
    backgroundColor: COLORS.newIndigoCard,
    borderWidth: wp(1),
    borderColor: COLORS.newIndigoLightBorder,
  },
  overlay: {
    position: 'absolute',
    top: wp(4),
    left: wp(4),
    right: wp(4),
    bottom: wp(4),
    backgroundColor: COLORS.lightDarkerBorder,
    borderRadius: wp(16),
  },
});
