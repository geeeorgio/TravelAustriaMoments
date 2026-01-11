import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from 'src/constants';

const ArrowIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 9 18" {...props}>
      <Path
        fill={props.color || COLORS.white}
        d="M7.84.213.209 8.457A.8.8 0 0 0 0 8.998c0 .203.075.397.209.542l7.63 8.247a.642.642 0 0 0 .96 0A.76.76 0 0 0 9 17.269a.76.76 0 0 0-.2-.518L1.624 8.998 8.8 1.248A.76.76 0 0 0 9 .73a.76.76 0 0 0-.2-.518.641.641 0 0 0-.96 0"
      ></Path>
    </Svg>
  );
};

export default ArrowIcon;
