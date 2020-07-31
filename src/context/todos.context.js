import React, { createContext } from 'react';

import { useLocalStorageReducer } from '../hooks/useLocalStoregeReducer';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
  { id: 1, task: 'Mow the lawn', completed: false },
  { id: 2, task: 'Release dogs', completed: true },
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer('todos', defaultTodos, todoReducer);

  return (
    // send actual value.. not an object because there is only one value at the value..value={ todos } and (value={dispatch})
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
