import styled from '@emotion/styled';
import { rem } from 'polished';
import { Props } from './popover.shared';
import { theme } from '@/theme';

export const StPopoverContent = styled.div<Props>(() => [
  { border: '1px solid gray', padding: rem(12), borderRadius: rem(5) },
]);
