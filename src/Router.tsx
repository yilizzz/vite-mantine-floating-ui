import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Category } from './pages/Category.page';
import { Subcategory } from './pages/Subcategory.page';
import { Type } from './pages/Type.page';
import { Items } from './pages/Items.page';

export const breadcrumbItems = [
  {
    link: '/',
    label: 'Home',
    active: true,
  },
  {
    link: '/category',
    label: 'Category',
    active: false,
  },
  {
    link: '/category/subcategory',
    label: 'Subcategory',
    active: false,
  },
  {
    link: '/category/subcategory/type',
    label: 'Type',
    active: false,
  },
  {
    link: '/category/subcategory/type/items',
    label: 'Items',
    active: false,
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/category',
    element: <Category />,
  },
  {
    path: '/category/subcategory',
    element: <Subcategory />,
  },
  {
    path: '/category/subcategory/type',
    element: <Type />,
  },
  {
    path: '/category/subcategory/type/items',
    element: <Items />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
