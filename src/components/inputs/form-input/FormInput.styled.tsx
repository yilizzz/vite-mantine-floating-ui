import styled from '@emotion/styled';
import { rem } from 'polished';

export const StTextInput = styled.input({
  fontFamily: 'Montserrat',
  fontSize: rem(16),
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: rem(24),
  color: 'var(--text-primary)',
  border: '1px solid #CCC',
  borderRadius: rem(8),
  padding: rem(16),
  width: '100%',
  '&:invalid': {
    border: '1px solid red',
  },
});
