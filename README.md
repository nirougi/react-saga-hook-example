# React Context Hook + Redux Saga example

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

The synchronous logic is handled by the reducers and the side effects (asynchronous logic like an API call) are handled by actions.