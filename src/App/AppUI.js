import React from 'react';
import { TodoContext } from '../TodoContext';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { TodoItem } from '../components/TodoItem';

export const AppUI = () => {

  return (
    <>
        <TodoCounter/>
        <TodoSearch/>
        
        <TodoContext.Consumer>
            {({
                error,
                loading,
                searchedTodos,
                completeTodos,
                deleteTodo
            }) => (
                <TodoList>
                {error && <p>THERE WAS AN ERROR!!!</p>}
                {loading && <p>LOADING...</p>}
                {(!loading && !searchedTodos.length) && <p>Create your ToDo</p>}
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
            )}
        </TodoContext.Consumer>

        <CreateTodoButton/>
    </>
  )
}
