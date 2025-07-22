"use client";

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CardWrapper } from '@/components/custom/ui/card-wrapper';
import { cn } from '@/lib/utils';

export function TableWrapper({
  title,
  description,
  icon,
  children,
  columns,
  data,
  renderRow,
  emptyState,
  className,
  tableClassName,
  maxHeight = "500px",
  variant = "default",
  size = "default",
  ...props
}) {
  const hasData = data && data.length > 0;

  // Default empty state
  const defaultEmptyState = emptyState || {
    icon: icon,
    title: "No data available",
    description: "There are no items to display"
  };

  return (
    <CardWrapper
      title={title}
      description={description}
      className={cn("flex-grow", className)}
      variant={variant}
      size={size}
      {...props}
    >
      {!hasData ? (
        <div className="flex flex-col items-center justify-center h-48 text-muted-foreground">
          {defaultEmptyState.icon && (
            <div className="h-12 w-12 mb-4 opacity-50">
              {defaultEmptyState.icon}
            </div>
          )}
          <p className="text-lg">{defaultEmptyState.title}</p>
          {defaultEmptyState.description && (
            <p className="text-sm">{defaultEmptyState.description}</p>
          )}
        </div>
      ) : (
        <div className={cn("relative overflow-auto", maxHeight && `max-h-[${maxHeight}]`)}>
          <Table className={tableClassName}>
            {columns && (
              <TableHeader>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableHead 
                      key={index}
                      className={cn(column.className)}
                    >
                      {column.header}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
            )}
            <TableBody>
              {data?.map((item, index) => renderRow ? renderRow(item, index) : (
                <TableRow key={index}>
                  {children}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </CardWrapper>
  );
}

// Convenience component for simple data tables (renamed from DataTable)
export function SimpleTable({
  title,
  data,
  columns,
  emptyState,
  className,
  ...props
}) {
  const renderRow = (item, index) => (
    <TableRow key={index}>
      {columns.map((column, colIndex) => (
        <TableCell key={colIndex} className={column.cellClassName}>
          {column.render ? column.render(item, index) : item[column.key]}
        </TableCell>
      ))}
    </TableRow>
  );

  return (
    <TableWrapper
      title={title}
      data={data}
      columns={columns}
      renderRow={renderRow}
      emptyState={emptyState}
      className={className}
      {...props}
    />
  );
}

// Export table components for direct use
export { Table, TableBody, TableCell, TableHead, TableHeader, TableRow }; 