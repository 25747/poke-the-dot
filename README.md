# poke-the-dot

A game for my three-year-old, made in less than a day.
See current build here: https://25747.github.io

## Libraries used

Chakra UI, one of my favorite React UI libraries. Simple, effective components, with plenty of customizability. For the current state of the game a UI framework is almost certainly overkill, but Chakra is so nice to use and it doesn't add too much unneeded complexity.

Vite, newer build/bundler tool, alternative to webpack. I haven't used it before, but heard great things. I was blown away with the build speed, both in development and when doing a production build. Dev builds happened in as little as a quarter second. Production builds in under 5 seconds.

use-sound, a simple hook for playing sounds in the web browser. Sounds taken from freesound.org. https://github.com/joshwcomeau/use-sound

## How to use

clone to your machine, run

```bash
yarn dev
```

to launch dev server

## Future TODOs

- still plenty of refactoring opportunity; can move some of the functions/hooks in App.jsx into separate files

- spruce up UI

- use localhost to save high scores

- add difficulty
  - dots move after certain time
  - extra shapes that should not be pushed
