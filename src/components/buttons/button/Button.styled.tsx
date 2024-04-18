import styled from '@emotion/styled';
import { rem } from 'polished';
import { Props } from './Button.shared';
import { theme } from '@/theme';

export const StButton = styled.button<Props>(({ variant, size, disabled, squared }) => [
  `
    color: #FFFFFF;
    font-family: 'Muli';
    font-style: normal;
    border:none;
    cursor:pointer;
   
    `,
  (variant === 'primary' ||
    variant === 'secondary' ||
    variant === 'destructive' ||
    variant === 'outline' ||
    variant === 'ghost') &&
    `
      border-radius:  ${rem(8)};
       
    `,
  variant === 'primary' && `background-color: ${theme.colors.greenColor[9]};`,
  variant === 'secondary' && `background-color:  ${theme.colors.greenColor[6]};`,
  variant === 'destructive' && `background-color: ${theme.colors.redColor[9]};`,

  variant === 'outline' &&
    `background-color: transparent; 
    color: ${theme.colors.greenColor[9]}; 
    border:1px solid ${theme.colors.greenColor[9]}`,

  variant === 'ghost' &&
    `background-color: transparent; 
    color: ${theme.colors.greenColor[9]}; 
    :hover{
        background-color:  ${theme.colors.greenColor[0]};
    }`,

  variant === 'link' &&
    `
    background-color: transparent; 
    color: ${theme.colors.greenColor[9]}; 
    text-underline-offset: ${rem(5)};
    :hover{
        text-decoration: underline;
    }`,

  size === 'small' &&
    `
    font-size: ${rem(12)};
    font-weight: 300;
    line-height: ${rem(16)};
    padding: ${rem(5)} ${rem(8)};
      `,
  size === 'medium' &&
    `
    font-size: ${rem(16)};
    font-weight: 500;
    line-height: ${rem(20)};
    padding: ${rem(5)} ${rem(12)};
      `,
  size === 'large' &&
    `
    font-size: ${rem(20)};
    font-weight: 700;
    line-height: ${rem(24)};
    padding: ${rem(8)} ${rem(15)};
      `,

  disabled &&
    `
    cursor: default;
    background-color:  ${theme.colors.grayColor[5]};
    color:  ${theme.colors.grayColor[0]};
      `,

  squared &&
    `
      padding:${rem(5)}
    `,
]);
