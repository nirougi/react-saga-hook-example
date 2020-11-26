# React context hook + redux saga demo

**[LIVE DEMO](https://nirougi.github.io/react-saga-hook-example/)**

This is an example of how to use Redux Saga side effects manager with React `useContext` hook.

To run the project, install npm dependencies and run:

```bash
npm start
```

Then, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## File structure

All the store logic is inside [`src/store`](https://github.com/nirougi/react-context-saga/tree/main/src/store) folder.
It uses the `use-react-saga` hook as a middle man for the dispatch.

### index.ts

Here we combine three different hooks:

1. `useContext` for the global state.
2. `useReducer` for the synchronous logic.
3. `useReactSaga` for the asynchronous logic.

### Reducers folder

Here we have a reducer for each state parameter, responsible for the synchronous logic.
All of them are combined in the `mainReducer.ts`.

### Actions folder

Here we have a generator function for each action, which uses Saga's effects to handle the different steps.
They are combined in the `mainSaga.ts`.
