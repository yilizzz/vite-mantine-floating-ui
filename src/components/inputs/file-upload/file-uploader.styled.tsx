import styled from '@emotion/styled';
import { rem } from 'polished';
import { Props } from './file-uploader.shared';
import { theme } from '@/theme';
import { Group, Stack, Center } from '@mantine/core';
import { keyframes } from '@emotion/css';

export const StFileUploaderRoot = styled.div<Props>(({ variant }) => [
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: rem(30),
    width: '100%',
    padding: rem(20),
    border: `${rem(0.5)} solid ${theme.colors.greenColor[9]}`,
    borderRadius: rem(5),
    color: theme.colors.greenColor[9],
    background: theme.colors.grayColor[0],
    fontSize: rem(16),
  },
  variant === 'row' && {
    flexDirection: 'row',
  },
  variant === 'col' && {
    flexDirection: 'column-reverse',
  },
]);

export const StFileUploaderInfo = styled.div<Props>({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: rem(30),
  padding: rem(12),
  minHeight: rem(200),
  minWidth: rem(200),
});
export const StFileUploaderInfoText = styled(Center)<Props>({
  minHeight: rem(200),
  minWidth: rem(200),
  color: theme.colors.grayColor[5],
});
export const StFileUploaderOperation = styled.div<Props>({
  fontSize: rem(18),
  minHeight: rem(200),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export const StFileUploaderList = styled.ul<Props>({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: rem(10),
  justifyContent: 'center',
  alignItems: 'center',
  li: { listStyleType: 'none' },
});

export const StFileUploaderItem = styled.li<Props>({
  width: '100%',
  display: 'flex',

  flexDirection: 'row',
  gap: rem(10),
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const StFileUploaderDetails = styled.ul<Props>({
  li: { listStyleType: 'none' },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
});
