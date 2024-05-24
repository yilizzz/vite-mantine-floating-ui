import styled from '@emotion/styled';
import { rem } from 'polished';
import { Props } from './Button2.shared';
import { theme } from '@/theme';

export const StButton = styled.button<Props>(({ variant, size, disabled, radius }) => [
  {
    border: 'none',
    cursor: 'pointer',
    border: `${rem(1)} solid ${theme.colors.AGPColor[1]}`,
    borderRadius: radius,
  },
  variant === 'primary' && {
    backgroundColor: theme.colors.AGPColor[5],
    color: theme.colors.AGPColor[1],
  },
  variant === 'secondary' && {
    backgroundColor: theme.colors.AGPColor[0],
    color: theme.colors.AGPColor[5],
  },
  variant === 'tertiary' && {
    backgroundColor: theme.colors.AGPColor[8],
    color: theme.colors.AGPColor[1],
  },

  variant === 'outline' && {
    backgroundColor: theme.colors.AGPColor[0],
    color: theme.colors.AGPColor[9],
    border: `${rem(1)} solid #E2E8F0`,
  },

  variant === 'email' && {
    backgroundColor: theme.colors.AGPColor[5],
    padding: `${rem(20)} ${rem(16)} !important`,
    borderRadius: `${rem(16)} !important`,
    border: 'none',
    boxShadow:
      '14px 25px 8px 0px rgba(66, 81, 155, 0.00), 9px 16px 7px 0px rgba(66, 81, 155, 0.01), 5px 9px 6px 0px rgba(66, 81, 155, 0.05), 2px 4px 5px 0px rgba(66, 81, 155, 0.09), 1px 1px 3px 0px rgba(66, 81, 155, 0.10)',
  },

  size === 'small' && {
    fontFamily: 'Montserrat',
    fontSize: rem(14),
    lineHeight: rem(20),
    fontWeight: '500',
    padding: `${rem(8)} ${rem(16)} !important`,
    borderRadius: `${rem(4)} !important`,
  },

  size === 'large' && {
    fontFamily: 'Montserrat-Medium',
    fontSize: rem(16),
    lineHeight: rem(21),
    padding: radius === 12 ? `${rem(16)} ${rem(24)}` : `${rem(16)} ${rem(16)}`,
  },

  disabled && {
    cursor: 'default',
  },
]);
