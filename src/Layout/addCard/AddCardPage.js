import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { readDeck, createCard } from '../../utils/api'
import AddCardBreadcrumbNav from './AddCardBreadcrumbNav'
import DoneBtn from './DoneBtn'
import CardForm from './CardForm'

function AddCardPage() {
  const [deck, setDeck] = useState({});
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");
  const deckId = useParams().deckId;

// LOADS DECK FROM API //
  useEffect(() => {
    async function loadDeck() {
      const response = readDeck(deckId)
      const deckFromApi = await response
      setDeck(deckFromApi)
    }
    loadDeck()
  }, [deckId])

// HANDLING CHANGES TO THE FRONT AND BACK OF THE CARD IN THE FORM //
  const handleFrontChange = (event) => (event.target.value)
  const handleBackChange = (event) => (event.target.value)

/* WEHN THE USER CLICKS THE "Save" BUTTONTHE NEW CARD WILL BE CREATED USING createCard()
THE TEXT AREA FOR THE FRONT AND BACK OF THE CARD WILL BE CLEARED AND THE PROCESS FOR ADDING
A CARD IS RESET */
const handleAddCardSave = (event) => {
  event.preventDefault();
  createCard(deckId, { front: cardFront, back: cardBack });
  setCardFront("");
  setCardBack("");
};

// IF DECK WAS FETCHED FROM API THE FOLLOWING WILL RENDER OTHERWISE "Loading.." WILL DISPLAY //
  if (deck.name) {
    return (
      <div>
        <AddCardBreadcrumbNav deckName={deck.name} deckId={deckId}/>
        <h2>{deck.name}: Add Card</h2>
        <form onSubmit={handleAddCardSave}>
          <CardForm
            cardFront={cardFront}
            handleFrontChange={handleFrontChange}
            cardBack={cardBack}
            handleBackChange={handleBackChange}
          />
          <DoneBtn deckId={deckId} />
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </form>
      </div>
    )
  }
  return "Loading..."
}

export default AddCardPage