import { Meta, StoryFn } from '@storybook/react';

import { useState, useRef } from 'react';
import Table from './table';
import { defaultData } from './table.shared';

export default {
  title: 'Components/datadisplay/table/Table',
  component: Table,
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = (args) => {
  const handleEdit = (id) => {
    console.log('You are going to edit item whose id is : ', id);
  };
  const handleDelete = (id) => {
    console.log('You are going to delete item whose id is : ', id);
  };
  return (
    <div>
      <Table
        {...args}
        data={defaultData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        pageSize={5}
        // id or other unique key field is required, and then the fields you want to show
        showColumns={['id', 'firstName', 'lastName', 'age']}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
