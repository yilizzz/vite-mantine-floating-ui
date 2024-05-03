import { Meta, StoryFn } from '@storybook/react';
import FileUploader from './file-uploader';
import useFileUpload from 'react-use-file-upload';
import axios from 'axios';

export default {
  title: 'Components/inputs/FileUploader',
  component: FileUploader,
} as Meta<typeof FileUploader>;

const Template: StoryFn<typeof FileUploader> = (args) => {
  const { createFormData } = useFileUpload();
  const handleTest = async (e) => {
    try {
      const res = await axios.get('http://localhost:3001/');
      console.log('Back res successfully', res.data);
    } catch (error) {
      console.error('Failed to get back.');
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = createFormData();

    try {
      const res = await axios.post('http://localhost:3001/upload', formData, {
        headers: { 'content-type': 'multipart/form-data' },
      });
      console.log('File uploaded successfully', res.data);
    } catch (error) {
      console.error('Failed to submit files.');
    }
  };

  return (
    <div>
      <FileUploader {...args} />
      <div className="submit">
        <button onClick={handleTest}>Test Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
