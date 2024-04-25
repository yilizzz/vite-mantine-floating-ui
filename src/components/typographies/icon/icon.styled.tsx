import styled from '@emotion/styled';
import { Props } from './icon.shared';
import { Center } from '@mantine/core';
import { rem } from 'polished';

export const StIcon = styled(Center)<Props>(({ badge, size, color, bg }) => [
  {
    borderRadius: rem(5),
    color: color,
    backgroundColor: bg,
    width: rem(1.5 * size),
    height: rem(1.5 * size),
    '> svg': {
      width: rem(size),
      height: rem(size),
    },
  },
  badge && { borderRadius: rem(999) },
]);
