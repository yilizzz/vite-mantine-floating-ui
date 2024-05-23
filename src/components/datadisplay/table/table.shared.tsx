import { Table } from '@tanstack/react-table';

export interface TableRootProps {
  data: [];
  children: React.ReactNode;
}

// export interface TableRowProps {
//   children: React.ReactNode;
// }

export interface TableColProps {
  RowAction?: (row: any) => JSX.Element;
  label: string;
  dataKey?: string;
  display?: boolean;
  // children: React.ReactNode;
}

type Person = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};
export const defaultData: Person[] = [
  {
    id: '1a',
    firstName: 'tanner',
    lastName: 'linsley',
    age: 1,
    visits: 3,
    status: 'In Relationship',
    progress: 50,
  },
  {
    id: '2b',
    firstName: 'tandy',
    lastName: 'miller',
    age: 2,
    visits: 2,
    status: 'Single',
    progress: 80,
  },
  {
    id: '3c',
    firstName: 'joe',
    lastName: 'dirte',
    age: 3,
    visits: 1,
    status: 'Complicated',
    progress: 10,
  },
  {
    id: '4',
    firstName: 'aa',
    lastName: 'cc',
    age: 4,
    visits: 3,
    status: 'In Relationship',
    progress: 50,
  },
  {
    id: '5',
    firstName: 'bb',
    lastName: 'zz',
    age: '5',
    visits: 2,
    status: 'Single',
    progress: 80,
  },
  {
    id: '6d',
    firstName: 'cc',
    lastName: 'yy',
    age: 6,
    visits: 1,
    status: 'Complicated',
    progress: 10,
  },
  {
    id: '7z',
    firstName: 'dd',
    lastName: 'tt',
    age: 7,
    visits: 3,
    status: 'In Relationship',
    progress: 50,
  },
  {
    id: 'r8',
    firstName: 'ee',
    lastName: 'kk',
    age: 8,
    visits: 2,
    status: 'Single',
    progress: 80,
  },
  {
    id: 'r9',
    firstName: 'ff',
    lastName: 'uu',
    age: 9,
    visits: 1,
    status: 'Complicated',
    progress: 10,
  },
  {
    id: '10',
    firstName: 'gg',
    lastName: 'mm',
    age: 10,
    visits: 3,
    status: 'In Relationship',
    progress: 50,
  },
  {
    id: '11',
    firstName: 'hh',
    lastName: 'hh',
    age: 11,
    visits: 2,
    status: 'Single',
    progress: 80,
  },
  {
    id: '12',
    firstName: 'ii',
    lastName: 'vv',
    age: 12,
    visits: 1,
    status: 'Complicated',
    progress: 10,
  },
];
