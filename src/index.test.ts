import combinations from './index'

describe(`combinations()`, () => {
  const specs = [
    {
      input: [
        ['a', 'b', 'c'],
        [1, 2, 3],
      ],
      output: [
        ['a', 1],
        ['a', 2],
        ['a', 3],
        ['b', 1],
        ['b', 2],
        ['b', 3],
        ['c', 1],
        ['c', 2],
        ['c', 3],
      ],
    },
    {
      input: [['a', 'b', 'c']],
      output: [['a'], ['b'], ['c']],
    },
    {
      input: [
        ['a', 'b'],
        [1, 2, 3],
      ],
      output: [
        ['a', 1],
        ['a', 2],
        ['a', 3],
        ['b', 1],
        ['b', 2],
        ['b', 3],
      ],
    },
    {
      input: [
        ['a', 'b', 'c'],
        ['x', 'y'],
        [1, 2, 3],
      ],
      output: [
        ['a', 'x', 1],
        ['a', 'x', 2],
        ['a', 'x', 3],
        ['a', 'y', 1],
        ['a', 'y', 2],
        ['a', 'y', 3],
        ['b', 'x', 1],
        ['b', 'x', 2],
        ['b', 'x', 3],
        ['b', 'y', 1],
        ['b', 'y', 2],
        ['b', 'y', 3],
        ['c', 'x', 1],
        ['c', 'x', 2],
        ['c', 'x', 3],
        ['c', 'y', 1],
        ['c', 'y', 2],
        ['c', 'y', 3],
      ],
    },
  ]

  specs.forEach(({ input, output }, index) => {
    it(`should output correctly in case: ${index + 1}`, () => {
      expect(combinations(input)).toEqual(output)
    })
  })
})
