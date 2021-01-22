# Combinations
Generate all possible combinations of variant array which contains options array.

## Installation
Using npm:

```sh
$ npm install --save @imekachi/combinations
```

Using yarn:

```sh
$ yarn add @imekachi/combinations
```

## Quick Start
```javascript
import combinations from '@imekachi/combinations'

const variants = combinations([
  ['red', 'green', 'blue'],
  ['S', 'M', 'L'],
])

console.log(`variants: `, variants)
// variants:
// [
//   ['red', 'S'],
//   ['red', 'M'],
//   ['red', 'L'],
//   ['green', 'S'],
//   ['green', 'M'],
//   ['green', 'L'],
//   ['blue', 'S'],
//   ['blue', 'M'],
//   ['blue', 'L'],
// ]
```
If you store variant in object you can do it like this
```javascript
import combinations from '@imekachi/combinations'

const shirtOptionObj = {
  color: ['red', 'green', 'blue'],
  size: ['S', 'M', 'L'],
}

const variants = combinations(Object.values(shirtOptionObj))
```
Or in Array but stores options in object
```javascript
import combinations from '@imekachi/combinations'

const shirtOptions = [
  {
    name: 'Color',
    options: ['red', 'green', 'blue'],
  },
  {
    name: 'Size',
    options: ['S', 'M', 'L'],
  },
]

const variants = combinations(
  shirtVariantOptions.map((variant) => variant.options)
)
```

## Contributing
Feel free to submit any issues or pull requests.

## License
MIT
