import React from 'react'
import './TodoItem.css'

export const TodoItem = (props) => {
    
  return (
    <li className='todo-item'>
        <i 
          onClick={props.onComplete}
          className={`fa-solid fa-check icon icon-check ${props.completed && 'icon-check--active'}`}>
        </i>
        <p className={`todo-item-p ${props.completed && 'todo-item-p--complete'}`}>
            {props.text}
        </p>
        <i 
          class="icon icon-delete fa-regular fa-trash-can"
          onClick={props.onDelete}>
        </i>

        {/* <span 
            className='icon icon-delete'
            onClick={props.onDelete}
            >
            x
        </span> */}
        
    </li>
  )
}
