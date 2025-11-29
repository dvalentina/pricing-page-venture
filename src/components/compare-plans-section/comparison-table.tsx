"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import { HTMLAttributes } from "react";
import { data } from "./constants";
import { columns } from "./columns";

const Table = ({ className, ...props }: HTMLAttributes<HTMLTableElement>) => (
  <table
    className={clsx(
      "border-separate border-spacing-x-5 border-spacing-y-6",
      className
    )}
    {...props}
  />
);

const TableRow = ({ ...props }: HTMLAttributes<HTMLTableRowElement>) => (
  <tr {...props} />
);

const TableSectionTitle = ({ children }: { children: React.ReactNode }) => (
  <tr>
    <td
      colSpan={columns.length}
      className="text-h4 text-content-dark-primary capitalize pt-3"
    >
      {children}
    </td>
  </tr>
);

const TableCell = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLTableCellElement>) => (
  <td className={className} {...props}>
    <div className="border-b border-b-border-primary pb-5 w-full text-body-xl text-content-dark-primary font-normal">
      {children}
    </div>
  </td>
);

function ComparisonTable() {
  "use no memo"; // for TanStack Table
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    enableColumnResizing: false,
  });

  return (
    <Table className="w-full">
      <colgroup>
        {columns.map((_, index) => (
          <col
            key={index}
            span={1}
            style={{ width: index === 0 ? "310px" : "210px" }}
          />
        ))}
      </colgroup>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <>
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
            <tr>
              <th colSpan={columns.length}>
                <hr className="border-border-primary mt-3" />
              </th>
            </tr>
          </>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => {
          if (row.original.isSectionTitle) {
            return (
              <TableSectionTitle key={row.original.title}>
                {row.original.title}
              </TableSectionTitle>
            );
          }
          return (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell, index) => {
                return (
                  <TableCell
                    key={cell.id}
                    className={clsx(index === 0 && "pr-3")}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ComparisonTable;
