import React from 'react'
import { useHistory } from 'react-router-dom'
import DeleteDeckBtn from './DeleteDeckBtn'
import DeckPageCard from './DeckPageCard'

function DeckInfo({ deckName, deckDesc, deckId, cards, url }) {
  const history = useHistory();

  return (
    <div>
      <h2>{deckName}</h2>
      <p>{deckDesc}</p>
      <div className="d-flex mb-4">
        <div className="mr-auto">
          <button
            type="button"
            className="btn btn-dark mr-2"
            onClick={() => history.push(`/decks/${deckId}/edit`)}
          >
            <span className="oi oi-pencil" /> Edit
          </button>
          <button
            type="button"
            className="btn btn-primary mr-2"
            onClick={() => history.push(`/decks/${deckId}/study`)}
          >
            <span className="oi oi-book" /> Study
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => history.push(`/decks/${deckId}/cards/new`)}
          >
            <span className="oi oi-plus" /> Add Cards
          </button>
        </div>
        <div>
          <DeleteDeckBtn deckId={deckId} />
        </div>
      </div>

      <div>
        <h3>Cards</h3>
        {/* RENDERS CARDS IN THE DECK ALONG WITH BUTTONS */}
        <DeckPageCard cards={cards} deckId={deckId} url={url} />
      </div>
    </div>
  )
}

export default DeckInfo