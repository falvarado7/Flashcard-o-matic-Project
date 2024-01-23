import React from 'react'
import { deleteDeck } from '../../utils/api'

function DeleteDeckBtn({ deck }) {
  /* WHEN USER CLICKS THE "Trash Icon" BUTTON, THE WARNING MESSAGE
  BELOW WILL BE SHOWN. IF THE USER CLICKS "Ok" THE DECK WILL BE DELETED FROM HOME SCREEN
  */
const handleDeleteClick = () => {
    if(window.confirm("Delete deck? It will no longer be recovered."))
    {
        deleteDeck(deck.id)
    }
}

  return (
    <button
        type='button'
        className='btn btn-danger'
        onClick={handleDeleteClick}
    >
        <a href='/' className='text-white'>
            <span className='oi oi-trash'/>
        </a>
    </button>
  )
}

export default DeleteDeckBtn