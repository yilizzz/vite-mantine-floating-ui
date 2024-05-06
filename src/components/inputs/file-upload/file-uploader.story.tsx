import { Meta, StoryFn } from '@storybook/react';
import FileUploader from './file-uploader';
import useFileUpload from 'react-use-file-upload';
import axios from 'axios';

export default {
  title: 'Components/inputs/FileUploader',
  component: FileUploader,
} as Meta<typeof FileUploader>;

const Template: StoryFn<typeof FileUploader> = (args) => {
  return (
    <div>
      <FileUploader {...args} />

      <button onClick={()=>}>Submit</button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
