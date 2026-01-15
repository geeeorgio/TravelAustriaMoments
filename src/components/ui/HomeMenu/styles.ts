import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: hp(24),
  },
  text: {
    fontSize: sp(15),
    fontFamily: FONTS.Ultra,
    letterSpacing: wp(1),
  },
});
