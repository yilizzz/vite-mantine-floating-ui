import styled from '@emotion/styled';
import { Props } from './icon.shared';
import { Center } from '@mantine/core';
import { rem } from 'polished';

export const StIcon = styled.img<Props>(({ size }) => [
  {
    width: rem(size),
    height: rem(size),
  },
]);
