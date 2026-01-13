import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: hp(30),
  },
  text: {
    fontSize: sp(16),
    fontFamily: FONTS.Ultra,
    letterSpacing: wp(1),
  },
});
