import styled from '@emotion/styled';
import { rem } from 'polished';
import { Props } from './breadcrumb.shared';
import { theme } from '@/theme';
import { Group, Stack, Center } from '@mantine/core';
import { keyframes } from '@emotion/css';

const slide = keyframes`
  from, 0% to {
    transform: translate3d(0,0,0);
  }

  50% {
    transform: translate3d(0,10px,0);
  }

  100% {
    transform: translate3d(0,0,0);
  }
`;

export const StBreadcrumb = styled.div<Props>`
  color: orangered;
  font-size: ${rem(18)};

  a {
    color: ${theme.colors.greenColor[8]};
    text-decoration: none;
    padding: 0 ${rem(5)};
  }
`;

export const StBreadcrumbLink = styled.a<Props>`
  &.active {
    color: orangered;
  }
`;
export const StBreadcrumbRoot = styled(Group)<Props>(() => [
  {
    position: 'relative',
  },
]);
export const StBreadcrumbPoints = styled(Center)<Props>`
  cursor: pointer;
  padding: ${rem(5)};
`;
export const StBreadcrumbMenu = styled(Stack)<Props>`
  position: absolute;
  top: ${rem(30)};
  left: ${rem(50)};
  animation: ${slide} 1s ease 1;
  a {
    color: ${theme.colors.greenColor[8]};
    text-decoration: none;
  }
`;
