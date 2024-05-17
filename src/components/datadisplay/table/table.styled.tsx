import styled from '@emotion/styled';
import { Group, Stack } from '@mantine/core';
import { rem } from 'polished';

import { theme } from '@/theme';

export const StTableRoot = styled(Stack)({
  color: theme.colors.greenColor[9],
  fontFamily: 'Muli',
  fontStyle: 'normal',
});

export const StTableHeader = styled.th({
  // textTransform: 'uppercase',
  background: theme.colors.greenColor[2],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const StTable = styled.table({
  textAlign: 'center',
  border: '1px solid rgb(160 160 160)',
  borderRadius: rem(5),
  'tbody > tr:nth-of-type(even)': {
    backgroundColor: theme.colors.greenColor[0],
  },
});

export const StTablePagination = styled(Group)({
  justifyContent: 'space-between',
});

export const StTableInput = styled.input({
  width: '30px',
  border: `1px solid ${theme.colors.greenColor[9]}`,
  borderRadius: '5px',
  textAlign: 'center',
  color: theme.colors.greenColor[9],
});
export const StTableHeaderInput = styled.input({
  border: `1px solid ${theme.colors.greenColor[9]}`,
  borderRadius: '5px',
  textAlign: 'center',
  color: theme.colors.greenColor[9],
});

export const StTablePageInfo = styled(Group)({
  gap: rem(5),
});
export const StTableSelect = styled.select({
  border: `1px solid ${theme.colors.greenColor[9]}`,
  borderRadius: '5px',
  padding: rem(3),
  color: theme.colors.greenColor[9],
});

export const StTableNumberSearchDiv = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: rem(5),
  minWidth: rem(80),
  input: {
    width: '50%',
  },
});
