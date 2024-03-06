import React from 'react'
import { useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'

const App = () => {
    const [books, setBooks] = useState([]);

    //Use Filter function to delete a book by its id, usually to delete an object in an array we use filter function.
    const deleteBookById = (id) =>{
        const updatedBooks = books.filter((book)=>{
            return book.id != id;
        })
    }

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
    <div className='app'>
        <BookList onDelete={deleteBookById} Books={books}/>
        <BookCreate onCreate={createBook}/>
    </div>
    
  )
}

export default App