import styled from '@emotion/styled';
import { rem } from 'polished';
import { Props } from './Button2.shared';

export const StButton = styled.button<Props>(({ variant, small, disabled, radius }) => [
  {
    fontFamily: 'Montserrat-Medium',
    fontSize: rem(16),
    lineHeight: rem(21),
    padding: `${rem(16)} ${rem(24)}`,
    border: ` ${rem(1)} solid var(--button-text)`,
    borderRadius: radius,
  },
  variant === 'primary' && {
    backgroundColor: 'var(--button-primary)',
    color: 'var(--button-text)',
  },
  variant === 'secondary' && {
    backgroundColor: 'var(--button-secondary)',
    color: 'var(--button-text)',
  },
  variant === 'inverse' && {
    backgroundColor: 'white',
    color: 'var(--button-primary)',
  },

  variant === 'outline' && {
    backgroundColor: 'white',
    color: 'var(--button-secondary)',
    // border: `${rem(1)} solid #E2E8F0`,
  },

  variant === 'icon' && {
    backgroundColor: 'var(--button-primary)',
    padding: `${rem(20)} ${rem(16)} !important`,
    borderRadius: `${rem(16)} !important`,
    border: 'none',
    boxShadow:
      '14px 25px 8px 0px rgba(66, 81, 155, 0.00), 9px 16px 7px 0px rgba(66, 81, 155, 0.01), 5px 9px 6px 0px rgba(66, 81, 155, 0.05), 2px 4px 5px 0px rgba(66, 81, 155, 0.09), 1px 1px 3px 0px rgba(66, 81, 155, 0.10)',
  },

  small && {
    fontFamily: 'Montserrat',
    fontSize: rem(14),
    lineHeight: rem(20),
    fontWeight: '500',
    padding: `${rem(8)} ${rem(16)} !important`,
    borderRadius: `${rem(4)} !important`,
  },

  disabled && {
    backgroundColor: 'gray',
    cursor: 'default',
  },
]);
