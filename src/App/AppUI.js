import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { TodoItem } from '../components/TodoItem';
import { Modal } from '../Modal';
import { TodoForm } from '../components/TodoForm';

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
