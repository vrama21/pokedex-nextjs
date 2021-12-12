import Link from 'next/link';
import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { startCase, upperCase } from 'lodash';
import Container from 'components/Container/Container';
import Type from 'components/Type/Type';
import styles from '../Moves.module.scss';

const MachineMoves = ({ machines, moves }) => {
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
        Header: 'Power',
        accessor: 'power',
        Cell({ cell }) {
          return cell.value ? <span>{cell.value}</span> : <span>&mdash;</span>;
        },
      },
      {
        Header: 'Accuracy',
        accessor: 'accuracy',
        Cell({ cell }) {
          return cell.value ? <span>{cell.value}</span> : <span>&mdash;</span>;
        },
      },
      {
        Header: 'Tm/Hm',
        accessor: 'machine',
        Cell({ cell }) {
          return <span>{upperCase(cell.value)}</span>;
        },
      },
    ],
    [],
  );

  const data = useMemo(
    () =>
      moves.map((move) => {
        const machineItem = machines.find((machine) => machine.name === move.name);

        return {
          accuracy: move.accuracy,
          category: move.category,
          machine: machineItem.item,
          name: move.name,
          power: move.power,
          type: move.type,
        };
      }),
    [moves],
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
    <Container className="m-4 p-0 text-sm">
      <h3 className="font-bold text-center py-4">Moves learned by Machine</h3>
      <table {...getTableProps}>
        <thead>{tableHeaders}</thead>
        <tbody {...getTableBodyProps}>{tableRows}</tbody>
      </table>
    </Container>
  );
};

export default MachineMoves;
