import React from 'react';
import './App.css';
import AddTodo from './components/pages/todo/AddTodo';
import TodoList from './components/pages/todo/todoList';
import UserList from './components/pages/userList';
import UserProfile from './components/hooks/useState/usestateObj';
import ExampleEffect from './components/hooks/useEffect/useEffect';
import FetchData from './components/hooks/useEffect/dataFetch';
import FilterItems from './components/hooks/useMemo/filterData';
import NewCounter from './components/hooks/useReducer/CounterEx';

function App() {
  return (
    <div className="App">
      <h1>Redux Toolkit with React and TypeScript</h1>
      {/* <Counter /> */}
      {/* <PassProps /> */}
      {/* <UserList />
      <AddTodo />
      <TodoList /> */}
      {/* <Header /> */}
      {/* <UserProfile /> */}
      {/* <ExampleEffect /> */}
      {/* <FetchData /> */}
      <FilterItems />
      <NewCounter />
    </div>
  );
}

export default App;
