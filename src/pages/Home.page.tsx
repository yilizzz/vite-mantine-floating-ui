import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Breadcrumb from '@/components/navigation/breadcrumb/breadcrumb';
import { breadcrumbItems } from '@/Router';
import { Stack, Flex, Group } from '@mantine/core';
import MyAccordion from '@/components/MyAccordion';
import { useState, useRef } from 'react';
import { useFormik } from 'formik';

import FileUploader2 from '@/components/inputs/file-upload/file-uploader2';

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

  const formik = useFormik({
    initialValues: {
      input1: false,
      input2: '',
      input3: '1',
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const [files, setFiles] = useState([]);
  const handleSubmit = async (values) => {
    // Access the child's data through the ref and its current method
    if (files.length > 0) {
      const formData = new FormData();
      for (const file of files) {
        formData.append('files', file);
      }

      // Append other values from the form
      for (const [key, value] of Object.entries(values)) {
        formData.append(key, value);
      }
      try {
        const res = await axios.post('http://localhost:3001/formik/upload', formData, {
          headers: { 'content-type': 'multipart/form-data' },
        });

        console.log('Data and File uploaded successfully', res.data);
        setFiles([]);
      } catch (error) {
        console.error('Failed to submit.');
      }
    }
  };

  return (
    <Stack justify="center" align="center">
      <Welcome />
      <ColorSchemeToggle />
      <Breadcrumb items={breadcrumbItems} variant="allLinks" />
      <Breadcrumb items={breadcrumbItems} variant="link-menu" />
      <MyAccordion list={list} />
      <form onSubmit={formik.handleSubmit}>
        <Flex
          w="80%"
          gap="md"
          justify="center"
          align="flex-start"
          direction="column"
          wrap="wrap"
          bg="rgba(0, 0, 0, .3)"
          m="md"
          p="md"
        >
          <Stack>
            <label htmlFor="input1">input1 : </label>
            <input
              id="input1"
              name="input1"
              type="checkbox"
              checked={formik.values.input1}
              onChange={() => {
                formik.setFieldValue('input1', !formik.values.input1);
              }}
            />
          </Stack>
          <Stack>
            <label htmlFor="input2">input2 : </label>
            <input
              id="input2"
              name="input2"
              type="text"
              value={formik.values.input2}
              onChange={(e) => {
                formik.setFieldValue('input2', e.target.value);
              }}
            />
          </Stack>
          <fieldset>
            <legend>Input3 : Select one</legend>
            {list.map((item) => {
              return (
                <div key={item.title}>
                  {' '}
                  <input
                    type="radio"
                    id={item.title}
                    name="input3"
                    value={formik.values.input3}
                    onChange={(e) => {
                      formik.setFieldValue('input3', e.target.value);
                    }}
                  />
                  <label>{item.title}</label>
                </div>
              );
            })}
          </fieldset>
          <Stack align="stretch" justify="center">
            <label htmlFor="input4">input4 : </label>
            <FileUploader2 name="input4" value={files} setValue={setFiles} multiple={true} />
          </Stack>
        </Flex>
        <button>Submit</button>
      </form>
    </Stack>
  );
}
