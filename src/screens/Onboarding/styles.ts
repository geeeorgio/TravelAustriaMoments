import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(44),
    paddingHorizontal: wp(33),
    justifyContent: 'space-between',
  },
  image: {
    position: 'absolute',
    bottom: 0,
    right: -wp(50),
    width: wp(350),
    height: hp(555),
  },
  topContainer: {
    width: '100%',
    padding: wp(16),
    gap: hp(16),
  },
  title: {
    fontSize: sp(16),
    fontFamily: FONTS.Ultra,
  },
  description: {
    fontSize: sp(15),
  },
  button: {
    width: '100%',
    marginBottom: hp(10),
  },
  buttonText: {
    fontSize: sp(16),
    fontFamily: FONTS.Ultra,
    letterSpacing: wp(1),
  },
});
