import Link from 'next/link';
import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { startCase } from 'lodash';
import Container from 'components/Container/Container';
import Type from 'components/Type/Type';
import styles from '../Moves.module.scss';

const EggMoves = ({ moves }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        Cell({ cell }) {
          return (
            <Link href={`/move/${cell.value}`} replace>
              {startCase(cell.value)}
            </Link>
          );
        },
      },
      {
        Header: 'Type',
        accessor: 'type',
        Cell({ cell }) {
          return <Type type={cell.value} />;
        },
      },
      {
        Header: 'Category',
        accessor: 'category',
        Cell({ cell }) {
          return <img className={styles.moveCategory} src={`https://img.pokemondb.net/images/icons/move-${cell.value}.png`} alt={cell.value} />;
        },
      },
      {
        Header: 'Lv',
        accessor: 'level',
        Cell({ cell }) {
          return <span>{cell.value}</span>;
        },
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      moves.map((move) => {
        return {
          category: move.category,
          level: move.level === 0 ? 1 : move.level,
          name: move.name,
          type: move.type,
        };
      }),
    [moves]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy);

  const tableHeaders = headerGroups.map((headerGroup) => {
    return (
      <tr className={styles.tableHeader} key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
          <th key={column} className="no-select" {...column.getHeaderProps(column.getSortByToggleProps())}>
            {column.render('Header')}
            {column.isSorted && <span>{column.isSortedDesc ? ' 🔽' : ' 🔼'}</span>}
          </th>
        ))}
      </tr>
    );
  });

  const tableRows = rows.map((row, rowIndex) => {
    prepareRow(row);

    return (
      <tr className={styles.tableRow} key={rowIndex} {...row.getRowProps()}>
        {row.cells.map((cell) => (
          <td key={cell} {...cell.getCellProps()}>
            {cell.render('Cell')}
          </td>
        ))}
      </tr>
    );
  });
  return (
    <Container>
      <h3 className="font-bold text-center">Moves learned by Breeding</h3>
      <table {...getTableProps}>
        <thead>{tableHeaders}</thead>
        <tbody {...getTableBodyProps}>{tableRows}</tbody>
      </table>
    </Container>
  );
};

export default EggMoves;
