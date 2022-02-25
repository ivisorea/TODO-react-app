import React, { useState, useContext } from 'react'
import { TodoContext } from '../../TodoContext'
import './TodoForm.css'

export const TodoForm = () => {
    const [newTodoValue, setNewTodoValue] = useState('')
    const { addTodo, setOpenModal } = useContext(TodoContext)

    const onSubmitHandler = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setNewTodoValue('')
        setOpenModal(false)
    }

    const onKeyUp = (e) => {
        if (e.charCode === 13) {
          e.preventDefault();
          addTodo(newTodoValue);
          setOpenModal(false);
        }
      };

  return (
    <form 
        className="todo-form"
        onSubmit={onSubmitHandler} 
        onKeyPress={onKeyUp}>
        <textarea
            className='todo-form__textarea'
            value={newTodoValue}
            onChange={(event) => setNewTodoValue(event.target.value)} 
            type="text" 
            placeholder="Add Todo" />
        <div className='todo-form__button--box'>
            <button 
                className='todo-form__button todo-form__button--cancel'
                onClick={() => setOpenModal(false)}
                type="button">
                    
                Cancel
            </button>
            <button 
                className='todo-form__button todo-form__button--add'
                type="submit">
                Add
            </button>
        </div>
    </form>
  )
}
