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
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Lv',
        accessor: 'learnedAt',
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      moves.map((move) => {
        return {
          category: move.category,
          learnedAt: move.learnedAt,
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
          <td className={styles.moveCell} key={cell} {...cell.getCellProps()}>
            {cell.column.Header === 'Name' && <span>{startCase(cell.value)}</span>}
            {cell.column.Header === 'Type' && <Type type={cell.value} />}
            {cell.column.Header === 'Category' && (
              <img className={styles.moveCategory} src={`https://img.pokemondb.net/images/icons/move-${cell.value}.png`} alt={cell.value} />
            )}
            {cell.column.Header === 'Lv' && <span>{cell.value === 0 ? 1 : cell.value}</span>}
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
