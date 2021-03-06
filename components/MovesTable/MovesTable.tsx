import { ReactElement, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Column } from 'react-table';
import { startCase } from 'lodash';
import { BaseTable, Type } from 'components';
import { MovesTableLayout } from 'layouts';
import { PokemonMove } from 'types';
import baseTableStyles from '../BaseTable/BaseTable.module.scss';

interface MovesTableProps {
  moves: PokemonMove[];
  moveType: string;
  hideLevelColumn?: boolean;
}

const MovesTable: React.FC<MovesTableProps> = ({ moves, moveType, hideLevelColumn = false }) => {
  const columns = useMemo(
    () =>
      [
        {
          Header: 'Name',
          accessor: 'name',
          Cell({ cell }) {
            return (
              <span>
                <Link href={`/move/${cell.value}`} replace>
                  {startCase(cell.value)}
                </Link>
              </span>
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
            return (
              <Image
                className={baseTableStyles.moveCategory}
                src={`https://img.pokemondb.net/images/icons/move-${cell.value}.png`}
                alt={cell.value}
                width={48}
                height={48}
              />
            );
          },
        },
        {
          Header: 'Power',
          accessor: 'power',
          Cell({ cell }) {
            return cell.value ? <span className="font-light">{cell.value}</span> : <span>&mdash;</span>;
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
          Header: 'Level',
          accessor: 'level',
          show: hideLevelColumn,
          Cell({ cell }) {
            return <span>{cell.value}</span>;
          },
        },
      ] as Column<PokemonMove>[],
    [hideLevelColumn],
  );

  const data = useMemo(() => moves, [moves]);

  const _initialState = hideLevelColumn ? { hiddenColumns: ['level'] } : {};

  return (
    <MovesTableLayout>
      <h3 className="font-bold text-center py-4">Moves learned by {moveType}</h3>
      <BaseTable columns={columns} data={data} initialState={_initialState} />
    </MovesTableLayout>
  );
};

export default MovesTable;
