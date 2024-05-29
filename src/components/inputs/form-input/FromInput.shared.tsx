import { HTMLAttributes } from 'react';
export type Props = HTMLAttributes<HTMLInputElement> & {
  type?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
};
