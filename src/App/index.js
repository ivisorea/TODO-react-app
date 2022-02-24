import React, { useState} from 'react';
import { AppUI } from './AppUI';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { TodoItem } from '../components/TodoItem';

// const defTodos = [
//   {text: 'Learn React', isCompleted: true},
//   {text: 'Learn Redux and React-Redux', isCompleted: false},
//   {text: 'Learn React Router', isCompleted: false},
//   {text: 'Learn React Hooks', isCompleted: false},
//   {text: 'Learn React Testing', isCompleted: true},
// ];

export const App = () => {
  const localStorageTodos = localStorage.getItem('TODOS');

  const [todos, setTodos] = useState(!localStorageTodos ? JSON.stringify([]) : JSON.parse(localStorageTodos));
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

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS', JSON.stringify(newTodos));
    setTodos(newTodos);
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