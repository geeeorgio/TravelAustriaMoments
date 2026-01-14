import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  startContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: wp(16),
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(32),
  },
  imageWrapper: {
    width: '100%',
    height: hp(400),
    justifyContent: 'center',
    alignItems: 'center',
  },
  guideImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    gap: hp(12),
  },
  startTitle: {
    fontSize: sp(24),
    fontFamily: FONTS.Ultra,
    textAlign: 'center',
  },
  startDescription: {
    fontSize: sp(14),
    fontFamily: FONTS.MontserratRegular,
    textAlign: 'center',
    opacity: 0.8,
  },
  content: {
    width: '100%',
    paddingHorizontal: wp(16),
    gap: hp(20),
  },
  cardContainer: {
    width: '100%',
  },
  mapContainer: {
    width: '100%',
    height: hp(200),
    borderRadius: wp(16),
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: sp(14),
    fontFamily: FONTS.Ultra,
  },
});
