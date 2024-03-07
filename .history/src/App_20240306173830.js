import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'

const App = () => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3002/books')

        setBooks(response.data);
    }

    useEffect(()=>{
        fetchBooks();
    },[])

    const editBookById = async (id, newTitle) => {

        const response = await axios.put(`http://localhost:3002/books/${id}`,{
            title: newTitle
        })

        console.log(response)
        const updatedBooks = books.map((book)=>{
            if (book.id === id){
                return {...books, title: newTitle}
            }

            return books
        })

        setBooks(updatedBooks)
    }

    //Use Filter function to delete a book by its id, usually to delete an object in an array we use filter function.
    const deleteBookById = (id) =>{
        const updatedBooks = books.filter((book)=>{
            return book.id !== id;
        })

        setBooks(updatedBooks);
    }

    const createBook = async (title) =>{
        const response = await axios.post('http://localhost:3002/books',{
            title: title,
        })
        
        //Spread Operator to add the previous books with the new one
        const updatedBooks = [
            ...books, 
            response.data
        ];
        setBooks(updatedBooks)
    }

  return (
    <div className='app'>
        <h1>Reading List</h1>
        <BookList onEdit={editBookById} onDelete={deleteBookById} Books={books}/>
        <BookCreate onCreate={createBook}/>
    </div>
    
  )
}

export default App