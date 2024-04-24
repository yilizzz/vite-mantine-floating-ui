import { Meta, StoryFn } from '@storybook/react';
import Breadcrumb from './breadcrumb';

export default {
  title: 'Components/navigation/breadcrumb',
  component: Breadcrumb,
} as Meta<typeof Breadcrumb>;

const Template: StoryFn<typeof Breadcrumb> = (args) => {
  const breadcrumbItems = [
    {
      link: '#',
      label: 'Home',
      active: true,
    },
    {
      link: '#target1',
      label: 'Category',
      active: false,
    },
    {
      link: '#target2',
      label: 'Subcategory',
      active: false,
    },
    {
      link: '#target3',
      label: 'Type',
      active: false,
    },
    {
      link: '#target4',
      label: 'Items',
      active: false,
    },
  ];
  return (
    <>
      <Breadcrumb items={breadcrumbItems} {...args} />
      <div id="target1" style={{ height: '1000px' }}>
        1
      </div>
      <div id="target2" style={{ height: '1000px' }}>
        2
      </div>
      <div id="target3" style={{ height: '1000px' }}>
        3
      </div>
      <div id="target4" style={{ height: '1000px' }}>
        4
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
