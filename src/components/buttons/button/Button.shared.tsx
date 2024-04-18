import { HTMLAttributes, ReactElement } from 'react';

export type Props = HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link';
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  squared: boolean;
};
