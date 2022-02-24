import React from 'react'
import './TodoItem.css'

export const TodoItem = (props) => {

    const onCompleteTodo = () => {
        alert('You completed a todo!'+ props.text)
    }
    const onDeleteTodo = () => {
        alert('You deleted a todo!' +props.text)
    }

  return (
    <li className='todo-item'>
        <span  
            className={`icon icon-check ${props.completed && 'icon-check--active'}`}
            onClick={onCompleteTodo}
            >
            √
        </span>
        <p className={`todo-item-p ${props.completed && 'todo-item-p--complete'}`}>
            {props.text}
        </p>
        <span 
            className='icon icon-delete'
            onClick={onDeleteTodo}
            >
            x
        </span>
    </li>
  )
}
