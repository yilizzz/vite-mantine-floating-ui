import { Meta, StoryFn } from '@storybook/react';

import { useState, useRef } from 'react';
import { TableRoot, TableCol } from './table';
import { Activity, Bean, Banana } from 'lucide-react';
import Button from '@/components/buttons/button/Button';

import { defaultData } from './table.shared';

export default {
  title: 'Components/datadisplay/table/Table',
  component: TableRoot,
} as Meta<typeof TableRoot>;

const Template: StoryFn<typeof TableRoot> = (args) => {
  const handleEdit = (value) => {
    console.log('You are going to edit item : ', value);
  };
  const handleDelete = (value) => {
    console.log('You are going to delete item : ', value);
  };
  const RowAction = (row) => {
    return (
      <>
        <Button onClick={() => handleEdit(row)}>Edit</Button>
        <Activity />
        <Button onClick={() => handleDelete(row)}>Delete</Button>
      </>
    );
  };
  return (
    <TableRoot {...args} data={defaultData}>
      <TableCol label="First Name" dataKey="firstName" />
      <TableCol label="Last Name" dataKey="lastName" />
      <TableCol label="Age" dataKey="age" />
      <TableCol label="Action" display rowAction={RowAction} />
    </TableRoot>
  );
};

export const Default = Template.bind({});
Default.args = {};
