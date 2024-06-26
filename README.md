# UnoSkyjo
![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/Ladif1/c61a425abff1acf2a6adee3c70c79346/raw/df67fa4f217209c3347c714d8d1bd32962a5d2df/jest-coverage-comment__main.json)

## What is UnoSkyjo
UnoSkyjo is an app which allows you to create cards from two boardgames, Uno and Skyjo, with a lot of options.  
This app has an interactive menu which allows you to filter your cards or sort them.

## 3 technical points that the Dev Quality course helped us improve
- Respect the writing conventions of a language
- Error management
- Tests

## Diagrams
![ConceptDiagram](schema_conception.svg)

![NavigDiagram](schemaNavig.svg)


## How to use
Use `numpad` and `enter` to navigate through menu and create your cards.

You can `create`, `display`, `sort` and `filter` them.

## How to run the project
### Live Dev Preview
- `npm run dev`

### Build Project
- `npm run build`
- `npm run start`

## How to install
- Install [NodeJS](https://nodejs.org/) (LTS recommended)
- `cd UnoSkyjo`
- `npm install`

## Author
- Maxime Monceau G1, p2201845
- Raphaël Mangini G1, p2208737

## Our Style Guide
Here is the guide we followed to name variables, classes, methods etc.

[The guide](https://basarat.gitbook.io/typescript/styleguide)

## How to run Tests
### Unit tests
Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.  
Tests path : `src/tests`

- `npm run test`
- Open in web browser `coverage/Icov-report/index.html`

### ESLint
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
- `npm run test-estlint`


