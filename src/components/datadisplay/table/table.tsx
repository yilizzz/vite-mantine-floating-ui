import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Props } from './table.shared';
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
} from '@tanstack/react-table';

import {
  StTableRoot,
  StTableHeader,
  StTableCell,
  StTable,
  StTablePagination,
  StTableInput,
  StTablePageInfo,
  StTableSelect,
} from './table.styled';

import Button from '@/components/buttons/button/Button';

const Table = ({ tableData, sortKey, sortDirection = 'desc', pageSize = 10, ...props }: Props) => {
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: sortKey, desc: sortDirection === 'desc' ? true : false },
  ]);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize,
  });
  const columnHelper = createColumnHelper<Record<string, any>>();
  let columns = [];
  if (tableData.length > 0) {
    for (let key in tableData[0]) {
      columns.push(
        columnHelper.accessor(key, {
          // cell: (info) => <StTableCell>{info.getValue()}</StTableCell>,
          header: () => <span>{key}</span>,
          // footer: (info) => info.column.id,
        })
      );
    }
  }

  const [data, _setData] = React.useState(() => [...tableData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      sorting,
      pagination,
    },
  });
  // console.log(table.getState().sorting);
  // function formatWithSpaces(input) {
  //   // Convert camelCase and PascalCase to space-separated words
  //   let result = input.replace(/([a-z])([A-Z])/g, '$1 $2');

  //   // Replace underscores with spaces
  //   result = result.replace(/_/g, ' ');

  //   // Replace multiple spaces with a single space
  //   result = result.replace(/\s+/g, ' ');

  //   // Trim any leading or trailing spaces
  //   result = result.trim();

  //   return result;
  // }
  // function formatArrayWithSpaces(array) {
  //   return array.map(formatWithSpaces);
  // }
  return (
    <StTableRoot>
      <StTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <StTableHeader key={header.id} colSpan={header.colSpan}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </StTableHeader>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.slice(0, 10)
            .map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </StTable>

      <StTablePagination>
        <div>
          <Button onClick={() => table.firstPage()} disabled={!table.getCanPreviousPage()}>
            {'<<'}
          </Button>
          <Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            {'<'}
          </Button>
          <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            {'>'}
          </Button>
          <Button onClick={() => table.lastPage()} disabled={!table.getCanNextPage()}>
            {'>>'}
          </Button>
        </div>
        <StTablePageInfo>
          <span>
            <span>Page </span>
            <strong>
              {table.getState().pagination.pageIndex + 1} of {table.getPageCount().toLocaleString()}
            </strong>
          </span>
          <span>
            {' '}
            | Go to page :{' '}
            <StTableInput
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
            />
          </span>
          <StTableSelect
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </StTableSelect>
        </StTablePageInfo>
      </StTablePagination>
      <div>
        Showing {table.getRowModel().rows.length.toLocaleString()} of{' '}
        {table.getRowCount().toLocaleString()} Rows
      </div>
      <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre>
      <pre>{JSON.stringify(sorting, null, 2)}</pre>
    </StTableRoot>
  );
};
export default Table;
