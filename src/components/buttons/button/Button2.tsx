import { Group, Center } from '@mantine/core';
import { StButton } from './Button2.styled';
import { Props } from './Button2.shared';
import email from '@/assets/email.svg';
import * as React from "react"

export const Button2 = React.forwardRef({
  children,
  variant = 'primary',
  size,
  disabled,
  icon,
  radius = 12,
  ...props
}: Props,ref)=> {
  return (
    <StButton
      variant={variant}
      size={size}
      icon={icon}
      disabled={disabled}
      radius={radius}
      {...props}
    >
      {variant === 'icon' ? (
        <Center>
          <img src={email}></img>
        </Center>
      ) : (
        <Center>
          {children}
          <span style={{ width: size === 'small' ? '8px' : '16px' }}></span>
          {icon ? icon : <></>}
        </Center>
      )}
    </StButton>
  );
}

