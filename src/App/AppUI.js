import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { TodoItem } from '../components/TodoItem';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { TodoError } from '../components/TodoError';
import { TodoLoading } from '../components/TodoLoading';
import { EmptyTodos } from '../components/EmptyTodos';

export const AppUI = () => {
    const {
        error,
        loading,
        searchedTodos,
        completeTodos,
        deleteTodo,
        openModal,
        setOpenModal,
    } = useContext(TodoContext);
  return (
    <>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
            {error && <TodoError/>}
            {loading && <TodoLoading/>}
            {(!loading && !searchedTodos.length) && <EmptyTodos/>}
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
        {!!openModal && (
            <Modal>
                <TodoForm/>
            </Modal>
        )}
        
        <CreateTodoButton
            setOpenModal={setOpenModal}
        />
    </>
  )
}
