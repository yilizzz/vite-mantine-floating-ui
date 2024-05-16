import { Meta, StoryFn } from '@storybook/react';

import { useState, useRef } from 'react';
import {
  TableRoot,
  TableBody,
  TableCell,
  TableRow,
  TableFooter,
  TableHead,
  TableHeader,
} from './table3';
import { defaultData } from './table.shared';

export default {
  title: 'Components/datadisplay/table/Table3',
  component: TableRoot,
} as Meta<typeof TableRoot>;

const Template: StoryFn<typeof TableRoot> = (args) => {
  const handleEdit = (id) => {
    console.log('You are going to edit item : ', id);
  };
  const handleDelete = (id) => {
    console.log('You are going to delete item : ', id);
  };
  return (
    <div>
      <TableRoot {...args} data={defaultData}>
        <TableHeader>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Action</TableHead>
        </TableHeader>
        <TableBody>
          {defaultData.map((data) => (
            <TableRow key={data.id}>
              <TableCell accessor="firstName">{data.firstName}</TableCell>
              <TableCell accessor="lastName">{data.lastName}</TableCell>
              <TableCell accessor="age">{data.age}</TableCell>
              <TableCell>
                <button onClick={() => handleEdit(data.id)}>Edit</button>
                <button onClick={() => handleDelete(data.id)}>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Avarage Age</TableCell>
            <TableCell>10</TableCell>
          </TableRow>
        </TableFooter>
      </TableRoot>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
