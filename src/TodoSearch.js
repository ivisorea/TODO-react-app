import React, { useState } from 'react'


import './TodoSearch.css'

export const TodoSearch = () => {
    const [search, setSearch] = useState('')

    const onSearchChange = (event) => {
        setSearch(event.target.value)
    }
  return (
    <div>
      <input 
        className='todo-search' 
        placeholder='Add Todo'
        value={search}
        onChange={ onSearchChange }
        />
    </div>
  )
}
