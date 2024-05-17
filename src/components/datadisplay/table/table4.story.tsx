import { Meta, StoryFn } from '@storybook/react';

import { useState, useRef } from 'react';
import { TableRoot, TableCol } from './table4';
import { Activity, Bean, Banana } from 'lucide-react';

import { defaultData } from './table.shared';

export default {
  title: 'Components/datadisplay/table/Table4',
  component: TableRoot,
} as Meta<typeof TableRoot>;

const Template: StoryFn<typeof TableRoot> = (args) => {
  return (
    <TableRoot {...args} data={defaultData}>
      <TableCol label="First Name" dataKey="firstName"></TableCol>
      <TableCol label="Last Name" dataKey="lastName"></TableCol>
      <TableCol label="Age" dataKey="age">
        <Bean />
      </TableCol>
      <TableCol label="OP" dataKey="id" display={true}>
        <button>OP</button>
      </TableCol>
    </TableRoot>
  );
};

export const Default = Template.bind({});
Default.args = {};
