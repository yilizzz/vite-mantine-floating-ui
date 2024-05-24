import { Group, Center } from '@mantine/core';
import { StButton } from './Button2.styled';
import { Props } from './Button2.shared';
import mail from '@/assets/email.svg';

function Button2({
  children,
  variant = 'primary',
  size = 'small',
  disabled,
  iconRight,
  radius = 4,
  ...props
}: Props) {
  return (
    <StButton
      variant={variant}
      size={size}
      iconRight={iconRight}
      disabled={disabled}
      radius={radius}
      {...props}
    >
      {variant === 'email' ? (
        <Center>
          <img src={mail}></img>
        </Center>
      ) : (
        <Center>
          {children}
          <span style={{ width: size === 'small' ? '8px' : '16px' }}></span>
          {iconRight ? iconRight : <></>}
        </Center>
      )}
    </StButton>
  );
}

export default Button2;
