import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Breadcrumb from '@/components/navigation/breadcrumb/breadcrumb';
import { breadcrumbItems } from '@/Router';
import { Stack } from '@mantine/core';
import MyAccordion from '@/components/MyAccordion';
import { useState, useRef } from 'react';

import FileUploader from '@/components/inputs/file-upload/file-uploader';
import useFileUpload from 'react-use-file-upload';

import axios from 'axios';

export function HomePage() {
  const withToggle = (WrappedComponent) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (props) => <WrappedComponent isOpen={isOpen} onToggle={toggle} {...props} />;
  };

  const MyButton = ({ isOpen, onToggle }) => (
    <button onClick={onToggle}>{isOpen ? 'Close' : 'Open'}</button>
  );

  const ToggleButton = withToggle(MyButton);

  const list = [
    { title: '1', content: <ToggleButton>click</ToggleButton> },
    { title: '2', content: <ToggleButton>click</ToggleButton> },
    { title: '3', content: <ToggleButton>click</ToggleButton> },
  ];

  const fileUploaderRef = useRef();
  const handleGetFiles = async () => {
    // Access the child's data through the ref and its current method
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
        console.log('File uploaded successfully', res.data);
      } catch (error) {
        console.error('Failed to submit files.');
      }
    }
  };

  return (
    <Stack justify="center" align="center">
      <Welcome />
      <ColorSchemeToggle />
      <Breadcrumb items={breadcrumbItems} variable="allLinks" />
      <Breadcrumb items={breadcrumbItems} variable="link-menu" />
      <MyAccordion list={list} />

      <div>
        <FileUploader ref={fileUploaderRef} />
      </div>
      <button onClick={handleGetFiles}>Get Files</button>
    </Stack>
  );
}
