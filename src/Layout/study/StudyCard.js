import React, { useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import FlipBtn from './FlipBtn'
import NextBtn from './NextBtn'
import AddCardsBtn from './AddCardsBtn'

function StudyCard({ cards, currentcard, setCurrentcard, deckId }) {
  const [cardCount, setCardCount] = useState(1);
  const [frontOfcard, setFrontOfCard] = useState(true);

  const history = useHistory();
  const { url } = useRouteMatch();

// FUNCTION TO HANDLE CLICKS ON THE Next BUTTON //
  const NextCardHandler = () => {
    // KEEPS TRACK OF WHICH CARD IS CURRENTLY DISPLAYED //
    if (cardCount < cards.length) {
       setFrontOfCard((currentSide) => !currentSide);
       setCurrentcard(cards[cardCount]);
       setCardCount((currentCount) => currentCount + 1) ;
    } else {
    // ONCE USER REACHES LAST CARD OF DECK THEY WILL BE ASKED TO RESTART THE DECK OF CARDS OR RETURN TO HOME //
    if (window.confirm("Restart cards? Click 'cancel' to return to home page.")) {
        setFrontOfCard((currentSide) => !currentSide);
        setCurrentcard(cards[0]);
        setCardCount(1);
        history.push(url);
    } else {
        history.push("/");
    }
    }
  }

// IF THERE ARE LESS THAN 3 CARDS IN THE DECK, THE USER WILL BE PROMPTED TO ADD CARDS TO THE DECK //
  if (cards.length < 3) {
    return (
        <div>
            <h4 className='text-danger'>Not enough cards!</h4>
            <p>You need at least 3 cards to study. There are {cards.length} cards in this deck.</p>
            <AddCardsBtn deck={deckId} />
        </div>
    )
  }

// RENDERS THE FRONT OF CARD AND THE "Flip" BUTTON IF frontOfCard IS TRUE //
  if (frontOfcard) {
    return (
        <div className='deck-card card'>
            <div className='card-body'>
                <h5 className='card-title'>Card {cardCount} of {cards.length}</h5>
                <p className='font-weight-bold font-italic mb-0'>Front:</p>
                <p className='card-text'>{currentcard.front}</p>
                <FlipBtn setFrontOfCard={setFrontOfCard} />
            </div>
        </div>
    )
  }

// RENDERS THE BACK OF CARD AND THE "Flip" BUTTON IF frontOfCard IS FALSE
  return (
    <div className='deck-card card'>
        <div className='card-body'>
            <h5 className='card-title'>Card {cardCount} of {cards.length}</h5>
            <p className='font-weight-bold font-italic mb-0'>Back:</p>
            <p className='card-text'>{currentcard.back}</p>
            <FlipBtn setFrontOfCard={setFrontOfCard} />
            <NextBtn NextCardHandler={NextCardHandler} />
        </div>
    </div>
  )
}

export default StudyCard