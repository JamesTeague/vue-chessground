# vue-chessground &middot; [![package](https://img.shields.io/npm/v/vue-chessground)](https://npmjs.com) [![vue3](https://img.shields.io/badge/vue-%5E3.2.37-brightgreen)](https://vuejs.org/) ![ts](https://badgen.net/npm/types/tslib)

vue-chessground is a Vue Wrapper of the original [Chessground](https://github.com/ornicar/chessground) UI developed for [lichess.org](https://lichess.org). 
This project currently contains no chess logic, please visit [chess.js](https://github.com/jhlywa/chess.js) for validation/generation.

This package is in very early stages of development, thus usage of this package in TypeScript is highly recommended.

## Installation

Currently, the package has `peerDependencies` on `vue: ^3.2.26`.

```shell
# If you are using pnpm:
pnpm install vue-chessground

# If you are using npm:
npm install vue-chessground

# If you are using yarn:
yarn add vue-chessground
```

## Documentation

After installing, the component can be imported by name. It has 2 optional props:

- `size: string` defaults to `512px`, determines height and width of the chessboard in pixels

- `config: Partial<Config>` defaults to `{}`, determines various [configuration properties](https://github.com/ornicar/chessground/blob/master/src/config.ts#L7-L90) of Chessground

Renders a simple `512 x 512` board, with pieces in their default position:

```jsx
import { Chessboard } from 'vue-chessground';

// this style must be imported somewhere
import 'vue-chessground/chessboard.css';
```
