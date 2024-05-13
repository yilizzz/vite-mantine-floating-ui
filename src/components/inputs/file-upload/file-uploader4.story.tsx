import { Meta, StoryFn } from '@storybook/react';
import axios from 'axios';
import { useState, useRef } from 'react';

import FileUploader4 from './file-uploader4';

export default {
  title: 'Components/inputs/FileUploader4',
  component: FileUploader4,
} as Meta<typeof FileUploader4>;

const Template: StoryFn<typeof FileUploader4> = (args) => {
  const [uploadedFiles, setUploadedFiles] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Placeholder logic for file submission
    console.log('Submitting files:', uploadedFiles);
    const formData = new FormData();

    for (const file of uploadedFiles) {
      formData.append('files', file);
    }
    try {
      const res = await axios.post('http://localhost:3001/upload', formData, {
        headers: { 'content-type': 'multipart/form-data' },
      });
      // setUploadDone(true);
      console.log('File uploaded successfully', res.data);
      setUploadedFiles(null);
    } catch (error) {
      console.error('Failed to submit files.');
    }
  };

  return (
    <div>
      <h1>Upload your files</h1>
      <FileUploader4 value={uploadedFiles} setValue={setUploadedFiles} multiple={false} />
      <button onClick={handleSubmit}>Submit Files</button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
