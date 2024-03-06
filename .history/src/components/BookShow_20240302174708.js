import React from 'react'
import { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({Book, onDelete}) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  let content = <h3>{Book.title}</h3>

  if(showEdit) {
    content = <BookEdit/>
  }

  const handleDeleteClick = () => {
    onDelete(Book.id)
  }
  return (
    <div className='book-show'>
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow