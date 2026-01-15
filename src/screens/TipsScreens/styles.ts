import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  imageBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    bottom: hp(130),
    right: 0,
    width: wp(350),
    height: hp(555),
  },
  content: {
    width: '100%',
    backgroundColor: COLORS.tipsBckgd,
    borderTopLeftRadius: wp(40),
    borderTopRightRadius: wp(40),
    padding: wp(20),
    gap: hp(16),
  },
  title: {
    fontSize: sp(15),
    fontFamily: FONTS.Ultra,
  },
  description: {
    fontSize: sp(15),
  },
  button: {
    width: '100%',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: sp(15),
    fontFamily: FONTS.Ultra,
  },
});
