import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Breadcrumb from '@/components/navigation/breadcrumb/breadcrumb';
import { breadcrumbItems } from '@/Router';
import { Stack } from '@mantine/core';

export function HomePage() {
  return (
    <Stack justify="center" align="center">
      <Welcome />
      <ColorSchemeToggle />
      <Breadcrumb items={breadcrumbItems} variable="allLinks" />
      <Breadcrumb items={breadcrumbItems} variable="link-menu" />
    </Stack>
  );
}
