import { HTMLAttributes, ReactElement } from 'react';

export type Props = HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'inverse' | 'outline' | 'icon';
  icon?: ReactElement;
  disabled?: boolean;
  small?: boolean;
  radius?: 4 | 12;
};
