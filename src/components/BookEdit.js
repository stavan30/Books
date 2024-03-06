import React from 'react'
import { useState } from 'react'

const BookEdit = ({Book, onSubmit}) => {
  const [title, setTitle] = useState(Book.title)

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(Book.id, title);
  }

  return (
    <form onSubmit={handleSubmit} className='book-edit'>
      <label>Title</label>
      <input onChange={handleChange} value={title} className='input'/>
      <button className='button is-primary'>
        Save
      </button>
    </form>
  )
}

export default BookEdit