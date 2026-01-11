import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from 'src/constants';

const ShareIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 16 17" {...props}>
      <Path
        stroke={props.color || COLORS.white}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 2v8.5M11 4 8 1 5 4M1 9v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9"
      ></Path>
    </Svg>
  );
};

export default ShareIcon;
