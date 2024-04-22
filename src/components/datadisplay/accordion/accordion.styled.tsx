import styled from '@emotion/styled';
import { rem } from 'polished';
import { Props } from './accordion.shared';
import { theme } from '@/theme';
import { Group } from '@mantine/core';
import { keyframes } from '@emotion/css';

const slide = keyframes`
  from, 0% to {
    transform: translate3d(0,0,0);
  }

  30% {
    transform: translate3d(-4px,0,0);
  }

  60% {
    transform: translate3d(4px,0,0);
  }

  100% {
    transform: translate3d(0,0,0);
  }
`;

export const StAccordionItem = styled.div<Props>(() => [
  {
    borderBottom: `1px solid ${theme.colors.grayColor[1]}`,
    padding: rem(12),
  },
]);

export const StAccordionTitle = styled(Group)`
  cursor: pointer;

  :hover {
    color: orange;
  }

  &.active {
    font-weight: bold;
  }
`;
export const StAccordionContent = styled.div<Props>(() => [
  {
    color: 'orange',
    animation: `${slide} 1s ease 1`,
  },
]);

export const StAccordionNodata = styled.div<Props>(() => [
  {
    color: theme.colors.grayColor[3],
  },
]);
