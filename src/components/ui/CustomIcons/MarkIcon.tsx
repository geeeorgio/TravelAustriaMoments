import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from 'src/constants';

const MarkIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 21 27" {...props}>
      <Path
        fill={props.color || COLORS.white}
        d="M18 0H3A2.996 2.996 0 0 0 .015 3L0 27l10.5-4.5L21 27V3c0-1.65-1.35-3-3-3"
      ></Path>
    </Svg>
  );
};

export default MarkIcon;
