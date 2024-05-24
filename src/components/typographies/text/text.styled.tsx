import styled from '@emotion/styled';
import { Props } from './text.shared';
import { rem } from 'polished';
import { theme } from '@/theme';

export const StDiv = styled.div<Props>(({ variant, color, weight, uppercase, size, italic }) => [
  {
    flexShrink: 0,
  },
  (variant === 'deco' ||
    variant === 'paragraphTitle' ||
    variant === 'content' ||
    variant === 'paragraphHeading' ||
    variant === 'formLabel') && {
    fontFamily: 'Montserrat',
  },

  variant === 'number' && {
    fontFamily: 'Montserrat-Bold',
    color: theme.colors.AGPColor[5],
    fontSize: rem(61),
    lineHeight: rem(73),
    // '@media (min-width: 280px) and (max-width: 639px) and (orientation: portrait)': {
    //   fontSize: rem(30),
    //   fontWeight: '400',
    //   lineHeight: rem(32),
    // },
  },
  variant === 'deco' && {
    color: theme.colors.AGPColor[1],
    fontSize: rem(85),
    fontWeight: '600',
    lineHeight: rem(102),
  },
  variant === 'title' && {
    fontFamily: 'Montserrat-Bold',
    color: color || theme.colors.AGPColor[9],
    fontSize: rem(39),
    lineHeight: rem(47),
    // '@media (min-width: 1536px) and (orientation: portrait)': {
    //   fontSize: rem(25),
    // },
  },

  variant === 'paragraphTitle' && {
    color: color || theme.colors.AGPColor[8],
    fontSize: rem(31),
    fontWeight: weight || '600',
    lineHeight: rem(37),
  },
  variant === 'cardTitle' && {
    fontFamily: 'Montserrat-Bold',
    color: color || theme.colors.AGPColor[5],
    fontSize: rem(25),
    lineHeight: rem(36),
  },

  variant === 'content' && {
    color: color || theme.colors.AGPColor[8],
    fontSize: rem(20),
    fontWeight: '600',
    lineHeight: rem(28),
  },
  variant === 'paragraphHeading' && {
    color: theme.colors.AGPColor[9],
    fontSize: rem(28),
    fontWeight: '600',
    lineHeight: rem(28),
  },
  variant === 'info' && {
    fontFamily:
      weight === '400'
        ? 'Montserrat'
        : weight === '500'
          ? 'Montserrat-Medium'
          : 'Montserrat-SemiBold',
    color: color || theme.colors.AGPColor[9],
    fontSize: rem(16),
    lineHeight: rem(21),
  },
  variant === 'formLabel' && {
    color: theme.colors.AGPColor[0],
    fontSize: rem(12),
    fontWeight: '600',
    lineHeight: rem(18),
  },

  variant === 'item' && {
    fontFamily: weight === '400' ? 'Roboto' : weight === '300' ? 'Roboto-Light' : 'Roboto-Bold',
    color: color || theme.colors.AGPColor[9],
    fontSize: size ? rem(size) : rem(20),
    lineHeight: rem(28),
  },
  variant === 'fact' && {
    fontFamily: weight === '700' ? 'Roboto-Bold' : 'Roboto',
    color: color || theme.colors.AGPColor[5],
    fontSize: rem(16),
    fontWeight: weight || '400',
    lineHeight: rem(22),
  },
  variant === 'detail' && {
    fontFamily: 'Roboto',
    color: theme.colors.AGPColor[9],
    fontSize: rem(14),
    fontWeight: '400',
    lineHeight: rem(22),
  },
  uppercase && {
    textTransform: 'uppercase',
  },
  italic && {
    fontStyle: 'italic',
  },
]);
