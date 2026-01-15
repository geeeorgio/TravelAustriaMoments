import { StyleSheet } from 'react-native';

import { hp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: sp(16),
    marginTop: hp(10),
    marginBottom: hp(20),
  },
  listContainer: {
    width: '100%',
  },
  listContentContainer: {
    paddingBottom: hp(180),
    gap: hp(20),
  },
});
