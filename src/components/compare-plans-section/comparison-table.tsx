"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import { ComponentPropsWithRef, HTMLAttributes } from "react";
import { data } from "./constants";
import { columns } from "./columns";

const Table = ({ className, ...props }: ComponentPropsWithRef<"table">) => (
  <table className={clsx(className)} {...props} />
);

const TableRow = ({ ...props }: HTMLAttributes<HTMLTableRowElement>) => (
  <tr {...props} />
);

const TableSectionTitle = ({ children }: { children: React.ReactNode }) => (
  <tr>
    <td
      colSpan={columns.length}
      className="text-h4 text-content-dark-primary capitalize pt-9 pb-3"
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
  <td className={clsx(className, "py-3 first:pr-3 not-first:pl-5")} {...props}>
    <div className="border-b border-b-border-primary pb-5 w-full text-body-xl text-content-dark-primary font-normal whitespace-nowrap">
      {children}
    </div>
  </td>
);

const headerHeight = "85px";

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
            style={{ width: index === 0 ? "330px" : "237px" }}
          />
        ))}
      </colgroup>
      <thead
        style={{
          position: "sticky",
          top: headerHeight,
        }}
        className="bg-bg-primary"
      >
        {table.getHeaderGroups().map((headerGroup) => (
          <>
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="py-3 first:pr-3 not-first:pl-5"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
            <tr>
              <th colSpan={columns.length}>
                <hr className="border-border-primary mt-6" />
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
