import React from 'react'
import { useState } from 'react'
import BookCreate from './components/BookCreate';

const App = () => {
    const [books, setBooks] = useState([]);

    const createBook = (title) =>{
        console.log('Book is created', title)
    }

  return (
    <div>
        <BookCreate />
    </div>
    
  )
}

export default App