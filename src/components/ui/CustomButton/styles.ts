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
    backgroundColor: COLORS.black,
    borderWidth: wp(1),
    borderColor: COLORS.lightBorder,
    shadowColor: COLORS.blackBckgd,
    elevation: 10,
  },
  overlay: {
    position: 'absolute',
    top: wp(6),
    left: wp(6),
    right: wp(6),
    bottom: wp(6),
    backgroundColor: COLORS.lightDarkerBorder,
    borderRadius: wp(16),
  },
});
