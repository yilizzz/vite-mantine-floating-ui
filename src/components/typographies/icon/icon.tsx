import { Group } from '@mantine/core';
import { Box } from '@mantine/core';
import { Props } from './icon.shared';
import { StIcon } from './icon.styled';

function Icon({ children, size = 24, color = 'black', bg, badge, ...props }: Props) {
  return (
    <StIcon size={size} color={color} bg={bg} badge={badge} {...props}>
      {children}
    </StIcon>
  );
}

export default Icon;
