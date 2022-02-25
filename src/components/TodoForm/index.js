import React, { useState, useContext } from 'react'
import { TodoContext } from '../../TodoContext'

export const TodoForm = () => {
    const [newTodoValue, setNewTodoValue] = useState('')
    const { addTodo, setOpenModal } = useContext(TodoContext)

    // const onChangeHandler = (event) => {
    //     setNewTodoValue(event.target.value)
    // }

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
    <form onSubmit={onSubmitHandler} onKeyPress={onKeyUp}>
        <textarea
            value={newTodoValue}
            onChange={(event) => setNewTodoValue(event.target.value)} 
            type="text" 
            placeholder="Add Todo" />
        <div>
            <button 
                onClick={() => setOpenModal(false)}
                type="button">
                    
                Cancel
            </button>
            <button 
                type="submit">
                Add
            </button>
        </div>
    </form>
  )
}
