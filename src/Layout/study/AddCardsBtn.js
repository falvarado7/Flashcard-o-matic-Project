import React from 'react'
import { useHistory } from 'react-router-dom'

function AddCardsBtn({ deckId }) {
  const history = useHistory();

  return (
    <button
        type='button'
        className='btn btn-success'
        onClick={() => history.push(`/decks/${deckId}/cards/new`)}
    >
        <span className='oi oi-plus' /> Add Cards
    </button>
  )
}

export default AddCardsBtn