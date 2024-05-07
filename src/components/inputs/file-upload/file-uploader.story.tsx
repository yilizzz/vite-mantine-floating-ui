import { Meta, StoryFn } from '@storybook/react';
import FileUploader from './file-uploader';
import useFileUpload from 'react-use-file-upload';
import axios from 'axios';
import { useState, useRef } from 'react';

export default {
  title: 'Components/inputs/FileUploader',
  component: FileUploader,
  argTypes: {
    variant: {
      control: 'select',
      options: ['row', 'col'],
    },
  },
} as Meta<typeof FileUploader>;

const Template: StoryFn<typeof FileUploader> = (args) => {
  const fileUploaderRef = useRef();
  const [uploadDone, setUploadDone] = useState(false);
  const resetUploadDone = () => {
    setUploadDone(false);
  };
  const handleUploadFiles = async () => {
    if (fileUploaderRef.current) {
      const files = fileUploaderRef.current.getFilesData();
      console.log(files);
      const formData = new FormData();
      files.forEach((file) => {
        formData.append('files', file);
      });
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
Default.args = { variant: 'col' };
