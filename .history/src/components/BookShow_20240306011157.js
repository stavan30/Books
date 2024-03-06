import React from 'react'
import { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({Book, onDelete, onEdit}) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = () => {
    setShowEdit(false)
  }

  let content = <h3>{Book.title}</h3>

  if(showEdit) {
    content = <BookEdit onEdit={onEdit} Book={Book}/>
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