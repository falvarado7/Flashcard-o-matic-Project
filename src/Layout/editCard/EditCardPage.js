import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { readCard, readDeck, updateCard } from '../../utils/api'
import EditCardBreadcrumbNav from './EditCardBreadcrumbNav'
import CardForm from '../addCard/CardForm'
import CancelBtn from './CancelBtn'

function EditCardPage() {
  const [deck, setDeck] = useState({});
  const [preExistingCard, setPreExistingCard] = useState({});
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");
  const deckId = useParams().deckId;
  const cardId = useParams().cardId;
  const history = useHistory();

// LOADS DECK FROM API //
  useEffect(() => {
    async function loadDeck() {
      const response = readDeck(deckId)
      const deckFromApi = await response
      setDeck(deckFromApi)
    }
 
// LOADS THE CARD FROM API //
    async function loadCard() {
      const response = readCard(cardId)
      const cardFromApi = await response
      setPreExistingCard(cardFromApi)
      setCardFront(cardFromApi.front)
      setCardBack(cardFromApi.back)
    }
    loadDeck()
    loadCard()
  }, [deckId, cardId])
  
// HANDLES FORM CHANGES //
  const handleFrontChange = (event) => setCardFront(event.target.value);
  const handleBackChange = (event) => setCardBack(event.target.value);

/* UPDATING THE CARD WITH THE CHANGES TO THE FRONT AND BACK OF THE CARD
CLICKING SUBMIT WILL ALSO THEN TAKE USER BACK TO THE DECKS PAGE */
  const handleEditCardSubmit = (event) => {
    event.preventDefault();
    updateCard({ ...preExistingCard, front: cardFront, back: cardBack })
      .then((updatedCard) => history.push(`/decks/${updatedCard.deckId}`));
  };

  return (
    <div>
      <EditCardBreadcrumbNav 
        deckName={deck.name}
        deckId={deckId}
        cardId={cardId}
      />
      <h2>Edit Card</h2>
      <form onSubmit={handleEditCardSubmit}>
        <CardForm
          cardFront={cardFront}
          handleFrontChange={handleFrontChange}
          cardBack={cardBack}
          handleBackChange={handleBackChange}
        />
        <CancelBtn deckId={deckId} />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditCardPage