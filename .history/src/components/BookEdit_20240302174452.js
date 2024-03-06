import React from 'react'
import { useState } from 'react'

const BookEdit = () => {
  const [title, setTitle] = useState('')

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('New Title', title)
  }

  return (
    <form onSubmit={handleSubmit} className='book-edit'>
      <label>Title</label>
      <input onChange={handleChange} value={title} className='input'/>
      <button>
        Save
      </button>
    </form>
  )
}

export default BookEdit