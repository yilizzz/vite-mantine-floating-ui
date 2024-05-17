import { Table } from '@tanstack/react-table';

export interface TableRootProps {
  data: [];
  children: React.ReactNode;
  // onTableData: (value) => {};
}

export interface TableRowProps {
  children: React.ReactNode;
}

export interface TableColProps {
  //   rowData: object;
  label: string;
  dataKey: string;
  display?: boolean;
  children: React.ReactNode;
}
