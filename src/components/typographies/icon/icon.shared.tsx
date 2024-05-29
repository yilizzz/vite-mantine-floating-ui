import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLImageElement> & {
  // size?: 8 | 20 | 24 | 32 | 36;
  src?: string;
};
