import sut from './getEvolutions';
import { eevee, lugia, squirtle } from './data/evolutionChains';

describe('getEvolutionsList test', () => {
  test('testing a straight branch evolution chain', async () => {
    const actual = await sut(squirtle.chain);

    const expected = [
      {
        name: 'squirtle',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      },
      {
        name: 'wartortle',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
      },
      {
        name: 'blastoise',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
      },
    ];

    expect(actual).toStrictEqual(expected);
  });

  test('handles one to many evolution chain', async () => {
    const actual = await sut(eevee.chain);

    const expected = [
      {
        name: 'eevee',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
      },
      {
        name: 'vaporeon',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
      },
      {
        name: 'jolteon',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png',
      },
      {
        name: 'flareon',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
      },
      {
        name: 'espeon',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png',
      },
      {
        name: 'umbreon',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png',
      },
      {
        name: 'leafeon',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png',
      },
      {
        name: 'glaceon',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png',
      },
      {
        name: 'sylveon',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png',
      },
    ];

    expect(actual).toStrictEqual(expected);
  });

  test('should return an empty array if pokemon has no evolutions', async () => {
    const actual = await sut(lugia.chain);

    const expected = [];

    expect(actual).toStrictEqual(expected);
  });
});
