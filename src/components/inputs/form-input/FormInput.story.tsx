import { Meta, StoryFn } from '@storybook/react';
import { useState, useEffect } from 'react';
import FormInput from './FormInput';

export default {
  title: 'Components/Inputs/FormInput',
  component: FormInput,
} as Meta<typeof FormInput>;

const Template: StoryFn<typeof FormInput> = (args) => {
  const [textValue, setTextValue] = useState('');

  useEffect(() => console.log(textValue), [textValue]);
  return (
    <>
      <FormInput
        {...args}
        value={textValue}
        onChange={(e: any) => setTextValue(e.target.value)}
        id="text"
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = { placeholder: 'Enter username' };
