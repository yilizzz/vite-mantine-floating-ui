import { Props } from './FromInput.shared';
import { StTextInput } from './FormInput.styled';

function FormTextInput({ children, placeholder, type = 'text', value, required, ...props }: Props) {
  return (
    <StTextInput required={required} type={type} value={value} placeholder={placeholder} {...props}>
      {children}
    </StTextInput>
  );
}

export default FormTextInput;
