import React from 'react'


import './TodoSearch.css'

export const TodoSearch = ({search, setSearch}) => {

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
