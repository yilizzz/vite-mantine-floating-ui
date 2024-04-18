import styled from '@emotion/styled';
import { Center } from '@mantine/core';
import { rem } from 'polished';
import { Props } from './popover.shared';
import { theme } from '@/theme';

export const StDiv = styled.div<Props>(() => [
  { border: '1px solid gray', padding: rem(12), borderRadius: rem(5) },
]);
