import React, { useContext } from 'react'
import { TodoContext } from '../../TodoContext'

import './TodoSearch.css'

export const TodoSearch = () => {
  const { search, setSearch } = useContext(TodoContext)

    const onSearchChange = (event) => {
        setSearch(event.target.value)
    }
  return (
    <div>
      <input 
        className='todo-search' 
        placeholder='Search ToDo...'
        value={search}
        onChange={ onSearchChange }
        />
    </div>
  )
}
