/* eslint-disable react/jsx-key */
import { useTable, useSortBy, Column } from 'react-table';
import { PokemonMove } from 'types';
import styles from './BaseTable.module.scss';

type BaseTableDataTypes = PokemonMove;

interface BaseTableProps {
  columns: Column<BaseTableDataTypes>[];
  data: PokemonMove[];
}

export default function BaseTable({ columns, data }: BaseTableProps) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy);

  const tableHeaders = headerGroups.map((headerGroup) => {
    return (
      <tr className={styles.tableHeader} {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
          <th className="no-select" {...column.getHeaderProps(column.getSortByToggleProps())}>
            {column.render('Header')}
            {column.isSorted && <span>{column.isSortedDesc ? ' 🔽' : ' 🔼'}</span>}
          </th>
        ))}
      </tr>
    );
  });

  const tableRows = rows.map((row) => {
    prepareRow(row);

    return (
      <tr className={styles.tableRow} {...row.getRowProps()}>
        {row.cells.map((cell) => (
          <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
        ))}
      </tr>
    );
  });

  return (
    <div>
      <table {...getTableProps()}>
        <thead>{tableHeaders}</thead>
        <tbody {...getTableBodyProps()}>{tableRows}</tbody>
      </table>
    </div>
  );
}
