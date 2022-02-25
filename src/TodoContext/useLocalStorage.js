import { useState, useEffect} from "react";

export const useLocalStorage = (itemName, initialValue) =>{
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(false);
        const [item, setItem] = useState(initialValue);
        
        useEffect (() => {
          setTimeout(() => {
          try {  const localStorageItem = localStorage.getItem(itemName);
            if (!localStorageItem) {
              localStorage.setItem(itemName, JSON.stringify(initialValue));
            }
            setItem(JSON.parse(localStorageItem));
            setLoading(false);}
          catch (e) {
            setError(true);
            setLoading(false);
          }
          }, 1000);
        });
      
        const saveItem = (newItem) => {
          try {localStorage.setItem(itemName, JSON.stringify(newItem));
          setItem(newItem);}
          catch (e) {
            setError(true);
          }
        }
        return {
          item, 
          saveItem,
          loading,
          error
        };
      }