/* eslint-disable react/jsx-key */
import { useTable, useSortBy, Column } from 'react-table';
import { PokemonMove } from 'types';
import styles from './BaseTable.module.scss';

type BaseTableDataTypes = PokemonMove;

interface BaseTableProps {
  columns: Column<BaseTableDataTypes>[];
  data: PokemonMove[];
  initialState?: {};
}

export default function BaseTable({ columns, data, initialState }: BaseTableProps) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data, initialState }, useSortBy);

  const tableHeaders = headerGroups.map((headerGroup) => {
    return (
      <tr className={styles.tableHeader} {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => {
          const _className = column.isSorted ? `${styles.tableHeaderSelected} no-select` : 'no-select';

          return (
            <th className={_className} {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render('Header')}
              {column.isSorted && <span className={styles.sortArrow}>{column.isSortedDesc ? ' 🔽' : ' 🔼'}</span>}
            </th>
          );
        })}
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
      <table className={styles.table} {...getTableProps()}>
        <thead>{tableHeaders}</thead>
        <tbody {...getTableBodyProps()}>{tableRows}</tbody>
      </table>
    </div>
  );
}
