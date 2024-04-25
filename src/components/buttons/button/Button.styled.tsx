import styled from '@emotion/styled';
import { rem } from 'polished';
import { Props } from './Button.shared';
import { theme } from '@/theme';

export const StButton = styled.button<Props>(({ variant, size, disabled, squared }) => [
  {
    color: '#FFFFFF',
    fontFamily: 'Muli',
    fontStyle: 'normal',
    border: 'none',
    cursor: 'pointer',
  },
  (variant === 'primary' ||
    variant === 'secondary' ||
    variant === 'destructive' ||
    variant === 'outline' ||
    variant === 'ghost') && {
    borderRadius: rem(8),
  },
  variant === 'primary' && {
    backgroundColor: theme.colors.greenColor[9],
  },
  variant === 'secondary' && {
    backgroundColor: theme.colors.greenColor[6],
  },
  variant === 'destructive' && {
    backgroundColor: theme.colors.redColor[9],
  },

  variant === 'outline' && {
    backgroundColor: 'transparent',
    color: theme.colors.greenColor[9],
    border: `1px solid ${theme.colors.greenColor[9]}`,
  },

  variant === 'ghost' && {
    backgroundColor: 'transparent',
    color: theme.colors.greenColor[9],
    ':hover': {
      backgroundColor: theme.colors.greenColor[0],
    },
  },

  variant === 'link' && {
    backgroundColor: 'transparent',
    color: theme.colors.greenColor[9],
    textUnderlineOffset: rem(5),
    ':hover': {
      textDecoration: 'underline',
    },
  },

  size === 'small' && {
    fontSize: rem(12),
    fontWeight: 300,
    lineHeight: rem(16),
    padding: `${rem(5)} ${rem(12)}`,
  },
  size === 'medium' && {
    fontSize: rem(16),
    fontWeight: 500,
    lineHeight: rem(20),
    padding: `${rem(5)} ${rem(12)}`,
  },
  size === 'large' && {
    fontSize: rem(20),
    fontWeight: 700,
    lineHeight: rem(24),
    padding: `${rem(8)} ${rem(15)}`,
  },

  disabled && {
    cursor: 'default',
    backgroundColor: theme.colors.grayColor[5],
    color: theme.colors.grayColor[0],
  },

  squared && { padding: rem(5) },
]);
