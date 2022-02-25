import React from 'react'
import './CreateTodoButton.css'

export const CreateTodoButton = ({setOpenModal}) => {

    const onClickButton = () => {
        setOpenModal(prevState => !prevState);
    }
  return (
    <div>
        <button 
            className='todo-button' 
            onClick={ onClickButton }
        >
            +
        </button>
    </div>
  )
}
