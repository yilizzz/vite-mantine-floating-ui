import { Meta, StoryFn } from '@storybook/react';
import axios from 'axios';
import { useState, useRef } from 'react';

import FileUploader2 from './file-uploader2';

export default {
  title: 'Components/inputs/FileUploader2',
  component: FileUploader2,
} as Meta<typeof FileUploader2>;

const Template: StoryFn<typeof FileUploader2> = (args) => {
  const [files, setFiles] = useState([]);

  const handleUploadFiles = async () => {
    const formData = new FormData();

    if (files.length > 0) {
      for (const file of files) {
        formData.append('files', file);
      }
      try {
        const res = await axios.post('http://localhost:3001/upload', formData, {
          headers: { 'content-type': 'multipart/form-data' },
        });

        console.log('File uploaded successfully', res.data);
        setFiles([]);
      } catch (error) {
        console.error('Failed to submit files.');
      }
    }
  };
  return (
    <div>
      <FileUploader2 {...args} value={files} setValue={setFiles} multiple={true} />

      <button onClick={handleUploadFiles}>Upload Files</button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
