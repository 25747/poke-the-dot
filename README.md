# poke-the-dot

A game for my three-year-old, first version made in less than a day. Built for mobile, but usable on desktop browsers.
See current build here: https://25747.github.io

Started in Javascript and then converted to Typescript as a way to learn TS.

## Libraries used

Chakra UI, one of my favorite React UI libraries. Simple, effective components, with plenty of customizability. For the current state of the game a UI framework is almost certainly overkill, but Chakra is so nice to use and it doesn't add too much unneeded complexity.

Vite, build/bundler tool, alternative to webpack. I haven't used it before, but heard great things. I was blown away with the build speed, both in development and when doing a production build. Dev builds happened in as little as a quarter second. Production builds in under 5 seconds.

use-sound, a simple hook for playing sounds in the web browser. Sounds taken from freesound.org. https://github.com/joshwcomeau/use-sound

## How to use

clone to your machine, run

```bash
yarn dev
```

to launch dev server

## Future TODOs

- spend time on UI/theme

- use localhost to save high scores

- add difficulty
  - dots move after certain time
  - extra shapes that should not be pushed
