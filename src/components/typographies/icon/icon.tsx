import { Group } from '@mantine/core';
import { Box } from '@mantine/core';
import { Props } from './icon.shared';
import { StIcon } from './icon.styled';
import point from '@/assets/point-blue.svg';

function Icon({ children, size = 8, src = point, ...props }: Props) {
  return (
    <StIcon size={size} src={size === 8 ? point : src} {...props}>
      {/* <img src={src}></img> */}
    </StIcon>
  );
}

export default Icon;
