import styled from '@emotion/styled';
import { rem } from 'polished';
import { theme } from '@/theme';
import { Group, Stack } from '@mantine/core';

export const StAccordionRoot = styled(Stack)({
  padding: rem(12),
});

export const StAccordionItem = styled(Stack)({
  borderBottom: `1px solid ${theme.colors?.grayColor[2]}`,
  padding: rem(12),
});
export const StAccordionContent = styled.div({
  padding: rem(12),
});

export const StAccordionHeader = styled(Group)({
  cursor: 'pointer',
  color: theme.colors.greenColor[9],
  ':hover': { color: theme.colors.greenColor[6], fontWeight: 'bold' },
});
