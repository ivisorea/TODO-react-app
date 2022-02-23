import React from 'react'
import './CreateTodoButton.css'

export const CreateTodoButton = () => {

    const onClickButton = () => {
        alert('You clicked the button!')
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
