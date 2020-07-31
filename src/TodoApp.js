import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import { TodosProvider } from './context/todos.context';
// import useLocalStorageState from './hooks/useLocalStorageState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>TODOS With Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ margin: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            {/* props via TodosProvide... (addTodo) */}
            <TodoForm />
            {/* props via TodosProvider... (todos ,removeTodo, toggleTodo, editTodo ) */}
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
