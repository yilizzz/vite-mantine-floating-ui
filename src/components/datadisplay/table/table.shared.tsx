import { HTMLAttributes, ReactElement } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  data: [];
  sortKey?: string;
  sortDirection?: 'asc' | 'desc';
  pageSize?: number;
  handleEdit: () => {};
  handleDelete: () => {};
  showColumns?: string[];
};

type Person = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};
export const defaultData: Person[] = [
  {
    id: 1,
    firstName: 'tanner',
    lastName: 'linsley',
    age: 1,
    visits: 3,
    status: 'In Relationship',
    progress: 50,
  },
  {
    id: 2,
    firstName: 'tandy',
    lastName: 'miller',
    age: 2,
    visits: 2,
    status: 'Single',
    progress: 80,
  },
  {
    id: 3,
    firstName: 'joe',
    lastName: 'dirte',
    age: 3,
    visits: 1,
    status: 'Complicated',
    progress: 10,
  },
  {
    id: 4,
    firstName: 'aa',
    lastName: 'cc',
    age: 4,
    visits: 3,
    status: 'In Relationship',
    progress: 50,
  },
  {
    id: 5,
    firstName: 'bb',
    lastName: 'zz',
    age: 5,
    visits: 2,
    status: 'Single',
    progress: 80,
  },
  {
    id: 6,
    firstName: 'cc',
    lastName: 'yy',
    age: 6,
    visits: 1,
    status: 'Complicated',
    progress: 10,
  },
  {
    id: 7,
    firstName: 'dd',
    lastName: 'tt',
    age: 7,
    visits: 3,
    status: 'In Relationship',
    progress: 50,
  },
  {
    id: 8,
    firstName: 'ee',
    lastName: 'kk',
    age: 8,
    visits: 2,
    status: 'Single',
    progress: 80,
  },
  {
    id: 9,
    firstName: 'ff',
    lastName: 'uu',
    age: 9,
    visits: 1,
    status: 'Complicated',
    progress: 10,
  },
  {
    id: 10,
    firstName: 'gg',
    lastName: 'mm',
    age: 10,
    visits: 3,
    status: 'In Relationship',
    progress: 50,
  },
  {
    id: 11,
    firstName: 'hh',
    lastName: 'hh',
    age: 11,
    visits: 2,
    status: 'Single',
    progress: 80,
  },
  {
    id: 12,
    firstName: 'ii',
    lastName: 'vv',
    age: 12,
    visits: 1,
    status: 'Complicated',
    progress: 10,
  },
];
