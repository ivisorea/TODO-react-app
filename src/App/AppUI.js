import React from 'react';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { TodoItem } from '../components/TodoItem';

export const AppUI = (
    {
        totalTodos,
        completedTodos,
        search,
        setSearch,
        searchedTodos,
        completeTodos,
        deleteTodo
    }
) => {
  return (
    <>
        <TodoCounter
            total={totalTodos}
            completed={completedTodos}
        />
        <TodoSearch
            search={search}
            setSearch={setSearch}
            />
        <TodoList>

            {searchedTodos.map(todo => (
            <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.isCompleted}
                onComplete={() => completeTodos(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
            ))}
        </TodoList>
        <CreateTodoButton/>
    </>
  )
}
