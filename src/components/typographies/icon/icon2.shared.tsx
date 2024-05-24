import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  color?: string;
  bg?: string;
  size?: number;
  badge?: boolean;
};
