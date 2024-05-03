import { Meta, StoryFn } from '@storybook/react';
import FileUploader from './file-uploader';
import useFileUpload from 'react-use-file-upload';

export default {
  title: 'Components/inputs/FileUploader',
  component: FileUploader,
} as Meta<typeof FileUploader>;

const Template: StoryFn<typeof FileUploader> = (args) => {
  const { createFormData } = useFileUpload();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = createFormData();

    try {
      //   axios.post('https://some-api.com', formData, {
      //     'content-type': 'multipart/form-data',
      //   });
    } catch (error) {
      console.error('Failed to submit files.');
    }
  };

  return (
    <div>
      <FileUploader {...args} />
      <div className="submit">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
