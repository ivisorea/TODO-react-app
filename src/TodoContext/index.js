import React, { createContext, useState} from 'react'
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS', []);
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
    <TodoContext.Provider value={
        {
            totalTodos,
            completedTodos,
            search,
            setSearch,
            searchedTodos,
            completeTodos,
            deleteTodo,
            loading,
            error
        }
    }>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoProvider, TodoContext };
