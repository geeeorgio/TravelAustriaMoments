import { StyleSheet } from 'react-native';

import { hp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: sp(16),
    marginBottom: hp(24),
  },
  listContainer: {
    width: '100%',
  },
  listContentContainer: {
    paddingBottom: hp(180),
    gap: hp(20),
  },
});
