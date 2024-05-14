import { Meta, StoryFn } from '@storybook/react';

import { useState, useRef } from 'react';
import Table from './table';
import { defaultData } from './table.shared';

export default {
  title: 'Components/datadisplay/table/Table',
  component: Table,
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = (args) => {
  return (
    <div>
      <Table {...args} tableData={defaultData} sortKey="age" pageSize={5} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
