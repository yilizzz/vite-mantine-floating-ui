import { Group } from '@mantine/core';
import { Box } from '@mantine/core';
import { Props } from './icon2.shared';
import { StIcon } from './icon2.styled';

function Icon2({
  children,
  size = 24,
  color = 'black',
  bg = 'transparent',
  badge,
  ...props
}: Props) {
  return (
    <StIcon size={size} color={color} bg={bg} badge={badge} {...props}>
      {children}
    </StIcon>
  );
}

export default Icon2;
