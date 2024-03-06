import React from 'react'
import { useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'

const App = () => {
    const [books, setBooks] = useState([]);

    
    const createBook = (title) =>{
        //Spread Operator to add the previous books with the new one
        const updatedBooks = [
            ...books, 
            {
                id: Math.round(Math.random() * 9999), 
                title:title
            }
        ];
        setBooks(updatedBooks)
    }

  return (
    <div>
        <BookList />
        <BookCreate onCreate={createBook}/>
    </div>
    
  )
}

export default App