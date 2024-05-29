import { Group } from '@mantine/core';
import { Box } from '@mantine/core';
import { Props } from './icon.shared';
import { StIcon } from './icon.styled';
import point from '@/assets/point-blue.svg';

function Icon({ children, src = point, ...props }: Props) {
  return <StIcon src={src} {...props}></StIcon>;
}

export default Icon;
