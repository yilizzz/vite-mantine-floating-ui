import { HTMLAttributes, ReactElement } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  variant?: 'blue' | 'blueLine';
};
