import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, Children } from 'react';

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
import { TableRootProps, TableColProps } from './table.shared';
import Button from '@/components/buttons/button/Button';

export const TableCol = ({
  label,
  dataKey,
  display = false,
  children,
  ...props
}: TableColProps) => {
  return <></>;
};

export const TableRoot = ({ data, children, ...props }: TableRootProps) => {
  let columns = [];
  const columnHelper = createColumnHelper();

  const cols = Children.toArray(children);
  cols.forEach((col) => {
    if (col.props.display) {
      columns.push(
        columnHelper.display({
          id: col.props.label,
          header: col.props.label,
          cell: (props) => <span>{col.props.rowAction(props.row.original)}</span>,
          footer: col.props.label,
        })
      );
    } else {
      columns.push(
        columnHelper.accessor(col.props.dataKey, {
          id: col.props.dataKey,
          header: col.props.label,
          cell: (info) => (
            <span>
              {col.props.children}
              {info.getValue()}
            </span>
          ),
          footer: col.props.label,
        })
      );
    }
  });
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // getRowId: (originalRow) => originalRow.id,
    debugTable: true,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });
  function Filter({ column, table }: { column: Column<any, any>; table: Table<any> }) {
    const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);

    const columnFilterValue = column.getFilterValue();

    return typeof firstValue === 'number' ? (
      <StTableNumberSearchDiv onClick={(e) => e.stopPropagation()}>
        <StTableHeaderInput
          type="number"
          value={(columnFilterValue as [number, number])?.[0] ?? ''}
          onChange={(e) =>
            column.setFilterValue((old: [number, number]) => [e.target.value, old?.[1]])
          }
          placeholder={`Min`}
        />
        <StTableHeaderInput
          type="number"
          value={(columnFilterValue as [number, number])?.[1] ?? ''}
          onChange={(e) =>
            column.setFilterValue((old: [number, number]) => [old?.[0], e.target.value])
          }
          placeholder={`Max`}
        />
      </StTableNumberSearchDiv>
    ) : (
      <StTableHeaderInput
        onChange={(e) => column.setFilterValue(e.target.value)}
        onClick={(e) => e.stopPropagation()}
        placeholder={`Search...`}
        type="text"
        value={(columnFilterValue ?? '') as string}
      />
    );
  }
  return (
    <StTableRoot>
      <StTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    <StTableHeader
                      style={{ cursor: 'pointer' }}
                      {...{
                        className: header.column.getCanSort() ? 'cursor-pointer select-none' : '',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted() as string] ?? null}

                      {header.column.getCanFilter() ? (
                        <div>
                          <Filter column={header.column} table={table} />
                        </div>
                      ) : null}
                    </StTableHeader>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
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
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.footer, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
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
    </StTableRoot>
  );
};
