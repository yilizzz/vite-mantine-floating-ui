import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  getSortedRowModel,
  SortingFn,
  SortingState,
  PaginationState,
  getFilteredRowModel,
  getPaginationRowModel,
  Column,
  Table,
} from '@tanstack/react-table';
import {
  StTableRoot,
  StTableHeader,
  StTable,
  StTablePagination,
  StTableInput,
  StTablePageInfo,
  StTableSelect,
  StTableNumberSearchDiv,
  StTableHeaderInput,
} from './table.styled';
import Button from '@/components/buttons/button/Button';
const RowActions = ({ children }) => {
  return <div>{children}</div>;
};
const columnHelper = createColumnHelper();
function extractColumns(children) {
  return React.Children.map(children, (child) => {
    if (child.props.accessor) {
      return columnHelper.accessor(child.props.accessor, {
        cell: child.props.children,
      });
    } else {
      return columnHelper.display({
        id: 'actions',
        cell: (props) => <span>{child.props.children}</span>,
      });
    }
  });
}
let columnsFromRow;
export const TableBody = ({ children, ...props }) => {
  return <tbody>{children}</tbody>;
};
export const TableHeader = ({ children, ...props }) => {
  return <thead>{children}</thead>;
};
export const TableHead = ({ children, ...props }) => {
  return <th>{children}</th>;
};
export const TableRow = ({ children, ...props }) => {
  columnsFromRow = React.Children.toArray(children).filter(
    (child) => child.type.name === 'TableCell'
  );
  // let test = [];
  // React.Children.forEach(children, (child) => {
  //   test.push(child.type.name);
  // });
  // console.log('list', test);
  console.log(columnsFromRow);
  return <tr>{children}</tr>;
};
export const TableCell = ({ children, ...props }) => {
  return <td>{children}</td>;
};
export const TableFooter = ({ children, ...props }) => {
  return <tfoot>{children}</tfoot>;
};
export const TableRoot = ({ data, children, ...props }) => {
  return <table>{children}</table>;

  //   const columns = extractColumns(columnsFromBody);
  //   const table = useReactTable({
  //     data,
  //     columns,
  //     getCoreRowModel: getCoreRowModel(),
  //   });
  //   return (
  //     <table>
  //       <thead>
  //          {table.getHeaderGroups().map((headerGroup) => (
  //           <tr key={headerGroup.id}>
  //             {headerGroup.headers.map((header) => (
  //               <th key={header.id}>
  //                 {header.isPlaceholder
  //                   ? null
  //                   : flexRender(header.column.columnDef.header, header.getContext())}
  //               </th>
  //             ))}
  //           </tr>
  //         ))}
  //       </thead>
  //       <tbody>
  //          {table.getRowModel().rows.map((row) => (
  //           <tr key={row.id}>
  //             {row.getVisibleCells().map((cell) => (
  //               <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
  //             ))}
  //           </tr>
  //         ))}
  //       </tbody>
  //       <tfoot>
  //         {table.getFooterGroups().map((footerGroup) => (
  //           <tr key={footerGroup.id}>
  //             {footerGroup.headers.map((header) => (
  //               <th key={header.id}>
  //                 {header.isPlaceholder
  //                   ? null
  //                   : flexRender(header.column.columnDef.footer, header.getContext())}
  //               </th>
  //             ))}
  //           </tr>
  //         ))}
  //       </tfoot>
  //     </table>
  //   );
};
