import { Meta, StoryFn } from '@storybook/react';
import Popover from './popover';
import { Center } from '@mantine/core';
import { useRef, useState } from 'react';

export default {
  title: 'Components/overlay/popover',
  component: Popover,
} as Meta<typeof Popover>;

const word = () => {
  return (
    <>
      <h1>A Word</h1>
      <input type="text"></input>
      <button>OK</button>
    </>
  );
};

const Template: StoryFn<typeof Popover> = (args) => {
  const [word, setWord] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  console.log(word);
  return (
    <Center w={500} h={500} style={{ border: '1px solid gray' }}>
      <Popover
        {...args}
        open={isOpen}
        setOpen={setIsOpen}
        position="top"
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
        <button>Click</button>
      </Popover>
    </Center>
  );
};

export const Default = Template.bind({});
Default.args = {};
