import styled from '@emotion/styled';
import { rem } from 'polished';
import { theme } from '@/theme';
import { Group, Stack } from '@mantine/core';

export const StTreeRoot = styled.div({
  '&.tree-element': {
    position: 'relative',
    display: 'block',
  },
  '&.collapsed': {
    display: 'none',
  },
});

export const StTreeBranchNode = styled.div({
  // '&.open': {
  //   display: 'block',
  // },
  // '&.close': {
  //   display: 'none',
  // },
});
export const StTreeBranchNodeControl = styled.div({
  '&.toggler': {
    position: 'absolute',
    top: '10px',
    left: '0px',
    width: '0',
    height: '0',
    borderTop: '8px solid transparent',
    borderBottom: '8px solid transparent',
    borderLeft: '8px solid gray',
    cursor: 'pointer',
  },
  '&.toggler.closed': {
    transform: 'rotate(90deg)',
  },
});

export const StTreeNode = styled.div({});
