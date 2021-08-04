import { useMemo } from 'react';
import { useTable } from 'react-table';
import { startCase } from 'lodash';
import Type from 'components/Type/Type';

const LevelUpMoves = ({ levelUpMoves }) => {
  const columns = useMemo(() => [
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
      Header: 'Level',
      accessor: 'learnedAt',
    },
  ]);

  const data = useMemo(
    () =>
      levelUpMoves.map((levelUpMove) => ({
        category: <img src={`https://img.pokemondb.net/images/icons/move-${levelUpMove.category}.png`} alt={levelUpMove.category} />,
        name: startCase(levelUpMove.name),
        learnedAt: levelUpMove.learnedAt,
        type: <Type type={levelUpMove.type} />,
      })),
    [levelUpMoves]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  const tableHeaders = headerGroups.map((headerGroup) => {
    return (
      <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
          <th key={column} className="text-left" {...column.getHeaderProps()}>
            {column.render('Header')}
          </th>
        ))}
      </tr>
    );
  });

  const tableRows = rows.map((row, rowIndex) => {
    prepareRow(row);

    return (
      <tr key={rowIndex} {...row.getRowProps()}>
        {row.cells.map((cell) => {
          console.log(cell);
          return (
            <td key={cell} {...cell.getCellProps()}>
              {cell.render('Cell')}
            </td>
          );
        })}
      </tr>
    );
  });
  return (
    <div className="w-1/4 p-2 border-gray-300 border-2 rounded-md mx-2 h-full">
      <h3 className="font-bold text-center">Moves learned by Level Up</h3>
      <table {...getTableProps}>
        <thead>{tableHeaders}</thead>
        <tbody {...getTableBodyProps}>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default LevelUpMoves;
