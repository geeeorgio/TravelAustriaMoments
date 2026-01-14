import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: sp(15),
    marginBottom: hp(20),
  },
  header: {
    fontSize: sp(15),
    fontFamily: FONTS.Ultra,
  },
  listContainer: {
    width: '100%',
  },
  listContentContainer: {
    paddingBottom: hp(160),
    gap: hp(20),
  },
  completionContainer: {
    width: '100%',
    alignItems: 'center',
  },
  completionImageContainer: {
    width: '100%',
    height: hp(280),
    maxHeight: '45%',
    marginBottom: hp(24),
  },
  completionImage: {
    width: '100%',
    height: '100%',
  },
  completionTextContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: hp(24),
    gap: hp(12),
  },
  completionTitle: {
    fontSize: sp(16),
    fontFamily: FONTS.Ultra,
    textAlign: 'center',
    marginBottom: hp(8),
  },
  completionDescription: {
    fontSize: sp(14),
    textAlign: 'center',
  },
  randomLocationButton: {
    width: '100%',
    paddingVertical: wp(16),
  },
  randomLocationButtonText: {
    fontSize: sp(14),
    fontFamily: FONTS.Ultra,
  },
});
