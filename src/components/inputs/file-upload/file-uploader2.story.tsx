import { Meta, StoryFn } from '@storybook/react';
import axios from 'axios';
import { useState, useRef } from 'react';

import FileUploader2 from './file-uploader2';

export default {
  title: 'Components/inputs/FileUploader2',
  component: FileUploader2,

} as Meta<typeof FileUploader2>;

const Template: StoryFn<typeof FileUploader2> = (args) => {
  const [fileFormData, setFileFormData] = useState();
  const [uploadDone, setUploadDone] = useState(false);
  const resetUploadDone = () => {
    setUploadDone(false);
  };
  const [files, setFiles] = useState([]);
  // const handleFormData = (formData) => {
  //   setFileFormData(formData);
  // };
  const handleUploadFiles = async () => {
    const formData = new FormData();

    for (const file of files) {
      formData.append('files', file);
    }
    try {
      const res = await axios.post('http://localhost:3001/upload', formData, {
        headers: { 'content-type': 'multipart/form-data' },
      });
      setUploadDone(true);
      console.log('File uploaded successfully', res.data);
    } catch (error) {
      console.error('Failed to submit files.');
    }
  };
  return (
    <div>

      <FileUploader2
        {...args}
        // getFormData={handleFormData}
        value={files}
        setValue={setFiles}
        uploadDone={uploadDone}
        resetUploadDone={resetUploadDone}
      />

      <button onClick={handleUploadFiles}>Upload Files</button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
