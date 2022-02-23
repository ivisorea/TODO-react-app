import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';

const todos = [
  {text: 'Learn React', isCompleted: true},
  {text: 'Learn Redux and React-Redux', isCompleted: false},
  {text: 'Learn React Router', isCompleted: false},
];

export const App = () => {
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>

        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.isCompleted}
            />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  )
}