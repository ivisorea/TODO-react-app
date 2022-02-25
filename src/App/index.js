import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

export const App = () => {
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
  )
}