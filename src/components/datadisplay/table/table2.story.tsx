import { Meta, StoryFn } from '@storybook/react';

import { useState, useRef } from 'react';
import Table2 from './table2';
import { defaultData } from './table.shared';

export default {
  title: 'Components/datadisplay/table/Table2',
  component: Table2,
} as Meta<typeof Table2>;

const Template: StoryFn<typeof Table2> = (args) => {
  return (
    <div>
      <Table2 {...args} data={defaultData} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
