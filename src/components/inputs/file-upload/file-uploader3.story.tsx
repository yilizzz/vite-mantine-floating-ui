import { Meta, StoryFn } from '@storybook/react';
import axios from 'axios';
import { useState, useRef } from 'react';

import FileUploader3 from './file-uploader3';

export default {
  title: 'Components/inputs/FileUploader3',
  component: FileUploader3,

} as Meta<typeof FileUploader3>;

const Template: StoryFn<typeof FileUploader3> = (args) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFilesChange = (files) => {
    setUploadedFiles(files); // Update state with the new list of files
  };

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
    } catch (error) {
      console.error('Failed to submit files.');
    }
  };

  return (
    <div>
      <h1>Upload your files</h1>
      <FileUploader3 onFilesChange={handleFilesChange} />
      <button onClick={handleSubmit}>Submit Files</button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
