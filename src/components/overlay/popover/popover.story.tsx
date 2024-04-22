import { Meta, StoryFn } from '@storybook/react';
import Popover from './popover';
import { Center } from '@mantine/core';
import { useRef, useState } from 'react';

export default {
  title: 'Components/overlay/popover',
  component: Popover,
  argTypes: {
    position: {
      control: 'select',
      options: [
        'top-start',
        'top-end',
        'right-start',
        'right-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
        'top',
        'right',
        'bottom',
        'left',
      ],
    },
  },
} as Meta<typeof Popover>;

const Template: StoryFn<typeof Popover> = (args) => {
  const [word, setWord] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  console.log(word);
  return (
    <>
      <Center w={50} h={50} style={{ border: '1px solid gray' }}></Center>
      <Center w={1000} h={500} style={{ border: '1px solid gray' }}>
        <Popover
          {...args}
          open={isOpen}
          setOpen={setIsOpen}
          content={
            <>
              <h1>A Word</h1>
              <input
                type="text"
                onChange={(e) => {
                  setWord(e.target.value);
                }}
              ></input>
              <button onClick={() => setIsOpen(false)}>OK</button>
            </>
          }
        >
          <button>click</button>
        </Popover>
      </Center>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
