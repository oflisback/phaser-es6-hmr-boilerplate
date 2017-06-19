This is a minimal boilerplate to quickly get up and running with the wonderful [Phaser.io](https://phaser.io) game framework. It supports Javascript ES6 and live updates / hot module reloading via [webpack-dev-server](https://github.com/webpack/webpack-dev-server).

## Prerequisites

Make sure node.js installed, otherwise install it first. If node.js is installed and working the following commands should print the version numbers, for example:

```
> node
v6.10.3
> npm --version
3.10.10
```

## Installation

Clone this repository then install its dependencies as usual:

```
npm install
```

## Usage

```
npm run dev
```

will serve a minimal example on http://localhost:3000. If changes are made to the source code file src/index.js the changes will be reflected automatically in the browser thanks to webpack dev server's hot module reloading.

## Express

A minimal express server is also included just as an example of how to serve the example outside the webpack-dev-server since this is only intended for use during development.

```
npm run express
```
