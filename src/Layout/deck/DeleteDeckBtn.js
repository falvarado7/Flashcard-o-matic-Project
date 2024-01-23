import React from 'react'
import { useHistory } from "react-router-dom"
import { deleteDeck } from '../../utils/api'

function DeleteDeckBtn({ deckId }) {
  const history = useHistory();

/* WHEN USER CLICKS "Trash Icon" BUTTON THEY WILL BE GIVEN A WARNING MESSAGE
IF THE USER CLICKS "Ok" THE DECK WILL BE DELETED AND NO LONGER RECOVERABLE */
  const handleDeleteClick = () => {
    if (window.confirm("Delete this deck? You will no longer be able to recover it.")) {
      deleteDeck(deckId).then(() => history.push("/"));
    }
  };

  return (
    <button
      type='button'
      className='btn btn-danger'
      onClick={handleDeleteClick}
    >
      <span className='oi oi-trash' />
    </button>
  )
}

export default DeleteDeckBtn