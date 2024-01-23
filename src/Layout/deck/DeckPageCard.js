import React from 'react'
import { useHistory } from "react-router-dom"
import { deleteCard } from '../../utils/api'

function DeckPageCard({ cards, deckId, url }) {
  const history = useHistory();

/* WHEN USER CLICKS "Trash Icon" BUTTON THEY WILL BE GIVEN A WARNING MESSAGE
IF THE USER CLICKS "Ok" THE DECK WILL BE DELETED AND NO LONGER RECOVERABLE */
const handleDeleteClick = (card) => {
  if (window.confirm("Delete this card? You will no longer be able to recover it")) {
    deleteCard(card.id);
  }
}

// CREATING A CARD FOR EACH CARD IN THE DECK //
const cardDisplay = cards.map((card, index) => {
  return (
    <div className='deck-card card mt-2' key={index}>
      <div className='card-body row'>
        <div className='col-md-5 pl-3'>
          <p className='font-weight-bold'>Front:</p>
          <p className='card-text'>{card.front}</p>
        </div>
        <div className='col-md-5 ml-auto'>
          <p className='font-weight-bold'>Back:</p>
          <p className='card-text'>{card.back}</p>
        </div>
      </div>

      <hr />

      <div className='ml-auto mt-2'>
        <button
          type='button'
          className='btn btn-dark mr-2'
          onClick={() => history.push(`/decks/${deckId}/cards/${card.id}/edit`)}
        >
          <span className='oi oi-pencil'/> Edit
        </button>

        <button 
          type='button'
          className='btn btn-danger'
          onClick={() => handleDeleteClick(card)}
        >
          {/* THE ANCHOR ELEMENT WILL TRIGGER THE PAGE TO REFRESH AFTER THE CARD HAS BEEN DELETED
          THIS MAKES IT SO THAT THE REFRESHED PAGE WILL NO LONGER DISPLAY THE DELETED CARD */}
          <a href={url} className='text-white'>
            <span className='oi oi-trash' />
          </a>         
        </button>
      </div>
    </div>
  )
})

// IF THERE ARE CARDS IN THE DECK, THEY WILL SHOW OTHERWISE THIS MESSAGE APPEARS //
  if (cards.length) {
    return <div>{cardDisplay}</div>
  } else {
    return "There are no cards in this deck yet!"
  }
 
}

export default DeckPageCard