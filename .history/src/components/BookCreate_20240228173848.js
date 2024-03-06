import React from 'react'
import { useState} from 'react'

const BookCreate = (CreateBook) => {

    const [bookname, setBookName] = useState('')

    const handleChange = (event) => {
        setBookName(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        CreateBook(bookname)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default BookCreate