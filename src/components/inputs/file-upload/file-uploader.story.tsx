import { Meta, StoryFn } from '@storybook/react';

import axios from 'axios';
import { useState, useRef } from 'react';
import FileUploader from './file-uploader';

export default {
  title: 'Components/inputs/FileUploader',
  component: FileUploader,

} as Meta<typeof FileUploader>;
const Template: StoryFn<typeof FileUploader> = (args) => {
  const fileUploaderRef = useRef();
  const [uploadDone, setUploadDone] = useState(false);
  const resetUploadDone = () => {
    setUploadDone(false);
  };

  const handleUploadFiles = async () => {
    if (fileUploaderRef.current) {
      const formData = fileUploaderRef.current.getFormData();
      try {
        const res = await axios.post('http://localhost:3001/upload', formData, {
          headers: { 'content-type': 'multipart/form-data' },
        });
        setUploadDone(true);
        console.log('File uploaded successfully', res.data);
      } catch (error) {
        console.error('Failed to submit files.');
      }
    }
  };
  return (
    <div>
      <FileUploader
        {...args}
        ref={fileUploaderRef}
        uploadDone={uploadDone}
        resetUploadDone={resetUploadDone}
      />

      <button onClick={handleUploadFiles}>Upload Files</button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
