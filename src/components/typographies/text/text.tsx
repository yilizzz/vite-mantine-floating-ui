import { Props } from './text.shared';
import { StDiv } from './text.styled';

function Text({
  children,
  variant = 'info',
  color,
  weight,
  uppercase = false,
  // italic = false,
  ...props
}: Props) {
  return (
    <StDiv
      variant={variant}
      color={color}
      weight={weight}
      uppercase={uppercase}
      // italic={italic}
      {...props}
    >
      <span>{children}</span>
    </StDiv>
  );
}

export default Text;
