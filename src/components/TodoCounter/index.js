import React, { useContext} from 'react'
import { TodoContext } from '../../TodoContext'
import './TodoCounter.css'

export const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(TodoContext)
  return (
    <div>
        <h2 className='todo-counter'>You have completed {completedTodos} of {totalTodos}</h2>
    </div>
  )
}
