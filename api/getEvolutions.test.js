import sut from './getEvolutions';

describe('getEvolutionsList test', () => {
  test('testing a straight branch evolution chain', async () => {
    const chainObject = {
      species: { name: 'squirtle' },
      evolution_details: [],
      evolves_to: [
        {
          species: { name: 'wartortle' },
          evolution_details: [],
          evolves_to: [
            {
              species: { name: 'blastoise' },
              evolution_details: [],
              evolves_to: [],
            },
          ],
        },
      ],
    };

    const actual = await sut(chainObject);

    const expected = [
      {
        evolutionDetails: [],
        name: 'squirtle',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      },
      {
        evolutionDetails: [],
        name: 'wartortle',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
      },
      {
        evolutionDetails: [],
        name: 'blastoise',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
      },
    ];

    expect(actual).toEqual(expected);
  });
});
