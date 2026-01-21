import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: COLORS.transparentBckgd,
  },
  startContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  guideImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  contentOverlay: {
    width: '100%',
    paddingHorizontal: wp(24),
    paddingVertical: hp(24),
    alignItems: 'center',
    gap: hp(24),
    backgroundColor: COLORS.newIndigoContainer,
    borderTopLeftRadius: wp(32),
    borderTopRightRadius: wp(32),
    zIndex: 1,
  },
  textContainer: {
    width: '100%',
    gap: hp(8),
  },
  startTitle: {
    fontSize: sp(15),
    fontFamily: FONTS.Ultra,
  },
  startDescription: {
    fontSize: sp(14),
    opacity: 0.8,
  },
  content: {
    width: '100%',
    gap: hp(16),
  },
  cardContainer: {
    width: '100%',
  },
  mapContainer: {
    width: '100%',
    height: hp(180),
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
