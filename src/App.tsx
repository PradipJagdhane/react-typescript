import React from 'react';
import './App.css';

import FilterItems from './components/hooks/useMemo/filterData';
import NewCounter from './components/hooks/useReducer/CounterEx';
import ThemeSwitcher from './components/hooks/useContext/ThemeSwitcher';
import { Themprovider } from './components/hooks/useContext/ThemeContext';
import SearchItems from './components/hooks/useCallback/serachItem';

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
      {/* <FilterItems /> */}
      <NewCounter />
      <Themprovider>
      <ThemeSwitcher />

      </Themprovider>

      <SearchItems />

    </div>
  );
}

export default App;
