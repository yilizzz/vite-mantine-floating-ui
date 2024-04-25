import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Breadcrumb from '@/components/navigation/breadcrumb/breadcrumb';
import { breadcrumbItems } from '@/Router';
import { Stack } from '@mantine/core';
import MyAccordion from '@/components/MyAccordion';
import { useState } from 'react';

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

  return (
    <Stack justify="center" align="center">
      <Welcome />
      <ColorSchemeToggle />
      <Breadcrumb items={breadcrumbItems} variable="allLinks" />
      <Breadcrumb items={breadcrumbItems} variable="link-menu" />
      <MyAccordion list={list} />
      <ToggleButton />
    </Stack>
  );
}
