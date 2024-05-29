import { HTMLAttributes } from 'react';
export type Props = HTMLAttributes<HTMLSelectElement> & {
  options?: number[];
  value?: number;
  variant?: string;
};
