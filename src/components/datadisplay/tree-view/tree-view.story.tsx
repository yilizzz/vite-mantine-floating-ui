import { Meta, StoryFn } from '@storybook/react';
import { useState, ReactElement } from 'react';
import { TreeView } from './tree-view';
import Button from '@/components/buttons/button/Button';

export default {
  title: 'Components/datadisplay/tree-view',
  component: TreeView,
} as Meta<typeof TreeView>;

export const SomeComponent: React.FC<ReactElement> = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)}></input>
      <Button onClick={() => alert(value)}>Click</Button>
    </>
  );
};

const Template: StoryFn<typeof TreeView> = (args) => {
  let data = {
    food: {
      vegetable: 'vegetables green',
      meat: {
        chicken: 'happy chicken',
        'red-meat': {
          pork: 'tender pork',
          beef: 'grass feeding beef',
        },
      },
      fruit: {
        strawberry: 'May strawberry',
        peach: 'yellow peach',
      },
    },
    sport: {
      football: 'football',
    },
  };
  return <TreeView data={data} name="data" />;
};

export const Default = Template.bind({});
Default.args = {};
