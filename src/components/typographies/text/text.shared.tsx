import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  variant:
    | 'number'
    | 'frameTitle'
    | 'sectionTitle'
    | 'sectionTitleAlt'
    | 'contentTitle'
    | 'caption'
    | 'captionAlt'
    | 'label'
    | 'footerLink';
  color?: string;
  weight?: string;
  uppercase?: boolean;
  size?: number;
  italic?: boolean;
};
