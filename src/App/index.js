import React, { useState} from 'react';
import { AppUI } from './AppUI';

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  const [item, setItem] = useState(!localStorageItem ? JSON.stringify(initialValue) : JSON.parse(localStorageItem));

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }
  return [item, saveItem];
}

export const App = () => {
  const [todos, saveTodos] = useLocalStorage('TODOS', []);
  const [search, setSearch] = useState('')
  
  const completedTodos = todos.filter(todo => !!todo.isCompleted).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      return todo.text.toLowerCase().includes(search.toLowerCase());
      });

  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].isCompleted = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
      <AppUI
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        search={search}
        setSearch={setSearch}
        searchedTodos={searchedTodos}
        completeTodos={completeTodos}
        deleteTodo={deleteTodo}
      />
  )
}