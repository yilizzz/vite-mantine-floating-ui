import { Meta, StoryFn } from '@storybook/react';

import { useState, useRef } from 'react';
import { TableRoot, TableCol } from './table';
import { Activity, Bean, Banana } from 'lucide-react';

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
        <button onClick={() => handleEdit(row)}>Edit</button>
        <button onClick={() => handleDelete(row)}>Delete</button>
      </>
    );
  };
  return (
    <TableRoot {...args} data={defaultData}>
      {/* {defaultData.map((data) => {
        return (
          <> */}
      <TableCol label="First Name" dataKey="firstName">
        Prenom :
      </TableCol>
      <TableCol label="Last Name" dataKey="lastName"></TableCol>
      <TableCol label="Age" dataKey="age">
        <Bean />
      </TableCol>
      <TableCol label="Action" display rowAction={RowAction}></TableCol>
      {/* </>
        );
      })} */}
    </TableRoot>
  );
};

export const Default = Template.bind({});
Default.args = {};
