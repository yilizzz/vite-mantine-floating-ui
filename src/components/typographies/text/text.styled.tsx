import styled from '@emotion/styled';
import { Props } from './text.shared';
import { rem } from 'polished';
import { theme } from '@/theme';

export const StDiv = styled.div<Props>(({ variant, color, weight, uppercase }) => [
  {
    flexShrink: 0,
  },
  (variant === 'deco' ||
    variant === 'paragraphTitle' ||
    variant === 'content' ||
    variant === 'paragraphHeading' ||
    variant === 'info' ||
    variant === 'formLabel') && {
    fontFamily: 'Montserrat',
  },

  (variant === 'item' || variant === 'fact' || variant === 'detail') && {
    fontFamily: 'Roboto',
  },
  variant === 'number' && {
    fontFamily: 'Montserrat-Bold',
    color: theme.colors.primaryColor[5],
    fontSize: rem(61),
    lineHeight: rem(73),
    // '@media (min-width: 280px) and (max-width: 639px) and (orientation: portrait)': {
    //   fontSize: rem(30),
    //   fontWeight: '400',
    //   lineHeight: rem(32),
    // },
  },
  variant === 'deco' && {
    color: theme.colors.primaryColor[1],
    fontSize: rem(85),
    fontWeight: '600',
    lineHeight: rem(102),
  },
  variant === 'title' && {
    fontFamily: 'Montserrat-Bold',
    color: color || theme.colors.primaryColor[9],
    fontSize: rem(39),
    lineHeight: rem(47),
    // '@media (min-width: 1536px) and (orientation: portrait)': {
    //   fontSize: rem(25),
    // },
  },

  variant === 'paragraphTitle' && {
    color: color || theme.colors.primaryColor[8],
    fontSize: rem(31),
    fontWeight: weight || '600',
    lineHeight: rem(37),
  },
  variant === 'cardTitle' && {
    fontFamily: 'Montserrat-Bold',
    color: color || theme.colors.primaryColor[5],
    fontSize: rem(25),
    lineHeight: rem(36),
  },

  variant === 'content' && {
    color: color || theme.colors.primaryColor[8],
    fontSize: rem(20),
    fontWeight: '600',
    lineHeight: rem(28),
  },
  variant === 'paragraphHeading' && {
    color: theme.colors.primaryColor[9],
    fontSize: rem(28),
    fontWeight: '600',
    lineHeight: rem(28),
  },
  variant === 'info' && {
    color: color || theme.colors.primaryColor[9],
    fontSize: rem(16),
    fontWeight: weight || '500',
    lineHeight: rem(22),
  },
  variant === 'formLabel' && {
    color: theme.colors.primaryColor[9],
    fontSize: rem(12),
    fontWeight: '600',
    lineHeight: rem(18),
  },

  variant === 'item' && {
    color: color || theme.colors.primaryColor[9],
    fontSize: rem(20),
    fontWeight: weight || '400',
    lineHeight: rem(28),
  },
  variant === 'fact' && {
    color: color || theme.colors.primaryColor[5],
    fontSize: rem(16),
    fontWeight: weight || '400',
    lineHeight: rem(22),
  },
  variant === 'detail' && {
    color: theme.colors.primaryColor[9],
    fontSize: rem(14),
    fontWeight: '400',
    lineHeight: rem(22),
  },
  uppercase && {
    textTransform: 'uppercase',
  },
  // italic && {
  //   italic: true,
  // },
]);
