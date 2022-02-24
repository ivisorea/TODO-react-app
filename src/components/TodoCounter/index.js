import React from 'react'
import './TodoCounter.css'

export const TodoCounter = ({ total, completed}) => {
  return (
    <div>
        <h2 className='todo-counter'>You have completed {completed} of {total}</h2>
    </div>
  )
}
