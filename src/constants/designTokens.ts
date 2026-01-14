import { wp } from 'src/utils';

export const DESIGN_TOKENS = {
  borderRadius: {
    xs: wp(8),
    sm: wp(12),
    md: wp(16),
    lg: wp(24),
    xl: wp(32),
    round: wp(999),
  },

  borderWidth: {
    thin: wp(0.5),
    default: wp(1),
    thick: wp(2),
  },

  spacing: {
    xs: wp(4),
    sm: wp(8),
    md: wp(12),
    lg: wp(16),
    xl: wp(20),
    xxl: wp(32),
  },
};
