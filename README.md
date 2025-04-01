# Porffor TypeScript Starter

A repo showing how to set up a TypeScript project and compile it to JavaScript, WebAssembly, and native using [Porffor](https://porffor.dev).

# Get started

Install Node.js first (and `npm` if you are on Linux and your distro requires you install that separately)

Install dependencies:

```sh
npm clean-install
```

# Run and Build

## `npm start`

Compiles to WebAssembly and runs it.

## `npm run build-wasm`

Compiles to WebAssembly in `out.wasm`.

## `npm run build-native`

(WIP missing headers) Compiles to native in `out`.

## `npm run build-js`

(TODO) Compiles to JavaScript in `out.js`.

## `npm run serve`

(WIP) Runs a web server, auto-opens a browser window, and runs the Wasm module in the browser.
