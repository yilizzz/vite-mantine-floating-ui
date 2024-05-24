import { HTMLAttributes, ReactElement } from 'react';

export type Props = HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'email';
  iconRight?: ReactElement;
  disabled?: boolean;
  size?: 'small' | 'large';
  radius?: 4 | 12;
};
