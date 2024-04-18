import styled from '@emotion/styled';
import { Props } from './icon.shared';
import { Center } from '@mantine/core';
import { rem } from 'polished';
export const StIcon = styled(Center)<Props>(({ badge, size, color, bg }) => [
  `
  border-radius: ${rem(5)};
  width: ${1.5 * size}px;
  height: ${1.5 * size}px;
  color: ${color};
  background-color: ${bg};

  > svg {
    width: ${size}px;
    height: ${size}px;
  }
`,
  badge && { borderRadius: rem(999) },
]);
