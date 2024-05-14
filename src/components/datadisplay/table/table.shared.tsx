import { HTMLAttributes, ReactElement } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  tableData: [];
  sortKey: string;
  sortDirection?: 'asc' | 'desc';
  pageSize?: number;
};

type Person = {
  firstName: string;
  'last Name': string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};
export const defaultData: Person[] = [
  {
    firstName: 'tanner',
    'last Name': 'linsley',
    age: 1,
    visits: 3,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    'last Name': 'miller',
    age: 2,
    visits: 2,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    'last Name': 'dirte',
    age: 3,
    visits: 1,
    status: 'Complicated',
    progress: 10,
  },
  {
    firstName: 'aa',
    'last Name': 'cc',
    age: 4,
    visits: 3,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'bb',
    'last Name': 'zz',
    age: 5,
    visits: 2,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'cc',
    'last Name': 'yy',
    age: 6,
    visits: 1,
    status: 'Complicated',
    progress: 10,
  },
  {
    firstName: 'dd',
    'last Name': 'tt',
    age: 7,
    visits: 3,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'ee',
    'last Name': 'kk',
    age: 8,
    visits: 2,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'ff',
    'last Name': 'uu',
    age: 9,
    visits: 1,
    status: 'Complicated',
    progress: 10,
  },
  {
    firstName: 'gg',
    'last Name': 'mm',
    age: 10,
    visits: 3,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'hh',
    'last Name': 'hh',
    age: 11,
    visits: 2,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'ii',
    'last Name': 'vv',
    age: 12,
    visits: 1,
    status: 'Complicated',
    progress: 10,
  },
];
