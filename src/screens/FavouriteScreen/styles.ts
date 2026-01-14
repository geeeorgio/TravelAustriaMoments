import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    paddingTop: hp(24),
    alignItems: 'center',
  },
  title: {
    fontSize: sp(16),
    marginBottom: hp(20),
  },
  noFavouritesContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(12),
  },
  noFavouritesText: {
    fontSize: sp(15),
    opacity: 0.65,
  },
  searchButton: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    fontSize: sp(14),
    fontFamily: FONTS.Ultra,
  },
  capibaraContainer: {
    marginTop: hp(80),
    alignItems: 'center',
  },
  capibaraImage: {
    width: wp(160),
    height: hp(90),
  },
  capibaraDotsContainer: {
    flexDirection: 'row',
    gap: wp(6),
    marginLeft: wp(40),
  },
  capibaraDot: {
    width: wp(8),
    height: wp(6),
    backgroundColor: COLORS.brown,
  },
});
