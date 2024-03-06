import React from 'react'
import { useState } from 'react'
import BookCreate from './components/BookCreate';

const App = () => {
    const [books, setBooks] = useState([]);

    
    const createBook = (title) =>{
        //Spread Operator to add the previous books with the new one
        const updatedBooks = [...books, 
            {
                id: Math.round(Math.random() * 9999), 
                title:title
            }];
        setBooks(updatedBooks)
    }

  return (
    <div>
        {books.length}
        <BookCreate onCreate={createBook}/>
    </div>
    
  )
}

export default App